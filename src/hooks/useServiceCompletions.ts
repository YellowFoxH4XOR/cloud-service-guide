import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ServiceCompletion {
  service_name: string;
  completed: boolean;
}

export function useServiceCompletions() {
  const [completions, setCompletions] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompletions();
  }, []);

  const fetchCompletions = async () => {
    try {
      const { data, error } = await supabase
        .from('service_completions')
        .select('service_name, completed');

      if (error) throw error;

      const completionMap = data?.reduce((acc, item) => {
        acc[item.service_name] = item.completed;
        return acc;
      }, {} as Record<string, boolean>) || {};

      setCompletions(completionMap);
    } catch (error) {
      console.error('Error fetching completions:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCompletion = async (serviceName: string) => {
    const currentStatus = completions[serviceName] || false;
    const newStatus = !currentStatus;

    // Optimistic update
    setCompletions(prev => ({
      ...prev,
      [serviceName]: newStatus
    }));

    try {
      const { error } = await supabase
        .from('service_completions')
        .upsert(
          { service_name: serviceName, completed: newStatus },
          { onConflict: 'service_name' }
        );

      if (error) throw error;
    } catch (error) {
      console.error('Error updating completion:', error);
      // Revert optimistic update
      setCompletions(prev => ({
        ...prev,
        [serviceName]: currentStatus
      }));
    }
  };

  const isCompleted = (serviceName: string) => {
    return completions[serviceName] || false;
  };

  return {
    completions,
    loading,
    toggleCompletion,
    isCompleted
  };
}