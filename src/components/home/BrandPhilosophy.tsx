import Image from "next/image";
import Link from "next/link";

export default function BrandPhilosophy() {
  return (
    <section className="reveal-on-scroll bg-surface-container-low py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-20">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="font-label-caps text-secondary tracking-[0.3em] block mb-8 uppercase">Our Philosophy</span>
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
              <div className="w-full h-[600px] relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrYcDNvXH_Nc2zhD7znct9PTprMvXKP1uboC0yBjLaOFGpndyN9tPLyzvHxLUOWfPI3iO5era5_qDDdcMZtuU6hQHXpPdZmGFHP2WLHO-Yz1WCosfrX3rTIWQSlB6t4hgT5RHDtg19TTymvvkVrtTSOpkJEAk5nOfi7X_b-QxHhACZG1FwstVHNJp--a91RNjtOp5KS53mqSh5Ubow0fCVeIUcJTDwPNxj8ipN9rDibolqzC_nVO2TzVG-0Sa1NWRofA6sABsfeZ7s"
                  alt="Editorial luxury" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover filter brightness-90"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -left-10 bg-surface p-12 max-w-xs border border-primary/5 shadow-2xl">
                <p className="font-headline-md italic text-primary">&quot;A garment is only as beautiful as the intention behind it.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
