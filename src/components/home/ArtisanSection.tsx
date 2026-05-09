import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function ArtisanSection() {
  return (
    <section className="reveal-on-scroll py-section-gap overflow-hidden bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[700px]">
          <div className="relative order-2 md:order-1 overflow-hidden group cursor-pointer">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_5WsRTF_njNkFe9y4aVJRb3NjJhUNytpDgDCTaBUvcdTbxETvmP_CRGm-yJNNr0MbTzweDv-iDmvHBTtOfTqsf7D4dr-l2J7FYYc0zZCcbIspP15FPgbLZ8t8z6QPd63d6LfnKHw6owWH3AqXzXX6JLEn8Or2_mS9kz1lqmmVhU5JUnKmMEDtlmvMUBHJH138pdDgaL6m8ELHJuArQNmEUySq4khOzIh8v2at0wnp_VevcEFTN0lhtsozIXLltPfUR5Fh1jdnzJJ8"
              alt="Artisan handiwork" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group/play flex items-center gap-4 text-white">
                <span className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-white group-hover/play:text-black transition-all duration-500">
                  <Play className="w-6 h-6 fill-current" />
                </span>
                <span className="font-label-caps tracking-widest text-xs uppercase opacity-0 group-hover/play:opacity-100 transition-opacity duration-500">Watch the Film</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-12 md:p-20 order-1 md:order-2 bg-surface">
            <div className="max-w-sm">
              <span className="font-label-caps text-secondary tracking-[0.3em] block mb-8 uppercase">01. Craftsmanship</span>
              <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">THE ARTISAN&apos;S ATELIER</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
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
  );
}
