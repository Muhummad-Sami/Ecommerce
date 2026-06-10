"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, SlidersHorizontal, X, ArrowLeft, ArrowRight } from "lucide-react";
import { IProduct } from "@/lib/types";

export default function CollectionsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <TopNavBar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-screen">
        {/* Hero Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <p className="font-label-caps text-[10px] text-secondary uppercase mb-3 md:mb-4 tracking-[0.3em]">Seasonal Curation</p>
          <h1 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl lg:text-7xl">The Summer Collection</h1>
          <p className="mt-4 md:mt-6 font-body-lg text-body-lg max-w-2xl text-on-surface-variant text-sm md:text-base mx-auto md:mx-0">An investigation into form, texture, and the luxury of silence. Discover essentials crafted from the finest natural fibers.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-gutter">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center justify-center gap-2 py-3 border border-primary/10 font-label-caps text-[10px] uppercase tracking-widest"
          >
            <SlidersHorizontal size={14} />
            <span>{filterOpen ? "Hide Filters" : "Show Filters"}</span>
          </button>

          {/* Sidebar Filter */}
          <aside className={`w-full md:w-64 shrink-0 space-y-10 md:space-y-12 ${filterOpen ? "block" : "hidden md:block"}`}>
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-5 md:mb-6 uppercase tracking-widest">Category</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-base">All Apparel</span>
                  <span className="text-[10px] font-label-caps text-outline">{products.length}</span>
                </li>
                {["Bags", "Accessories", "Clothing"].map(cat => {
                  const count = products.filter(p => p.category === cat).length;
                  return (
                    <li key={cat} className="flex items-center justify-between group cursor-pointer">
                      <span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-base">{cat}</span>
                      <span className="text-[10px] font-label-caps text-outline">{count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-5 md:mb-6 uppercase tracking-widest">Collection</h3>
              <ul className="space-y-3 md:space-y-4">
                {["Essentials", "Evening", "Winter"].map(col => {
                  const count = products.filter(p => p.collectionName === col).length;
                  return (
                    <li key={col} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                      <span className="font-body-md text-on-surface-variant group-hover:text-primary text-sm md:text-base">{col}</span>
                      <span className="text-[10px] font-label-caps text-outline ml-auto">{count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile: close filter */}
            {filterOpen && (
              <button
                onClick={() => setFilterOpen(false)}
                className="md:hidden w-full py-3 border border-primary/10 font-label-caps text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <X size={14} />
                <span>Close Filters</span>
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="grow">
            <div className="flex justify-between items-center mb-8 md:mb-10">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">Showing {products.length} Results</span>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="font-label-caps text-[10px] group-hover:text-primary transition-colors uppercase tracking-widest">Sort by: Featured</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-gutter md:gap-y-20">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-3/4 bg-surface-container mb-4 md:mb-6"></div>
                    <div className="h-3 md:h-4 bg-surface-container w-1/2 mx-auto mb-2"></div>
                    <div className="h-4 md:h-6 bg-surface-container w-3/4 mx-auto mb-2"></div>
                    <div className="h-3 md:h-4 bg-surface-container w-1/4 mx-auto"></div>
                  </div>
                ))
              ) : (
                products.map((product) => (
                  <Link href={`/product/${product._id}`} key={product._id} className="product-card group cursor-pointer block">
                    <div className="aspect-3/4 overflow-hidden bg-surface-container mb-3 md:mb-6 relative">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        fill 
                        className="product-image object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 flex items-center justify-center rounded-full hover:bg-white transition-colors shadow-sm">
                          <Heart size={16} className="text-primary" />
                        </button>
                      </div>
                    </div>
                    <div className="text-center space-y-1 md:space-y-2">
                      <p className="font-label-caps text-[9px] md:text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">{product.category}</p>
                      <h2 className="font-headline-md text-sm md:text-xl leading-tight group-hover:text-secondary transition-colors">{product.name}</h2>
                      <p className="font-body-md text-on-surface font-semibold text-sm md:text-base">${product.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="mt-16 md:mt-24 flex justify-center items-center gap-6 md:gap-8 border-t border-outline-variant/20 pt-8 md:pt-12">
              <button className="text-outline hover:text-primary transition-colors">
                <ArrowLeft size={18} />
              </button>
              <div className="flex gap-3 md:gap-4">
                <span className="font-label-caps text-[11px] border-b border-primary pb-1 cursor-pointer">01</span>
                <span className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors cursor-pointer">02</span>
                <span className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors cursor-pointer">03</span>
              </div>
              <button className="text-outline hover:text-primary transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
