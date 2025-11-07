"use client";

import { useCallback, useEffect, useState } from "react";

interface UseFetchOptions<T> {
  immediate?: boolean;
  initialData?: T;
}

export function useFetch<T>(request: () => Promise<T>, options?: UseFetchOptions<T>) {
  const { immediate = true, initialData } = options ?? {};
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<boolean>(Boolean(immediate));
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await request();
      setData(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unexpected error");
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    if (immediate) {
      void execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
}

