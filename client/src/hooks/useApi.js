import { useState, useEffect, useCallback } from 'react';

export function useApi(apiCall, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiCall();
      setData(result.data);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
}

export function useMutation(mutationFn) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await mutationFn(...args);
      setData(result.data);
      return result;
    } catch (err) {
      setError(err.message || 'Mutation failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [mutationFn]);

  return { execute, loading, error, data };
}
