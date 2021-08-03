import Head from 'next/head';
import Hero from '../components/home/Hero';
import AdditionalFeatures from '../components/home/AdditionalFeatures';
import DedServerSection from '../components/home/DedServerSection';
import ModdingSupportSection from '../components/home/ModdingSupportSection';
import EnhancedClientSection from '../components/home/EnhancedClientSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>BO2, MW3, WaW redefined. - Plutonium Project</title>
            </Head>

            <Hero />
            <DedServerSection />
            <ModdingSupportSection />
            <EnhancedClientSection />
            <AdditionalFeatures />
        </>
    );
}
