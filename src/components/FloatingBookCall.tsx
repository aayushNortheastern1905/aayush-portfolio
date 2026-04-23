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
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-5 py-3.5 bg-accent text-accent-fg rounded-2xl text-left group"
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
      }}
    >
      <CalendarDays className="w-5 h-5 flex-shrink-0 opacity-90" />
      <div>
        <div className="text-sm font-semibold leading-tight">Schedule a Call</div>
        <div className="text-xs opacity-70 leading-snug mt-0.5">Next hire or just an idea? Let's talk.</div>
      </div>
    </button>
  );
}
