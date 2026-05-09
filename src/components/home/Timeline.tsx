export default function Timeline() {
  return (
    <section className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto">
      <div className="text-center mb-24">
        <span className="font-label-caps text-secondary tracking-[0.3em] block mb-4 uppercase">Timeline</span>
        <h2 className="font-headline-lg text-headline-lg">A LEGACY IN MOTION</h2>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 bottom-0 w-[1px] bg-outline-variant left-1/2 -translate-x-1/2 opacity-30"></div>
        <div className="relative w-full mb-32 flex justify-center group">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
          <div className="text-center">
            <span className="font-display-xl text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">1984</span>
            <h3 className="font-label-caps tracking-widest text-xs mb-6 uppercase">The Foundation</h3>
            <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700">Established in a small atelier in Le Marais, focusing on singular cashmere objects.</p>
          </div>
        </div>
        <div className="relative w-full mb-32 flex justify-center group">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
          <div className="text-center">
            <span className="font-display-xl text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">2002</span>
            <h3 className="font-label-caps tracking-widest text-xs mb-6 uppercase">Global Expansion</h3>
            <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700">Opening of our flagship stores in London and Tokyo, defining the new minimalist aesthetic.</p>
          </div>
        </div>
        <div className="relative w-full flex justify-center group">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-2 h-2 rounded-full bg-secondary"></div>
          <div className="text-center">
            <span className="font-display-xl text-4xl block mb-4 transition-colors group-hover:text-secondary duration-500">2024</span>
            <h3 className="font-label-caps tracking-widest text-xs mb-6 uppercase">The Digital Archive</h3>
            <p className="font-body-md text-on-surface-variant max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-700">Launching the curated journal and digital repository of our heritage silhouettes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
