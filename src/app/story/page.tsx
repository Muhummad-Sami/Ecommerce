"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";

export default function StoryPage() {
  return (
    <>
      <TopNavBar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] lg:h-[100vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/products/story.png" 
              alt="Brand Hero" 
              fill 
              className="object-cover grayscale brightness-75 scale-105"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 text-center text-white px-margin-mobile">
            <h1 className="font-headline-lg text-3xl md:text-5xl lg:text-8xl mb-4 md:mb-6 tracking-tighter uppercase">The Art of Essence</h1>
            <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.4em] opacity-80 uppercase">ESTABLISHED MCMLXXXIV</p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 md:col-start-3 text-center">
              <span className="font-label-caps text-[10px] text-on-surface-variant mb-6 md:mb-8 block tracking-widest uppercase">PHILOSOPHY</span>
              <h2 className="font-headline-lg text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-12 italic leading-tight">Objects that whisper, stories that endure.</h2>
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto text-sm md:text-base">
                AESTHETE was founded on the singular principle that true luxury is not found in the volume of a brand&apos;s voice, but in the precision of its silence. We curate collections that serve as a testament to the beauty of the essential, blending historical craftsmanship with a modernist vision of form and function.
              </p>
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-4/5 overflow-hidden group grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src="/images/products/coat.png" 
                  alt="Craftsmanship" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </div>
            <div className="md:col-span-5 py-8 md:py-0">
              <span className="font-label-caps text-[10px] text-on-surface-variant mb-3 md:mb-4 block tracking-widest uppercase">PROCESS</span>
              <h3 className="font-headline-md text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-tight">Slow Craft, Perpetual Quality.</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Every piece in our collection undergoes a six-month developmental cycle, ensuring that the silhouette is as timeless as the materials used. We collaborate with generational tanneries in Tuscany and weavers in Kyoto who preserve techniques nearly lost to time.
              </p>
              <Link href="/collections" className="font-button text-[11px] uppercase border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all tracking-widest">
                Explore Our Makers
              </Link>
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="bg-surface-container-low py-16 md:py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex flex-col gap-12 md:gap-24">
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-primary/10 pt-8 md:pt-12 group hover:bg-surface transition-colors duration-500 p-6 md:p-8">
                <span className="font-headline-md text-3xl md:text-4xl italic group-hover:text-secondary transition-colors">1984</span>
                <div className="max-w-md mt-4 md:mt-0">
                  <h4 className="font-label-caps text-[10px] mb-3 md:mb-4 tracking-widest uppercase">THE GENESIS</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">Founded in a small subterranean studio in Milan, AESTHETE began as a bespoke atelier for private collectors seeking anonymity in their luxury.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-primary/10 pt-8 md:pt-12 group hover:bg-surface transition-colors duration-500 p-6 md:p-8">
                <span className="font-headline-md text-3xl md:text-4xl italic group-hover:text-secondary transition-colors">2002</span>
                <div className="max-w-md mt-4 md:mt-0">
                  <h4 className="font-label-caps text-[10px] mb-3 md:mb-4 tracking-widest uppercase">GLOBAL EXPANSION</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">Opening our flagship &apos;Ghost&apos; boutiques in Paris and Tokyo, redefining retail through sensory experiences rather than traditional storefronts.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start border-t border-primary/10 pt-8 md:pt-12 group hover:bg-surface transition-colors duration-500 p-6 md:p-8">
                <span className="font-headline-md text-3xl md:text-4xl italic group-hover:text-secondary transition-colors">2024</span>
                <div className="max-w-md mt-4 md:mt-0">
                  <h4 className="font-label-caps text-[10px] mb-3 md:mb-4 tracking-widest uppercase">A NEW ERA</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">Launching the Digital Archive, a permanent home for our limited editions and a platform for circular sustainability in high-luxury.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Imagery */}
        <section className="w-full h-[300px] md:h-[500px] lg:h-[680px] relative">
          <Image 
            src="/images/products/craft.png" 
            alt="Brand Aesthetic" 
            fill 
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter text-center">
            <div className="p-10 md:p-16 border border-primary/5 hover:border-primary/10 transition-colors">
              <h5 className="font-label-caps text-[11px] mb-4 md:mb-6 tracking-widest uppercase">INTEGRITY</h5>
              <p className="font-body-md text-on-surface-variant italic leading-relaxed text-sm md:text-base">Honest materials, ethical origins, and transparent supply chains are the foundation of our house.</p>
            </div>
            <div className="p-10 md:p-16 border border-primary/5 hover:border-primary/10 transition-colors bg-surface-container-low">
              <h5 className="font-label-caps text-[11px] mb-4 md:mb-6 tracking-widest uppercase">RESTRICTION</h5>
              <p className="font-body-md text-on-surface-variant italic leading-relaxed text-sm md:text-base">We believe in making less, but making it better. Our collections are strictly limited to reduce waste.</p>
            </div>
            <div className="p-10 md:p-16 border border-primary/5 hover:border-primary/10 transition-colors">
              <h5 className="font-label-caps text-[11px] mb-4 md:mb-6 tracking-widest uppercase">SILENCE</h5>
              <p className="font-body-md text-on-surface-variant italic leading-relaxed text-sm md:text-base">The absence of noise allows for the appreciation of detail. We let our objects speak for themselves.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
