"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

export default function StoryPage() {
  return (
    <>
      <TopNavBar />
      <main className="pt-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=900&fit=crop" 
              alt="Brand Hero" 
              fill 
              className="object-cover grayscale brightness-75 scale-105"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-margin-mobile">
            <h1 className="font-headline-lg text-5xl md:text-8xl mb-6 tracking-tighter uppercase">The Art of Essence</h1>
            <p className="font-label-caps text-[10px] tracking-[0.4em] opacity-80 uppercase">ESTABLISHED MCMLXXXIV</p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 md:col-start-3 text-center">
              <span className="font-label-caps text-[10px] text-on-surface-variant mb-8 block tracking-widest uppercase">PHILOSOPHY</span>
              <h2 className="font-headline-lg text-4xl md:text-5xl mb-12 italic leading-tight">Objects that whisper, stories that endure.</h2>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
                AESTHETE was founded on the singular principle that true luxury is not found in the volume of a brand's voice, but in the precision of its silence. We curate collections that serve as a testament to the beauty of the essential, blending historical craftsmanship with a modernist vision of form and function.
              </p>
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-4/5 overflow-hidden group grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=800&h=1000&fit=crop" 
                  alt="Craftsmanship" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 py-12 md:py-0">
              <span className="font-label-caps text-[10px] text-on-surface-variant mb-4 block tracking-widest uppercase">PROCESS</span>
              <h3 className="font-headline-md text-3xl md:text-4xl mb-6 leading-tight">Slow Craft, Perpetual Quality.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Every piece in our collection undergoes a six-month developmental cycle, ensuring that the silhouette is as timeless as the materials used. We collaborate with generational tanneries in Tuscany and weavers in Kyoto who preserve techniques nearly lost to time.
              </p>
              <button className="font-button text-[11px] uppercase border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all tracking-widest">
                Explore Our Makers
              </button>
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="bg-surface-container-low py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col gap-24">
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-primary/10 pt-12 group hover:bg-surface transition-colors duration-500 p-8">
                <span className="font-headline-md text-4xl italic group-hover:text-secondary transition-colors">1984</span>
                <div className="max-w-md mt-6 md:mt-0">
                  <h4 className="font-label-caps text-[10px] mb-4 tracking-widest uppercase">THE GENESIS</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Founded in a small subterranean studio in Milan, AESTHETE began as a bespoke atelier for private collectors seeking anonymity in their luxury.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-primary/10 pt-12 group hover:bg-surface transition-colors duration-500 p-8">
                <span className="font-headline-md text-4xl italic group-hover:text-secondary transition-colors">2002</span>
                <div className="max-w-md mt-6 md:mt-0">
                  <h4 className="font-label-caps text-[10px] mb-4 tracking-widest uppercase">GLOBAL EXPANSION</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Opening our flagship 'Ghost' boutiques in Paris and Tokyo, redefining retail through sensory experiences rather than traditional storefronts.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-primary/10 pt-12 group hover:bg-surface transition-colors duration-500 p-8">
                <span className="font-headline-md text-4xl italic group-hover:text-secondary transition-colors">2024</span>
                <div className="max-w-md mt-6 md:mt-0">
                  <h4 className="font-label-caps text-[10px] mb-4 tracking-widest uppercase">A NEW ERA</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Launching the Digital Archive, a permanent home for our limited editions and a platform for circular sustainability in high-luxury.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Imagery */}
        <section className="w-full h-[600px] relative">
          <Image 
            src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=1600&h=600&fit=crop" 
            alt="Brand Aesthetic" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </section>

        {/* Values Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
            <div className="p-16 border border-primary/5 hover:border-primary/10 transition-colors">
              <h5 className="font-label-caps text-[11px] mb-6 tracking-widest uppercase">INTEGRITY</h5>
              <p className="font-body-md text-on-surface-variant italic leading-relaxed">Honest materials, ethical origins, and transparent supply chains are the foundation of our house.</p>
            </div>
            <div className="p-16 border border-primary/5 hover:border-primary/10 transition-colors bg-surface-container-low">
              <h5 className="font-label-caps text-[11px] mb-6 tracking-widest uppercase">RESTRICTION</h5>
              <p className="font-body-md text-on-surface-variant italic leading-relaxed">We believe in making less, but making it better. Our collections are strictly limited to reduce waste.</p>
            </div>
            <div className="p-16 border border-primary/5 hover:border-primary/10 transition-colors">
              <h5 className="font-label-caps text-[11px] mb-6 tracking-widest uppercase">SILENCE</h5>
              <p className="font-body-md text-on-surface-variant italic leading-relaxed">The absence of noise allows for the appreciation of detail. We let our objects speak for themselves.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
