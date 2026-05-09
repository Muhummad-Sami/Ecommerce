"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProduct } from "@/lib/types";

export default function FeaturedCollections() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await fetch("/api/products?isFeatured=true");
        const json = await res.json();
        if (json.success) {
          setProducts(json.data.slice(0, 3)); // Display top 3
        }
      } catch (error) {
        console.error("Failed to fetch featured products", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  return (
    <section className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <h2 className="font-headline-lg text-headline-lg">CURATED EDITIONS</h2>
        <Link href="/collections" className="font-label-caps text-label-caps border-b border-primary/20 pb-1 hover:border-primary transition-all">
          VIEW ALL SERIES
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10 text-on-surface-variant font-body-md">Loading collections...</div>
      ) : products.length === 0 ? (
        <div className="text-center py-10 text-on-surface-variant font-body-md">No collections found. Run /api/seed to populate the database.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {products.map((product) => (
            <Link href={`/product/${product._id}`} key={String(product._id)} className="group cursor-pointer">
              <div className="aspect-3/4 overflow-hidden mb-6 relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="text-center">
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">{product.collectionName}</p>
                <h3 className="font-headline-md text-headline-md mb-2">{product.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </p>
                <div className="w-12 h-px bg-secondary-container mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
