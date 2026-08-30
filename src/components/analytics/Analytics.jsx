import { useEffect } from 'react';
import { useLocation } from 'react-router';

const GA_TRACKING_ID = 'G-G75J93QTDZ';

function Analytics() {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag == 'function') {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: location.pathname + location.search + location.hash, 
                page_title: document.title
            });
        }
    }, [location]);
    return null;
}

export default Analytics;