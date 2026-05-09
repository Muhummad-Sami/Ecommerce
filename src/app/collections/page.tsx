"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, Search, ShoppingBag, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { IProduct } from "@/lib/types";

export default function CollectionsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

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
      <main className="pt-32 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-screen">
        {/* Hero Header */}
        <div className="mb-20 text-center md:text-left">
          <p className="font-label-caps text-[10px] text-secondary uppercase mb-4 tracking-[0.3em]">Seasonal Curation</p>
          <h1 className="font-headline-lg text-5xl md:text-7xl">The Summer Collection</h1>
          <p className="mt-6 font-body-lg text-body-lg max-w-2xl text-on-surface-variant">An investigation into form, texture, and the luxury of silence. Discover essentials crafted from the finest natural fibers.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-gutter">
          {/* Sidebar Filter */}
          <aside className="w-full md:w-64 shrink-0 space-y-12">
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-6 uppercase tracking-widest">Category</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">All Apparel</span>
                  <span className="text-[10px] font-label-caps text-outline">240</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="font-body-md text-primary font-medium">Outerwear</span>
                  <span className="text-[10px] font-label-caps text-outline">42</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">Knitwear</span>
                  <span className="text-[10px] font-label-caps text-outline">86</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">Accessories</span>
                  <span className="text-[10px] font-label-caps text-outline">112</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-6 uppercase tracking-widest">Material</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                  <span className="font-body-md text-on-surface-variant group-hover:text-primary">Organic Silk</span>
                </li>
                <li className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                  <span className="font-body-md text-on-surface-variant group-hover:text-primary">Merino Wool</span>
                </li>
                <li className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-primary bg-primary"></div>
                  <span className="font-body-md text-primary font-medium">Italian Linen</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="grow">
            <div className="flex justify-between items-center mb-10">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">Showing {products.length} Results</span>
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="font-label-caps text-[10px] group-hover:text-primary transition-colors uppercase tracking-widest">Sort by: Featured</span>
                {/* <ChevronDown size={16} /> */}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-20">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-3/4 bg-surface-container mb-6"></div>
                    <div className="h-4 bg-surface-container w-1/2 mx-auto mb-2"></div>
                    <div className="h-6 bg-surface-container w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-surface-container w-1/4 mx-auto"></div>
                  </div>
                ))
              ) : (
                products.map((product) => (
                  <Link href={`/product/${product._id}`} key={product._id} className="product-card group cursor-pointer">
                    <div className="aspect-3/4 overflow-hidden bg-surface-container mb-6 relative">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        fill 
                        className="product-image object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 bg-white/90 flex items-center justify-center rounded-full hover:bg-white transition-colors shadow-sm">
                          <Heart size={20} className="text-primary" />
                        </button>
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">{product.category}</p>
                      <h2 className="font-headline-md text-xl leading-tight group-hover:text-secondary transition-colors">{product.name}</h2>
                      <p className="font-body-md text-on-surface font-semibold">${product.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex justify-center items-center gap-8 border-t border-outline-variant/20 pt-12">
              <button className="text-outline hover:text-primary transition-colors">
                <ArrowLeft size={20} />
              </button>
              <div className="flex gap-4">
                <span className="font-label-caps text-[11px] border-b border-primary pb-1 cursor-pointer">01</span>
                <span className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors cursor-pointer">02</span>
                <span className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors cursor-pointer">03</span>
              </div>
              <button className="text-outline hover:text-primary transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
