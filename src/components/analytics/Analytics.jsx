import { useEffect } from 'react';
import { useLocation } from 'react-router';

const GA_TRACKING_ID = 'G-G75J93QTDZ';

function Analytics() {
    const location = useLocation();

    useEffect(() => {
        console.log('route changed ->', location.pathname, location.hash);
        console.log('gtag exists?', typeof window.gtag);
        if (typeof window.gtag == 'function') {
            const fullUrl = window.location.origin + window.location.pathname + location.hash;
            window.gtag('event', 'page_view', {
                page_location: fullUrl,
                page_path: location.pathname + location.search + location.hash,
                page_title: document.title,
                send_to: GA_TRACKING_ID
            });
        }
    }, [location]);
    return null;
}

export default Analytics;