import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { CalendarDays } from 'lucide-react';

export function FloatingBookCall() {
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
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-5 py-3 bg-accent text-accent-fg rounded-full shadow-lg hover:opacity-90 transition-all duration-300 text-sm font-medium"
    >
      <CalendarDays className="w-4 h-4" />
      <span>Schedule a Call</span>
    </button>
  );
}
