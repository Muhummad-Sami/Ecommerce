"use client";

import { useCartStore } from "@/store/useCartStore";
import { isLoggedIn } from "@/lib/auth";
import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus, Lock } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // ✅ SAFE FIX (prevents crash)
  const safeItems = Array.isArray(items) ? items : [];
  const userLoggedIn = mounted ? isLoggedIn() : false;

  const handleCheckout = () => {
    if (!userLoggedIn) {
      router.push("/login?redirect=/checkout");
      return;
    }
    router.push("/checkout");
  };

  return (
    <>
      <TopNavBar />

      <main className="pt-24 md:pt-32 pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <header className="mb-10 md:mb-16">
          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-2 tracking-[0.3em]">
            Your Selection
          </p>
          <h1 className="font-headline-lg text-3xl md:text-5xl lg:text-7xl tracking-tighter uppercase">
            SHOPPING BAG
          </h1>
        </header>

        {/* EMPTY STATE */}
        {safeItems.length === 0 ? (
          <div className="text-center py-24 md:py-40 border-y border-primary/5">
            <ShoppingBag size={40} className="mx-auto mb-6 md:mb-8 text-outline opacity-20" />
            <p className="font-body-lg text-on-surface-variant mb-8 md:mb-12 text-sm md:text-base">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">

            {/* LEFT SIDE */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="border-b border-primary/10 pb-4 mb-6 md:mb-8 hidden md:grid grid-cols-12 gap-4">
                <span className="col-span-6 font-label-caps text-[9px] uppercase tracking-widest text-outline">Product</span>
                <span className="col-span-3 font-label-caps text-[9px] uppercase tracking-widest text-outline text-center">Quantity</span>
                <span className="col-span-3 font-label-caps text-[9px] uppercase tracking-widest text-outline text-right">Total</span>
              </div>

              <div className="space-y-8 md:space-y-12">
                {safeItems.map((item) => (
                  <div
                    key={String(item.product?._id)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center border-b border-primary/5 pb-8 md:pb-12"
                  >
                    {/* PRODUCT */}
                    <div className="md:col-span-6 flex gap-4 md:gap-8">
                      <div className="w-20 h-28 md:w-24 md:h-32 relative bg-surface-container shrink-0 overflow-hidden">
                        <Image
                          src={item.product?.imageUrl || ""}
                          alt={item.product?.name || "product"}
                          fill
                          className="object-cover transition-transform duration-1000"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-1 md:gap-2">
                        <p className="font-label-caps text-[9px] text-secondary uppercase tracking-widest">
                          {item.product?.category}
                        </p>
                        <h3 className="font-headline-md text-base md:text-xl uppercase tracking-tight">
                          {item.product?.name}
                        </h3>
                        <p className="font-body-md text-on-surface-variant text-sm">
                          ${item.product?.price}
                        </p>
                        <button
                          onClick={() => removeItem(String(item.product?._id))}
                          className="font-label-caps text-[9px] uppercase text-on-surface-variant hover:text-error transition-colors mt-1 md:mt-2 flex items-center gap-2"
                        >
                          <Trash2 size={10} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="md:col-span-3 flex md:justify-center">
                      <div className="flex items-center gap-6 border border-primary/10 px-4 py-2">
                        <button
                          onClick={() =>
                            updateQuantity(String(item.product?._id), Math.max(1, item.quantity - 1))
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
                            updateQuantity(String(item.product?._id), item.quantity + 1)
                          }
                          className="hover:text-secondary"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="md:col-span-3 md:text-right">
                      <p className="font-headline-md text-lg md:text-xl tracking-tight">
                        ${((item.product?.price || 0) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SUMMARY */}
            <div className="lg:col-span-4">
              <div className="bg-surface p-8 md:p-12 border border-primary/5 lg:sticky lg:top-24">
                <h2 className="font-headline-md text-xl md:text-2xl mb-8 md:mb-10 tracking-widest uppercase">
                  Summary
                </h2>

                <div className="space-y-4 md:space-y-6 mb-8 md:mb-10 border-b border-primary/5 pb-8 md:pb-10">
                  <div className="flex justify-between font-body-md text-sm md:text-base">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span>${totalPrice()}</span>
                  </div>
                  <div className="flex justify-between font-body-md text-sm md:text-base">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="text-secondary text-xs uppercase">Complimentary</span>
                  </div>
                </div>

                <div className="flex justify-between font-headline-md text-2xl md:text-3xl mb-8 md:mb-12">
                  <span>Total</span>
                  <span>${totalPrice()}</span>
                </div>

                {/* AUTH GUARD on checkout button */}
                {mounted && !userLoggedIn && (
                  <div className="bg-surface-container-low border border-primary/10 p-4 flex items-start gap-3 mb-6">
                    <Lock size={14} className="text-secondary mt-0.5 shrink-0" />
                    <p className="text-[12px] text-on-surface-variant leading-relaxed">
                      Please <Link href="/login?redirect=/checkout" className="text-primary font-medium underline">sign in</Link> to proceed with checkout.
                    </p>
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-on-primary py-5 md:py-6 font-button uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3 md:gap-4 text-[12px] md:text-[14px]"
                >
                  <span>{userLoggedIn ? "PROCEED TO CHECKOUT" : "SIGN IN TO CHECKOUT"}</span>
                  <ArrowRight size={16} />
                </button>

                <p className="mt-6 md:mt-8 text-[10px] text-center uppercase tracking-widest opacity-60">
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