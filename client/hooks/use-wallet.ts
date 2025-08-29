import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "guided_wallet_balance";

function readBalance(): number {
  try {
    const v =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    const n = v ? Number(v) : 0;
    return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
  } catch {
    return 0;
  }
}

function writeBalance(value: number) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        STORAGE_KEY,
        String(Math.max(0, Math.floor(value))),
      );
    }
  } catch {
    /* no-op */
  }
}

export function useWallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(readBalance());
  }, []);

  const addFunds = useCallback((amount: number) => {
    if (!Number.isFinite(amount) || amount <= 0) return;
    setBalance((b) => {
      const next = b + Math.floor(amount);
      writeBalance(next);
      return next;
    });
  }, []);

  const spend = useCallback((amount: number) => {
    if (!Number.isFinite(amount) || amount <= 0) return false;
    let ok = false;
    setBalance((b) => {
      if (b >= amount) {
        const next = b - Math.floor(amount);
        writeBalance(next);
        ok = true;
        return next;
      }
      return b;
    });
    return ok;
  }, []);

  const reset = useCallback(() => {
    writeBalance(0);
    setBalance(0);
  }, []);

  return { balance, addFunds, spend, reset } as const;
}
