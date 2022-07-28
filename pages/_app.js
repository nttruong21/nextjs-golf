import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/custom-slick-slider.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MainLayout from '../components/Layouts/Layout';
function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => url !== router.asPath && setLoading(true);
        const handleComplete = (url) =>
            url === router.asPath && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    return (
        loading && (
            <div className="spinner-wrapper">
                <div className="spinner"></div>
            </div>
        )
    );
}
function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Loading />
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
