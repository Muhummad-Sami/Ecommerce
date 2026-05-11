"use client";

import { useCartStore } from "@/store/useCartStore";
import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } =
    useCartStore();

  // ✅ SAFE FIX (prevents crash)
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <>
      <TopNavBar />

      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <header className="mb-16">
          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-2 tracking-[0.3em]">
            Your Selection
          </p>

          <h1 className="font-headline-lg text-5xl md:text-7xl tracking-tighter uppercase">
            SHOPPING BAG
          </h1>
        </header>

        {/* EMPTY STATE */}
        {safeItems.length === 0 ? (
          <div className="text-center py-40 border-y border-primary/5">
            <ShoppingBag
              size={48}
              className="mx-auto mb-8 text-outline opacity-20"
            />

            <p className="font-body-lg text-on-surface-variant mb-12">
              Your bag is currently empty.
            </p>

            <Link
              href="/collections"
              className="font-label-caps text-[11px] border-b border-primary pb-2 hover:border-secondary transition-all uppercase tracking-widest"
            >
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* LEFT SIDE */}
            <div className="lg:col-span-8 flex flex-col">

              <div className="border-b border-primary/10 pb-4 mb-8 hidden md:grid grid-cols-12 gap-4">
                <span className="col-span-6 font-label-caps text-[9px] uppercase tracking-widest text-outline">
                  Product
                </span>
                <span className="col-span-3 font-label-caps text-[9px] uppercase tracking-widest text-outline text-center">
                  Quantity
                </span>
                <span className="col-span-3 font-label-caps text-[9px] uppercase tracking-widest text-outline text-right">
                  Total
                </span>
              </div>

              <div className="space-y-12">
                {safeItems.map((item) => (
                  <div
                    key={String(item.product?._id)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-primary/5 pb-12"
                  >
                    {/* PRODUCT */}
                    <div className="md:col-span-6 flex gap-8">
                      <div className="w-24 h-32 relative bg-surface-container shrink-0 overflow-hidden">
                        <Image
                          src={item.product?.imageUrl || ""}
                          alt={item.product?.name || "product"}
                          fill
                          className="object-cover transition-transform duration-1000"
                        />
                      </div>

                      <div className="flex flex-col justify-center gap-2">
                        <p className="font-label-caps text-[9px] text-secondary uppercase tracking-widest">
                          {item.product?.category}
                        </p>

                        <h3 className="font-headline-md text-xl uppercase tracking-tight">
                          {item.product?.name}
                        </h3>

                        <p className="font-body-md text-on-surface-variant text-sm">
                          ${item.product?.price}
                        </p>

                        <button
                          onClick={() =>
                            removeItem(String(item.product?._id))
                          }
                          className="font-label-caps text-[9px] uppercase text-on-surface-variant hover:text-error transition-colors mt-2 flex items-center gap-2"
                        >
                          <Trash2 size={10} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="md:col-span-3 flex justify-center">
                      <div className="flex items-center gap-6 border border-primary/10 px-4 py-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              String(item.product?._id),
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="hover:text-secondary"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="font-label-caps text-[12px] w-4 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              String(item.product?._id),
                              item.quantity + 1
                            )
                          }
                          className="hover:text-secondary"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="md:col-span-3 text-right">
                      <p className="font-headline-md text-xl tracking-tight">
                        $
                        {(
                          (item.product?.price || 0) * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SUMMARY */}
            <div className="lg:col-span-4">
              <div className="bg-surface p-12 border border-primary/5 sticky top-32">
                <h2 className="font-headline-md text-2xl mb-10 tracking-widest uppercase">
                  Summary
                </h2>

                <div className="space-y-6 mb-10 border-b border-primary/5 pb-10">
                  <div className="flex justify-between font-body-md">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span>${totalPrice()}</span>
                  </div>

                  <div className="flex justify-between font-body-md">
                    <span className="text-on-surface-variant">
                      Shipping
                    </span>
                    <span className="text-secondary text-xs uppercase">
                      Complimentary
                    </span>
                  </div>
                </div>

                <div className="flex justify-between font-headline-md text-3xl mb-12">
                  <span>Total</span>
                  <span>${totalPrice()}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-primary text-on-primary py-6 font-button uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-4"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={16} />
                </Link>

                <p className="mt-8 text-[10px] text-center uppercase tracking-widest opacity-60">
                  Taxes calculated at checkout
                </p>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </>
  );
}