// src/hooks/useAuth.ts
import { useEffect, useState, createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";
import { authService } from "../services/auth";
import type { AdminUser } from "../types";

interface AuthContextValue {
  session: Session | null;
  adminUser: AdminUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  session: null,
  adminUser: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthProvider(): AuthContextValue {
  const [session, setSession] = useState<Session | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  // In useAuthProvider
  useEffect(() => {
    let initialised = false;

    const initAuth = async () => {
      try {
        const s = await authService.getSession();
        setSession(s);
        if (s?.user) {
          const admin = await authService.getAdminUser(s.user.id);
          setAdminUser(admin);
        }
      } catch (err) {
        console.error("AUTH INIT ERROR:", err);
      } finally {
        initialised = true;
        setLoading(false);
      }
    };

    initAuth();

    const { data: listener } = authService.onAuthStateChange(
      async (_event, s) => {
        // Skip the SIGNED_IN event that fires immediately on load
        // since initAuth already handled it
        if (!initialised && _event === "SIGNED_IN") return;

        try {
          setSession(s);
          if (s?.user) {
            const admin = await authService.getAdminUser(s.user.id);
            setAdminUser(admin);
          } else {
            setAdminUser(null);
          }
        } catch (err) {
          console.error("AUTH CHANGE ERROR:", err);
        } finally {
          setLoading(false);
        }
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    await authService.signIn(email, password);
  };

  const signOut = async () => {
    await authService.signOut();
  };

  return { session, adminUser, loading, signIn, signOut };
}
