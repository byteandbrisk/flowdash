import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Logos from '@/components/sections/Logos';
import Benefits from '@/components/sections/Benefits';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SocialIntegrations from '@/components/sections/SocialIntegrations';
import BlogTeaser from '@/components/sections/BlogTeaser';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Benefits />
        <FeatureGrid />
        <SocialIntegrations />
        <BlogTeaser />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
