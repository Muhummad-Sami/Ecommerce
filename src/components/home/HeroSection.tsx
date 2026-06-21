import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&h=900&fit=crop"
          alt="Cinematic high fashion" 
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile">
        <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-white mb-10 tracking-tighter">THE ART OF REFINEMENT</h1>
        <div className="flex justify-center">
          <Link href="/collections">
            <button className="bg-primary text-white px-10 py-5 font-button text-button uppercase tracking-widest hover:border-b-2 hover:border-secondary-container transition-all duration-300">
              Shop Collection
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
