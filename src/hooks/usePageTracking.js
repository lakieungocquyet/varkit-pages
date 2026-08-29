import { useEffect } from 'react';
import { useLocation } from 'react-router';

const GA_TRACKING_ID = 'G-G75J93QTDZ';

function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== 'function') return;

        window.gtag('config', GA_TRACKING_ID, {
            page_path: location.pathname + location.search,
        });
    }, [location]);
}

export default usePageTracking;