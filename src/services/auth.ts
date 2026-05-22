import { supabase } from "../lib/supabase";
import type { AdminUser } from "../types";

export const authService = {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  },

  async getSession() {
    const { data } = await supabase.auth.getSession();

    return data.session;
  },
  async getAdminUser(userId: string): Promise<AdminUser | null> {

    const timeout = new Promise<null>((resolve) =>
    setTimeout(() => {
      console.warn("getAdminUser timed out");
      resolve(null);
    }, 5000)
  );

  const query = supabase
    .from("admin_users")
    .select("*")
    .eq("id", userId)
    .single()
    .then(({ data, error }) => {
      if (error) return null;
      return data as AdminUser;
    });

  return Promise.race([query, timeout]);
  
    try {
      const { data, error } = await supabase
        .from("admin_users")
        .select("*")
        .eq("id", userId) // ← filter in the query, not in JS
        .single(); // ← returns one row or null, not an array

      if (error) {
        // PGRST116 = no rows found, that's fine
        if (error.code === "PGRST116") return null;
        console.error("getAdminUser error:", error);
        return null;
      }

      return data as AdminUser;
    } catch (err) {
      console.error("getAdminUser exception:", err);
      return null;
    }
  },
  onAuthStateChange(
    callback: Parameters<typeof supabase.auth.onAuthStateChange>[0],
  ) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
