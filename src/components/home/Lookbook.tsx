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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC677zl1fZpF1XXUs4nMkZFxNJmwDVYNuK3uADwnpU7LvRYPgzlF4_47c4kwz2vqGf9o--nvP1ol83pqX3_khjN8WgKEj6HBQ7OZPYTR7L1cDnICXWoUeqjfZs9xcHfxVDgEzu9QzY5stLHK1U8-6lHcVWgoRxjAk_ObO5kcI-rRZUoZO853ZoCPDuTN2KR3k81HCGQt4hYAhtj6IcVRnsrVMBcC0PTItWBo0myxAOkWFUZ5LklQ5n0GNJK2hqSstq51kkKQG3ESjke"
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQHScQ3NV64gmHmVPYBU-cY7NZpdXpepyaQzu1rCIsVevpr8gigSXPAvcirB3-W2zmp7AvTksmKsF_pa_-a9pEZx9Yj0YUUjLngt5rLXX4JLeU0-aZ_Y5lnVNCM5e1XNwuSzpummpYX-k-KZXelsqRK2mhnUGNVnbl_iTjvg7sZkO1xe0PJJNa-KanKG5Goy6wHCpdWtxzXPnzHl2BBbIaaQxczrTpI-oLzIpQo0CsRKdSlOfQ_lu5eJmLEk7z7roaNH8vle6gZM_Z"
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK4OgEnU6i6TFCCGB0G4sq_Ae-d6m_-CrtiY8jxH5hHdYMlij3M4cS4QRh85Su1lf1lHLWnigsSjKYxo6FWan4-J_DRK_mWurptraDiqJA8euRr5Z6EaUiXRss3k60UJ49PDC7x4VaxkE7qnNOqFx46Pt2b82u5tYlwyaxVrrRcW3IsCEjZkKvyr_l99zRXy0czISxZ_PqerAkChekIVNoNhEr4il5QVmgpxX6k8OwEHp9fsv1DtbLzmcsFgTwabpPH1MrbkY-GLuG"
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1r-4otgG-JMNYjOvtYRA6PFUogoucauamKynGJHMRrG0z_tfoou2204D1-rGOBp4HxyHrUSJvw1wou5O6qUTAG0hfdVDWHWkTECxiGSyFWRe08GcCk0XE7tAIRk6xLvzFDAzh_6oXfXO-lMkF6WSV0FWnTJZdE1EkbyR8h24qWdRjTvqgpqBjk0UAYA3yswkru7-llLjLiym1CXKXq7NbVTGEGAP9Oo_eHo1Rq0sqedsV-YzWfzfytQIDtEX0tH8uUca8RSjHSEdj"
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
