
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { NextDeadlines } from "@/components/NextDeadlines";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ComptaMaroc - Guide de la Comptabilité Marocaine</title>
        <meta name="description" content="Guide complet de la comptabilité marocaine avec plan comptable, échéances fiscales, et ressources pour les professionnels." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <NextDeadlines />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
