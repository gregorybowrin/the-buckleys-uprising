import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Analytics is now handled natively in index.html, but if we need custom route events, we can trigger window.gtag here.
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('config', 'G-9CC98M6PQH', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
