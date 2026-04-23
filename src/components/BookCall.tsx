import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { CalendarDays } from 'lucide-react';

export function BookCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="aayush-sawant-7002/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="inline-flex items-center space-x-2 px-8 sm:px-10 py-3 sm:py-4 bg-accent text-accent-fg hover:opacity-80 transition-all duration-300 text-sm font-medium rounded-lg"
    >
      <CalendarDays className="w-4 h-4" />
      <span>Schedule a Call</span>
    </button>
  );
}
