import Head from 'next/head';
import HomeSection from '../components/Home/HomeSection.jsx';
import AboutUsSection from '../components/Home/AboutUsSection';
import BestSellersSection from '../components/Home/BestSellersSection';
import Golf3dSection from '../components/Home/Golf3dSection';
import BookSection from '../components/Home/BookSection';
import FooterSection from '../components/Layouts/Footer';

import Navbar from '../components/Layouts/Navbar.jsx';
export default function Home() {
    return (
        <div>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/favicon.ico" crossOrigin />
            </Head>
            <Navbar></Navbar>
            <main>
                <HomeSection />
                <AboutUsSection />
                <BestSellersSection />
                <Golf3dSection />
                <BookSection />
                <FooterSection />
            </main>

            <footer></footer>
        </div>
    );
}
