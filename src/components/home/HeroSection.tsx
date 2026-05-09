import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtHZgXv1FmN5pPcNCGYgJW_qaE3h3z7XgivYn8omQoyIeg4m0LcrVnw31VTEubxmtJ417dQjrsHfNkHMCbFtKoR1tBhzwg6fn6oC2uI4Ft1bHokuQ88Gpn8w-jN9tuLcg1IUEevXnXZvM7ENpEz_u68d0NEk8y8jGrRZiyJdltxoLTU5ppBomrekgi-ygUk9wKFXOr9PFt2B4-ISZ8LClnr9VUVnVVz2CbQ-hOTdvnv2tysleaO0Iil77hCVp25CqD6KKSqa3c-4eJ"
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
