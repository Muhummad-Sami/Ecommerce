"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

// These match the product IDs in /api/products/data.ts
const FEATURED_PRODUCTS = [
  {
    id: "1",
    tag: "ESSENTIALS",
    name: "Classic Leather Tote",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop",
  },
  {
    id: "2",
    tag: "EVENING COLLECTION",
    name: "Silk Evening Scarf",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=800&fit=crop",
  },
  {
    id: "4",
    tag: "WINTER SERIES",
    name: "Cashmere Turtleneck",
    price: "$350.00",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=800&fit=crop",
  },
];

export default function Home() {
  const revealRefs = useRef<(HTMLDivElement | HTMLElement)[]>([]);
  const [videoOpen, setVideoOpen] = useState(false);

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
      <main>
        {/* Cinematic Hero Section */}
        <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop" 
              alt="Cinematic high fashion" 
              fill 
              className="object-cover scale-105"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="font-headline-lg text-display-xl-mobile md:text-display-xl text-white mb-8 md:mb-10 tracking-tighter uppercase">THE ART OF REFINEMENT</h1>
            <div className="flex justify-center">
              <Link href="/collections" className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-button text-button uppercase tracking-widest hover:bg-black transition-all duration-300 text-[12px] md:text-[14px]">
                Shop Collection
              </Link>
            </div>
          </div>
        </section>

        {/* 1. The Artisan's Atelier — with working video */}
        <section ref={addToRefs} className="reveal-on-scroll py-16 md:py-section-gap overflow-hidden bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[400px] md:min-h-[700px]">
              <div className="relative order-2 md:order-1 overflow-hidden group cursor-pointer h-[350px] md:h-auto" onClick={() => setVideoOpen(true)}>
                <Image 
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1000&fit=crop" 
                  alt="Artisan handiwork" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group/play flex items-center gap-4 text-white">
                    <span className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/40 flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-white group-hover/play:text-black transition-all duration-500">
                      <Play size={20} fill="currentColor" />
                    </span>
                    <span className="font-label-caps tracking-widest text-[10px] uppercase opacity-0 group-hover/play:opacity-100 transition-opacity duration-500 hidden sm:inline">Watch the Film</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-8 md:p-12 lg:p-20 order-1 md:order-2 bg-surface">
                <div className="max-w-sm">
                  <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6 md:mb-8 uppercase text-[10px]">01. Craftsmanship</span>
                  <h2 className="font-headline-lg text-headline-lg mb-6 md:mb-8 leading-tight text-2xl md:text-headline-lg">THE ARTISAN&apos;S ATELIER</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-12 text-[15px] md:text-body-lg">
                    Every stitch is a signature. Our master craftsmen spend hundreds of hours refining each piece, ensuring that the soul of the artisan is embedded within the grain.
                  </p>
                  <Link href="/story" className="inline-block font-label-caps text-label-caps border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
                    DISCOVER THE PROCESS
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <span className="vertical-text font-label-caps text-[10px] tracking-[0.5em] text-outline uppercase opacity-40">MAISON D&apos;ARTISAN • PARIS • EST. 1984</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections Grid — linked to real products */}
        <section ref={addToRefs} className="reveal-on-scroll py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 md:mb-16 gap-4">
            <h2 className="font-headline-lg text-headline-lg text-2xl md:text-headline-lg">CURATED EDITIONS</h2>
            <Link href="/collections" className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-all">
              VIEW ALL SERIES
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-gutter">
            {FEATURED_PRODUCTS.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                <div className="aspect-3/4 overflow-hidden mb-4 md:mb-6 relative">
                  <Image 
                    src={product.image}
                    alt={product.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 tracking-widest uppercase">{product.tag}</p>
                  <h3 className="font-headline-md text-xl md:text-2xl mb-2">{product.name}</h3>
                  <p className="font-body-md text-on-surface-variant">{product.price}</p>
                  <div className="w-12 h-px bg-secondary-container mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. Interactive Lookbook */}
        <section ref={addToRefs} className="reveal-on-scroll bg-black text-white overflow-hidden py-16 md:py-section-gap">
          <div className="px-margin-mobile md:px-margin-desktop mb-8 md:mb-12">
            <h2 className="font-headline-lg border-l border-white/20 pl-6 md:pl-8 uppercase text-2xl md:text-headline-lg">VISUAL DIARY</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 md:gap-8 px-margin-mobile md:px-margin-desktop hide-scrollbar pb-10">
            {[1, 2, 3, 4].map((i) => (
              <Link href="/collections" key={i} className="min-w-[75vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-2/3 relative group shrink-0 block">
                <Image 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1490481651871-ab68de25d43d' : i === 2 ? '1445205170230-053b83016050' : i === 3 ? '1469334031218-e382a71b716b' : '1496747611176-843222e1e57c'}?w=800&h=1200&fit=crop`} 
                  alt="Lookbook entry" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 640px) 75vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 30vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-end p-6">
                  <span className="font-label-caps text-[10px] text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore Look {i}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Brand Philosophy */}
        <section ref={addToRefs} className="reveal-on-scroll bg-surface-container-low py-16 md:py-section-gap overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-20">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="font-label-caps text-secondary tracking-[0.3em] block mb-6 md:mb-8 uppercase text-[10px]">Our Philosophy</span>
                <h2 className="font-headline-lg text-headline-lg mb-6 md:mb-8 leading-tight text-2xl md:text-headline-lg">THE SILENCE OF QUALITY</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-12 max-w-lg text-[15px] md:text-body-lg">
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
                    className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover filter brightness-90"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="hidden md:block absolute -bottom-10 -left-10 bg-surface p-8 md:p-12 max-w-xs border border-primary/5 shadow-2xl">
                    <p className="font-headline-md italic text-primary text-lg md:text-headline-md">A garment is only as beautiful as the intention behind it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Heritage Timeline */}
        <section ref={addToRefs} className="reveal-on-scroll py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-label-caps text-secondary tracking-[0.3em] block mb-4 uppercase text-[10px]">Timeline</span>
            <h2 className="font-headline-lg text-headline-lg text-2xl md:text-headline-lg">A LEGACY IN MOTION</h2>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="absolute top-0 bottom-0 w-px bg-outline-variant left-1/2 -translate-x-1/2 opacity-30"></div>
            {/* Milestone 1 */}
            <div className="relative w-full mb-20 md:mb-32 flex justify-center group">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
              <div className="text-center">
                <span className="font-headline-lg text-3xl md:text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">1984</span>
                <h3 className="font-label-caps tracking-widest text-[10px] mb-4 md:mb-6 uppercase">The Foundation</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700 text-sm md:text-base">Established in a small atelier in Le Marais, focusing on singular cashmere objects.</p>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="relative w-full mb-20 md:mb-32 flex justify-center group">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
              <div className="text-center">
                <span className="font-headline-lg text-3xl md:text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">2002</span>
                <h3 className="font-label-caps tracking-widest text-[10px] mb-4 md:mb-6 uppercase">Global Expansion</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700 text-sm md:text-base">Opening of our flagship stores in London and Tokyo, defining the new minimalist aesthetic.</p>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="relative w-full flex justify-center group">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
              <div className="text-center">
                <span className="font-headline-lg text-3xl md:text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">2024</span>
                <h3 className="font-label-caps tracking-widest text-[10px] mb-4 md:mb-6 uppercase">The Digital Archive</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700 text-sm md:text-base">Launching the curated journal and digital repository of our heritage silhouettes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Curated Journal */}
        <section ref={addToRefs} className="reveal-on-scroll py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
              <div>
                <span className="font-label-caps text-secondary tracking-[0.3em] block mb-4 uppercase text-[10px]">Editorial</span>
                <h2 className="font-headline-lg text-headline-lg text-2xl md:text-headline-lg">THE JOURNAL</h2>
              </div>
              <Link href="/story" className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-all">
                BROWSE ALL STORIES
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <Link href="/story" className="group cursor-pointer block">
                <div className="aspect-square overflow-hidden mb-6 md:mb-8 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop" 
                    alt="Journal visual" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3 md:mb-4 block uppercase">In Conversation</span>
                <h3 className="font-headline-md text-xl md:text-2xl mb-4 md:mb-6 group-hover:text-secondary transition-colors duration-300">The Architecture of Fabric</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-3 mb-4 md:mb-6 text-sm md:text-base">Exploring how modernist architectural principles inform our latest seasonal silhouettes.</p>
                <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors uppercase">READ ARTICLE</span>
              </Link>
              <Link href="/story" className="group cursor-pointer block">
                <div className="aspect-square overflow-hidden mb-6 md:mb-8 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop" 
                    alt="Journal visual" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3 md:mb-4 block uppercase">Curation</span>
                <h3 className="font-headline-md text-xl md:text-2xl mb-4 md:mb-6 group-hover:text-secondary transition-colors duration-300">Quiet Luxury Manifesto</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-3 mb-4 md:mb-6 text-sm md:text-base">A manifesto on essentialism and the psychological shift towards enduring value.</p>
                <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors uppercase">READ ARTICLE</span>
              </Link>
              <Link href="/story" className="group cursor-pointer block">
                <div className="aspect-square overflow-hidden mb-6 md:mb-8 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=600&fit=crop" 
                    alt="Journal visual" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-3 md:mb-4 block uppercase">Atelier</span>
                <h3 className="font-headline-md text-xl md:text-2xl mb-4 md:mb-6 group-hover:text-secondary transition-colors duration-300">Provenance of Raw Materials</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-3 mb-4 md:mb-6 text-sm md:text-base">Journey through the high plateaus of Mongolia in search of the ultimate tactile experience.</p>
                <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors uppercase">READ ARTICLE</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section ref={addToRefs} className="reveal-on-scroll py-16 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-headline-md text-2xl md:text-4xl mb-4 md:mb-6 uppercase tracking-tighter">Enter the World of AESTHETE</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 md:mb-12 max-w-md mx-auto text-sm md:text-base">Sign up for private releases and exclusive cultural insights.</p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 md:gap-8 items-end justify-center">
            <div className="w-full relative group">
              <label className="block font-label-caps text-[10px] text-left mb-2 uppercase opacity-50">Email Address</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-secondary transition-colors font-body-md" placeholder="YOUR@EMAIL.COM" type="email" required />
            </div>
            <button className="bg-primary text-on-primary px-8 md:px-10 py-4 font-button text-button uppercase tracking-widest hover:bg-black transition-all shrink-0 w-full sm:w-auto" type="submit">JOIN</button>
          </form>
        </section>
      </main>
      <Footer />

      {/* Video Modal */}
      {videoOpen && (
        <div className="video-modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="relative w-[90vw] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors z-10"
              aria-label="Close video"
            >
              <X size={28} />
            </button>
            <video
              autoPlay
              controls
              playsInline
              className="w-full rounded-sm"
              src="https://videos.pexels.com/video-files/6567037/6567037-sd_640_360_30fps.mp4"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </>
  );
}