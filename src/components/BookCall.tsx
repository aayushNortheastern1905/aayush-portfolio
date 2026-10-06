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
      aria-label="book a call"
      data-cal-namespace="30min"
      data-cal-link="aayush-sawant-7002/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="flex items-center gap-1.5 p-1.5 rounded-md hover:bg-neutral-800/80 text-gray-500 hover:text-gray-300 transition-all font-sans"
    >
      <CalendarDays className="w-5 h-5" />
      <span className="text-xs font-semibold tracking-wide">Book a call</span>
    </button>
  );
}
