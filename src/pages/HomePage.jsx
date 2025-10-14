import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DirectorySection from '@/components/DirectorySection';
import EmprendedoresSection from '@/components/EmprendedoresSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <Helmet>
       
        <meta name="description" content="Plataforma digital que conecta microempresas y emprendedores locales de Argentina con consumidores de proximidad. Descubre negocios locales en tu barrio." />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <DirectorySection />
        <EmprendedoresSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;