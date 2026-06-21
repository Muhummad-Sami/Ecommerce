"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Heart, SlidersHorizontal, X, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { IProduct } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { isLoggedIn, savePendingCartItem } from "@/lib/auth";

const ALL_CATEGORIES = ["Bags", "Accessories", "Clothing", "Shoes"];
const ALL_COLLECTIONS = ["Essentials", "Evening", "Winter", "Summer", "Resort"];
const SORT_OPTIONS = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export default function CollectionsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCollections, setActiveCollections] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<string>("Featured");
  const [sortOpen, setSortOpen] = useState(false);

  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const handleInstantCheckout = (product: IProduct) => {
    if (!isLoggedIn()) {
      savePendingCartItem({ product, quantity: 1, goToCheckout: true });
      router.push(`/login?redirect=${encodeURIComponent("/checkout")}`);
      return;
    }
    addItem(product, 1);
    router.push("/checkout");
  };

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      });
  }, []);

  // Filter products
  const filteredProducts = products.filter((p) => {
    const categoryMatch = !activeCategory || p.category === activeCategory;
    const collectionMatch = activeCollections.size === 0 || activeCollections.has(p.collectionName);
    return categoryMatch && collectionMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Featured":
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      default:
        return 0;
    }
  });

  const toggleCollection = (col: string) => {
    setActiveCollections((prev) => {
      const next = new Set(prev);
      if (next.has(col)) {
        next.delete(col);
      } else {
        next.add(col);
      }
      return next;
    });
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveCollections(new Set());
    setSortBy("Featured");
  };

  const hasActiveFilters = activeCategory || activeCollections.size > 0;

  return (
    <>
      <TopNavBar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-screen">
        {/* Hero Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <p className="font-label-caps text-[10px] text-secondary uppercase mb-3 md:mb-4 tracking-[0.3em]">Seasonal Curation</p>
          <h1 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl lg:text-7xl">The Complete Collection</h1>
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
            {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-secondary ml-1"></span>}
          </button>

          {/* Sidebar Filter */}
          <aside className={`w-full md:w-64 shrink-0 space-y-10 md:space-y-12 ${filterOpen ? "block" : "hidden md:block"}`}>
            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 font-label-caps text-[10px] uppercase tracking-widest text-secondary hover:text-primary transition-colors"
              >
                <X size={12} />
                <span>Clear all filters</span>
              </button>
            )}

            {/* Category filter */}
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-5 md:mb-6 uppercase tracking-widest">Category</h3>
              <ul className="space-y-3 md:space-y-4">
                <li
                  onClick={() => setActiveCategory(null)}
                  className={`flex items-center justify-between group cursor-pointer ${!activeCategory ? 'text-primary' : ''}`}
                >
                  <span className={`font-body-md group-hover:text-primary transition-colors text-sm md:text-base ${!activeCategory ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>All Categories</span>
                  <span className="text-[10px] font-label-caps text-outline">{products.length}</span>
                </li>
                {ALL_CATEGORIES.map(cat => {
                  const count = products.filter(p => p.category === cat).length;
                  const isActive = activeCategory === cat;
                  return (
                    <li
                      key={cat}
                      onClick={() => setActiveCategory(isActive ? null : cat)}
                      className={`flex items-center justify-between group cursor-pointer ${isActive ? 'text-primary' : ''}`}
                    >
                      <span className={`font-body-md group-hover:text-primary transition-colors text-sm md:text-base ${isActive ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>{cat}</span>
                      <span className="text-[10px] font-label-caps text-outline">{count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Collection filter */}
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-5 md:mb-6 uppercase tracking-widest">Collection</h3>
              <ul className="space-y-3 md:space-y-4">
                {ALL_COLLECTIONS.map(col => {
                  const count = products.filter(p => p.collectionName === col).length;
                  const isActive = activeCollections.has(col);
                  return (
                    <li
                      key={col}
                      onClick={() => toggleCollection(col)}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className={`w-4 h-4 border flex items-center justify-center transition-all ${isActive ? 'border-primary bg-primary' : 'border-outline group-hover:border-primary'}`}>
                        {isActive && <Check size={10} className="text-white" />}
                      </div>
                      <span className={`font-body-md group-hover:text-primary text-sm md:text-base transition-colors ${isActive ? 'text-primary font-medium' : 'text-on-surface-variant'}`}>{col}</span>
                      <span className="text-[10px] font-label-caps text-outline ml-auto">{count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Range Display */}
            <div>
              <h3 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 mb-5 md:mb-6 uppercase tracking-widest">Price Range</h3>
              <p className="font-body-md text-on-surface-variant text-sm">
                ${Math.min(...(sortedProducts.length ? sortedProducts.map(p => p.price) : [0])).toLocaleString()} — ${Math.max(...(sortedProducts.length ? sortedProducts.map(p => p.price) : [0])).toLocaleString()}
              </p>
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
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                Showing {sortedProducts.length} of {products.length} Results
              </span>
              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <span className="font-label-caps text-[10px] group-hover:text-primary transition-colors uppercase tracking-widest">Sort by: {sortBy}</span>
                </button>
                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 bg-white border border-outline-variant/20 shadow-xl z-40 py-2 min-w-[200px]">
                      {SORT_OPTIONS.map((option) => (
                        <button
                          key={option}
                          onClick={() => { setSortBy(option); setSortOpen(false); }}
                          className={`block w-full text-left px-4 py-2.5 font-label-caps text-[10px] uppercase tracking-widest hover:bg-surface-container transition-colors ${sortBy === option ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}
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
              ) : sortedProducts.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <p className="font-headline-md text-xl md:text-2xl mb-4 text-on-surface-variant">No products found</p>
                  <p className="font-body-md text-on-surface-variant mb-8 text-sm">Try adjusting your filters to find what you&apos;re looking for.</p>
                  <button
                    onClick={clearFilters}
                    className="font-label-caps text-label-caps border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all"
                  >
                    CLEAR ALL FILTERS
                  </button>
                </div>
              ) : (
                sortedProducts.map((product) => (
                  <div onClick={() => handleInstantCheckout(product)} key={product._id} className="product-card group cursor-pointer block">
                    <div className="aspect-3/4 overflow-hidden bg-surface-container mb-3 md:mb-6 relative">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name} 
                        fill 
                        className="product-image object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105" 
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="bg-primary text-on-primary px-6 py-3 font-label-caps text-[10px] tracking-widest uppercase shadow-xl hover:scale-105 transition-transform">FAST CHECKOUT</span>
                      </div>
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={(e) => e.stopPropagation()} className="w-8 h-8 md:w-10 md:h-10 bg-white/90 flex items-center justify-center rounded-full hover:bg-white transition-colors shadow-sm">
                          <Heart size={16} className="text-primary" />
                        </button>
                      </div>
                      {product.isFeatured && (
                        <span className="absolute top-3 md:top-4 left-3 md:left-4 font-label-caps text-[8px] md:text-[9px] bg-black text-white px-2.5 py-1 uppercase tracking-widest">
                          Featured
                        </span>
                      )}
                      {product.stock <= 5 && product.stock > 0 && (
                        <span className="absolute bottom-3 md:bottom-4 left-3 md:left-4 font-label-caps text-[8px] md:text-[9px] bg-white/90 text-primary px-2.5 py-1 uppercase tracking-widest">
                          Only {product.stock} left
                        </span>
                      )}
                    </div>
                    <div className="text-center space-y-1 md:space-y-2">
                      <p className="font-label-caps text-[9px] md:text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">{product.collectionName} · {product.category}</p>
                      <h2 className="font-headline-md text-sm md:text-xl leading-tight group-hover:text-secondary transition-colors">{product.name}</h2>
                      <p className="font-body-md text-on-surface font-semibold text-sm md:text-base">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Results summary */}
            {!loading && sortedProducts.length > 0 && (
              <div className="mt-16 md:mt-24 border-t border-outline-variant/20 pt-8 md:pt-12 text-center">
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Showing all {sortedProducts.length} products
                  {hasActiveFilters && <span> · <button onClick={clearFilters} className="text-secondary hover:text-primary transition-colors">Clear filters</button></span>}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
