// src/hooks/useApplications.ts
import { useState, useEffect, useCallback } from 'react';
import { applicationsService } from '../services/applications';
import type { Application, ApplicationFilters } from '../types';

export function useApplications(filters?: ApplicationFilters) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await applicationsService.getAll(filters);
      setApplications(data);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load applications');
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]); // eslint-disable-line

  useEffect(() => { fetch(); }, [fetch]);

  return { applications, loading, error, refetch: fetch };
}
