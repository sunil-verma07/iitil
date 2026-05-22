// src/components/ui/Toast.tsx
import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

export type ToastType = 'success' | 'error';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] flex items-start gap-3 px-5 py-4 rounded-none border
        shadow-2xl max-w-sm w-full animate-slide-up
        ${
          type === 'success'
            ? 'bg-[#0A0E27] border-[#00D9FF]/40 text-[#E8EAF2]'
            : 'bg-[#0A0E27] border-red-500/40 text-[#E8EAF2]'
        }`}
    >
      {type === 'success' ? (
        <CheckCircle className="text-[#00D9FF] mt-0.5 shrink-0" size={18} />
      ) : (
        <XCircle className="text-red-400 mt-0.5 shrink-0" size={18} />
      )}
      <p className="text-sm font-light flex-1 leading-relaxed">{message}</p>
      <button onClick={onClose} className="text-[#7A82A8] hover:text-[#E8EAF2] transition-colors">
        <X size={15} />
      </button>
    </div>
  );
};

// Simple hook for toast management
import { useState, useCallback } from 'react';

interface ToastState {
  message: string;
  type: ToastType;
  id: number;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null);

  const show = useCallback((message: string, type: ToastType = 'success') => {
    setToast({ message, type, id: Date.now() });
  }, []);

  const hide = useCallback(() => setToast(null), []);

  return { toast, show, hide };
}
