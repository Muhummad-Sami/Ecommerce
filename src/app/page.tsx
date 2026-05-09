"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Play } from "lucide-react";

export default function Home() {
  const revealRefs = useRef<(HTMLDivElement | HTMLElement)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <TopNavBar />
      <main className="overflow-x-hidden">
        {/* Cinematic Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop" 
              alt="Cinematic high fashion" 
              fill 
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="font-headline-lg text-display-xl-mobile md:text-display-xl text-white mb-10 tracking-tighter uppercase">THE ART OF REFINEMENT</h1>
            <div className="flex justify-center">
              <Link href="/collections" className="bg-primary text-on-primary px-10 py-5 font-button text-button uppercase tracking-widest hover:bg-black transition-all duration-300">
                Shop Collection
              </Link>
            </div>
          </div>
        </section>

        {/* 1. The Artisan's Atelier */}
        <section ref={addToRefs} className="reveal-on-scroll py-section-gap overflow-hidden bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[700px]">
              <div className="relative order-2 md:order-1 overflow-hidden group cursor-pointer h-[500px] md:h-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1000&fit=crop" 
                  alt="Artisan handiwork" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group/play flex items-center gap-4 text-white">
                    <span className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-white group-hover/play:text-black transition-all duration-500">
                      <Play size={20} fill="currentColor" />
                    </span>
                    <span className="font-label-caps tracking-widest text-[10px] uppercase opacity-0 group-hover/play:opacity-100 transition-opacity duration-500">Watch the Film</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-12 md:p-20 order-1 md:order-2 bg-surface">
                <div className="max-w-sm">
                  <span className="font-label-caps text-secondary tracking-[0.3em] block mb-8 uppercase text-[10px]">01. Craftsmanship</span>
                  <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">THE ARTISAN'S ATELIER</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                    Every stitch is a signature. Our master craftsmen spend hundreds of hours refining each piece, ensuring that the soul of the artisan is embedded within the grain.
                  </p>
                  <Link href="/story" className="inline-block font-label-caps text-label-caps border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
                    DISCOVER THE PROCESS
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <span className="vertical-text font-label-caps text-[10px] tracking-[0.5em] text-outline uppercase opacity-40">MAISON D'ARTISAN • PARIS • EST. 1984</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections Grid */}
        <section ref={addToRefs} className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <h2 className="font-headline-lg text-headline-lg">CURATED EDITIONS</h2>
            <Link href="/collections" className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-all">
              VIEW ALL SERIES
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-3/4 overflow-hidden mb-6 relative">
                <Image 
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" 
                    alt="Collection item" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
              </div>
              <div className="text-center">
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 tracking-widest uppercase">SEASONAL SERIES</p>
                <h3 className="font-headline-md text-2xl mb-2">The Monochrome Suite</h3>
                <p className="font-body-md text-on-surface-variant">$2,400.00</p>
                <div className="w-12 h-px bg-secondary-container mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-3/4 overflow-hidden mb-6 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop" 
                  alt="Collection item" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="text-center">
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 tracking-widest uppercase">LIMITED RELEASE</p>
                <h3 className="font-headline-md text-2xl mb-2">Architectural Forms</h3>
                <p className="font-body-md text-on-surface-variant">$3,850.00</p>
                <div className="w-12 h-px bg-secondary-container mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-3/4 overflow-hidden mb-6 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop" 
                  alt="Collection item" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="text-center">
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 tracking-widest uppercase">ESSENTIALS</p>
                <h3 className="font-headline-md text-2xl mb-2">Pure Essentialism</h3>
                <p className="font-body-md text-on-surface-variant">$1,100.00</p>
                <div className="w-12 h-px bg-secondary-container mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive Lookbook */}
        <section ref={addToRefs} className="reveal-on-scroll bg-black text-white overflow-hidden py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop mb-12">
            <h2 className="font-headline-lg border-l border-white/20 pl-8 uppercase">VISUAL DIARY</h2>
          </div>
          <div className="flex overflow-x-auto gap-8 px-margin-mobile md:px-margin-desktop hide-scrollbar pb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-2/3 relative group shrink-0">
                <Image 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1490481651871-ab68de25d43d' : i === 2 ? '1445205170230-053b83016050' : i === 3 ? '1469334031218-e382a71b716b' : '1496747611176-843222e1e57c'}?w=800&h=1200&fit=crop`} 
                  alt="Lookbook entry" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-1/2 left-1/2 group cursor-pointer -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-6 -left-1/2 bg-white text-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-black/5 shadow-xl">
                    <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-1 uppercase">PRODUCT TAG</p>
                    <p className="font-body-md text-sm">$1,200.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Philosophy */}
        <section ref={addToRefs} className="reveal-on-scroll bg-surface-container-low py-section-gap overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-20">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-label-caps text-secondary tracking-[0.3em] block mb-8 uppercase text-[10px]">Our Philosophy</span>
                <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">THE SILENCE OF QUALITY</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg">
                  We believe that true luxury does not shout. It is a whisper of heritage, felt in the weight of a textile, the precision of a seam, and the timelessness of a silhouette. Aesthete is a sanctuary for those who value the intrinsic over the decorative.
                </p>
                <Link href="/story" className="inline-block font-label-caps text-label-caps border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
                  READ OUR MANIFESTO
                </Link>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative pl-0 lg:pl-20">
                  <Image 
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&h=700&fit=crop" 
                    alt="Editorial luxury" 
                    width={1000} 
                    height={700}
                    className="w-full h-[600px] object-cover filter brightness-90"
                  />
                  <div className="hidden md:block absolute -bottom-10 -left-10 bg-surface p-12 max-w-xs border border-primary/5 shadow-2xl">
                    <p className="font-headline-md italic text-primary">A garment is only as beautiful as the intention behind it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Heritage Timeline */}
        <section ref={addToRefs} className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-label-caps text-secondary tracking-[0.3em] block mb-4 uppercase text-[10px]">Timeline</span>
            <h2 className="font-headline-lg text-headline-lg">A LEGACY IN MOTION</h2>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 bottom-0 w-px bg-outline-variant left-1/2 -translate-x-1/2 opacity-30"></div>
            {/* Milestone 1 */}
            <div className="relative w-full mb-32 flex justify-center group">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
              <div className="text-center">
                <span className="font-headline-lg text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">1984</span>
                <h3 className="font-label-caps tracking-widest text-[10px] mb-6 uppercase">The Foundation</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700">Established in a small atelier in Le Marais, focusing on singular cashmere objects.</p>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="relative w-full mb-32 flex justify-center group">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
              <div className="text-center">
                <span className="font-headline-lg text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">2002</span>
                <h3 className="font-label-caps tracking-widest text-[10px] mb-6 uppercase">Global Expansion</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700">Opening of our flagship stores in London and Tokyo, defining the new minimalist aesthetic.</p>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="relative w-full flex justify-center group">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
              <div className="text-center">
                <span className="font-headline-lg text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">2024</span>
                <h3 className="font-label-caps tracking-widest text-[10px] mb-6 uppercase">The Digital Archive</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700">Launching the curated journal and digital repository of our heritage silhouettes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Curated Journal */}
        <section ref={addToRefs} className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="font-label-caps text-secondary tracking-[0.3em] block mb-4 uppercase text-[10px]">Editorial</span>
                <h2 className="font-headline-lg text-headline-lg">THE JOURNAL</h2>
              </div>
              <Link href="/collections" className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-all">
                BROWSE ALL STORIES
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <article className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-8 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop" 
                    alt="Journal visual" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-4 block uppercase">In Conversation</span>
                <h3 className="font-headline-md text-2xl mb-6 group-hover:text-secondary transition-colors duration-300">The Architecture of Fabric</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">Exploring how modernist architectural principles inform our latest seasonal silhouettes.</p>
                <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors uppercase">READ ARTICLE</span>
              </article>
              <article className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-8 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop" 
                    alt="Journal visual" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-4 block uppercase">Curation</span>
                <h3 className="font-headline-md text-2xl mb-6 group-hover:text-secondary transition-colors duration-300">Quiet Luxury Manifesto</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">A manifesto on essentialism and the psychological shift towards enduring value.</p>
                <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors uppercase">READ ARTICLE</span>
              </article>
              <article className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-8 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=600&fit=crop" 
                    alt="Journal visual" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-4 block uppercase">Atelier</span>
                <h3 className="font-headline-md text-2xl mb-6 group-hover:text-secondary transition-colors duration-300">Provenance of Raw Materials</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">Journey through the high plateaus of Mongolia in search of the ultimate tactile experience.</p>
                <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors uppercase">READ ARTICLE</span>
              </article>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section ref={addToRefs} className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-md text-4xl mb-6 uppercase tracking-tighter">Enter the World of AESTHETE</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-md mx-auto">Sign up for private releases and exclusive cultural insights.</p>
          <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-8 items-end justify-center">
            <div className="w-full relative group">
              <label className="block font-label-caps text-[10px] text-left mb-2 uppercase opacity-50">Email Address</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-secondary transition-colors font-body-md" placeholder="YOUR@EMAIL.COM" type="email" required />
            </div>
            <button className="bg-primary text-on-primary px-10 py-4 font-button text-button uppercase tracking-widest hover:bg-black transition-all shrink-0" type="submit">JOIN</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}