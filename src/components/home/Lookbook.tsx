import Image from "next/image";

export default function Lookbook() {
  return (
    <section className="reveal-on-scroll bg-black text-white overflow-hidden py-section-gap">
      <div className="px-margin-mobile md:px-margin-desktop mb-12">
        <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg border-l border-white/20 pl-8">VISUAL DIARY</h2>
      </div>
      <div className="flex overflow-x-auto gap-8 px-margin-mobile md:px-margin-desktop hide-scrollbar pb-10">
        <div className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-2/3 relative group shrink-0">
          <Image 
            src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1200&fit=crop"
            alt="Lookbook entry" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-1/4 left-1/3 group cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-6 -left-1/2 bg-white text-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-black/5 shadow-xl">
              <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-1">CASHMERE COAT</p>
              <p className="font-body-md text-sm">$4,200.00</p>
            </div>
          </div>
        </div>
        <div className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-2/3 relative group shrink-0">
          <Image 
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1200&fit=crop"
            alt="Lookbook entry" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-6 -left-1/2 bg-white text-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-black/5 shadow-xl">
              <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-1">LEATHER TOTE</p>
              <p className="font-body-md text-sm">$1,850.00</p>
            </div>
          </div>
        </div>
        <div className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-2/3 relative group shrink-0">
          <Image 
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1200&fit=crop"
            alt="Lookbook entry" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute top-1/2 left-1/2 group cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-6 -left-1/2 bg-white text-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-black/5 shadow-xl">
              <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-1">ARCHIVE PANT</p>
              <p className="font-body-md text-sm">$950.00</p>
            </div>
          </div>
        </div>
        <div className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] aspect-2/3 relative group shrink-0">
          <Image 
            src="https://images.unsplash.com/photo-1595859707802-0b7b5d2ba26e?w=800&h=1200&fit=crop"
            alt="Lookbook entry" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
