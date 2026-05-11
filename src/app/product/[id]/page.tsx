"use client";

import { useState, useEffect, use } from "react";
import { useCartStore } from "@/store/useCartStore";
import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import {
  Plus,
  Minus,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

import { IProduct } from "@/lib/types";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center font-label-caps text-label-caps animate-pulse">
        Refining...
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center font-headline-md text-headline-md">
        Object Not Found
      </div>
    );

  return (
    <>
      <TopNavBar />

      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-20">

          {/* LEFT GALLERY */}
          <div className="md:col-span-7 flex flex-col gap-8">

            <div className="w-full aspect-4/5 bg-surface-container overflow-hidden relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-8">

              <div className="aspect-square bg-surface-container overflow-hidden relative">
                <Image
                  src={product.imageUrl}
                  alt="Detail 1"
                  fill
                  sizes="50vw"
                  className="object-cover brightness-95"
                />
              </div>

              <div className="aspect-square bg-surface-container overflow-hidden relative">
                <Image
                  src={product.imageUrl}
                  alt="Detail 2"
                  fill
                  sizes="50vw"
                  className="object-cover brightness-90"
                />
              </div>

            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="md:col-span-5 md:sticky md:top-32 h-fit flex flex-col gap-10">

            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant mb-4 tracking-[0.3em] uppercase">
                {product.category} Collection
              </p>

              <h1 className="font-headline-lg text-5xl md:text-6xl mb-6 tracking-tighter uppercase">
                {product.name}
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-baseline gap-4 border-b border-primary/5 pb-8">
              <span className="font-headline-md text-4xl">
                ${product.price.toLocaleString()}
              </span>

              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                Insurance & Tax Included
              </span>
            </div>

            {/* QUANTITY */}
            <div className="space-y-10">
              <div className="flex justify-between items-center">

                <span className="font-label-caps text-[10px] uppercase tracking-widest">
                  Select Quantity
                </span>

                <div className="flex items-center gap-6 border border-primary/10 px-4 py-2">

                  <button
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                    className="hover:text-secondary transition-colors"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="font-label-caps text-[12px] w-4 text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:text-secondary transition-colors"
                  >
                    <Plus size={14} />
                  </button>

                </div>
              </div>

              {/* ADD BUTTON */}
              <div className="flex flex-col gap-4">

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-primary text-on-primary py-6 font-button text-button uppercase tracking-[0.2em] hover:bg-black transition-all relative overflow-hidden group"
                >
                  <span className={added ? "opacity-0" : "opacity-100"}>
                    ADD TO BAG
                  </span>

                  {added && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 animate-in fade-in zoom-in duration-300">
                      <CheckCircle2 size={18} />
                      <span>SECURED IN BAG</span>
                    </div>
                  )}
                </button>

                <Link
                  href="/checkout"
                  className="w-full border border-primary py-6 font-button text-button uppercase tracking-[0.2em] hover:bg-surface-container transition-colors text-center"
                >
                  INSTANT CHECKOUT
                </Link>

              </div>
            </div>

            {/* ACCORDION (UNCHANGED) */}
            <div className="pt-10 border-t border-primary/10 space-y-2">
              {[
                "Provenance & Origin",
                "Technical Specifications",
                "The Sustainability Pact",
              ].map((item) => (
                <div
                  key={item}
                  className="py-6 border-b border-primary/10 flex justify-between items-center cursor-pointer group hover:bg-surface-container-low px-4 transition-all"
                >
                  <span className="font-label-caps text-[10px] uppercase tracking-widest">
                    {item}
                  </span>
                  <Plus size={14} className="group-hover:rotate-45 transition-transform" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* STORY SECTION (UNCHANGED) */}
        <section className="mt-section-gap py-section-gap border-y border-primary/5">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-12">
            <h2 className="font-headline-lg text-4xl md:text-5xl italic tracking-tight">
              "A testament to the beauty of restraint."
            </h2>

            <div className="w-px h-24 bg-primary/20 mx-auto"></div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every {product.name} is a reflection of our commitment to the essential.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}