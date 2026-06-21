import Image from "next/image";
import Link from "next/link";

export default function Journal() {
  return (
    <section className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-label-caps text-secondary tracking-[0.3em] block mb-4 uppercase">Editorial</span>
            <h2 className="font-headline-lg text-headline-lg">THE JOURNAL</h2>
          </div>
          <Link href="/journal" className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-all">
            BROWSE ALL STORIES
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-8 relative">
              <Image 
                src="/images/journal/fabric.png"
                alt="Journal visual" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-4 block uppercase">In Conversation</span>
            <h3 className="font-headline-md text-2xl mb-6 group-hover:text-secondary transition-colors duration-300">The Architecture of Fabric: A Study in Drape and Form</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">Exploring how modernist architectural principles inform our latest seasonal silhouettes through the lens of structural integrity.</p>
            <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors">READ ARTICLE</span>
          </article>
          <article className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-8 relative">
              <Image 
                src="https://images.unsplash.com/photo-1609235985281-87f5e9c5c84d?w=800&h=800&fit=crop"
                alt="Journal visual" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-4 block uppercase">Curation</span>
            <h3 className="font-headline-md text-2xl mb-6 group-hover:text-secondary transition-colors duration-300">Quiet Luxury: The Art of Living with Less and Better</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">A manifesto on essentialism and the psychological shift towards enduring value in a world of fleeting trends.</p>
            <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors">READ ARTICLE</span>
          </article>
          <article className="group cursor-pointer">
            <div className="aspect-square overflow-hidden mb-8 relative">
              <Image 
                src="https://images.unsplash.com/photo-1505553356144-be1b76ae9770?w=800&h=800&fit=crop"
                alt="Journal visual" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant mb-4 block uppercase">Atelier</span>
            <h3 className="font-headline-md text-2xl mb-6 group-hover:text-secondary transition-colors duration-300">Provenance: Sourcing the World&apos;s Rarest Raw Materials</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">Journey through the high plateaus of Mongolia to the coastal farms of Italy in search of the ultimate tactile experience.</p>
            <span className="font-label-caps text-[10px] border-b border-primary pb-1 group-hover:border-secondary transition-colors">READ ARTICLE</span>
          </article>
        </div>
      </div>
    </section>
  );
}
