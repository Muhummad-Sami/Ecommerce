"use client";

import { useCartStore } from "@/store/useCartStore";
import { isLoggedIn } from "@/lib/auth";
import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { saveOrder, generateOrderId } from "@/store/orderStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const router = useRouter();
  const [checkoutStatus, setCheckoutStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [step, setStep] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // ✅ AUTH GUARD — redirect to login if not signed in
  useEffect(() => {
    setMounted(true);
    if (!isLoggedIn()) {
      router.replace("/login?redirect=/checkout");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }
    
    setCheckoutStatus("loading");
    
    try {
      const payload = {
        ...formData,
        cartItems: items.map(item => `${item.product.name} (x${item.quantity}) - $${item.product.price}`).join(", "),
        totalAmount: `$${totalPrice().toLocaleString()}`,
        _subject: `Luxury Order from ${formData.customerName}`
      };

      const response = await fetch("https://formspree.io/f/xzdokbyn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Save order to localStorage for admin dashboard
        saveOrder({
          id: generateOrderId(),
          customerName: formData.customerName,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
          items: items.map(item => ({
            productName: item.product.name,
            productImage: item.product.imageUrl,
            quantity: item.quantity,
            price: item.product.price,
          })),
          totalAmount: totalPrice(),
          status: "Processing",
          createdAt: new Date().toISOString(),
        });

        setCheckoutStatus("success");
        clearCart();
      } else {
        setCheckoutStatus("error");
      }
    } catch (err) {
      setCheckoutStatus("error");
    }
  };

  // Don't render until mounted & auth checked
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse font-label-caps text-label-caps">Loading...</div>
      </div>
    );
  }

  // If not logged in, show nothing (redirect is happening)
  if (!isLoggedIn()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse font-label-caps text-label-caps">Redirecting to sign in...</div>
      </div>
    );
  }

  if (checkoutStatus === "success") {
    return (
      <>
        <TopNavBar />
        <main className="pt-32 md:pt-40 pb-20 px-margin-mobile md:px-4 min-h-screen flex flex-col items-center justify-center text-center bg-white">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/5 rounded-full flex items-center justify-center mb-8 md:mb-10 text-primary animate-pulse">
            <CheckCircle2 size={40} strokeWidth={1} />
          </div>
          <p className="font-label-caps text-[10px] tracking-[0.3em] text-secondary mb-4 uppercase">Transaction Complete</p>
          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 tracking-tighter">ORDER RECEIVED</h1>
          <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mb-8 md:mb-12 text-sm md:text-base px-4">
            Your selection has been registered. Our concierge team is now overseeing the preparation of your package. A detailed confirmation has been sent to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="font-label-caps text-[11px] border-b border-primary pb-2 hover:text-secondary transition-colors uppercase tracking-widest">
              Return to Atelier
            </Link>
            <Link href="/admin" className="font-label-caps text-[11px] border-b border-secondary pb-2 hover:text-primary transition-colors uppercase tracking-widest text-secondary">
              View in Dashboard
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopNavBar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          {/* Form Side */}
          <div className="flex-1 max-w-2xl">
            <header className="mb-10 md:mb-16">
              <nav className="flex gap-4 mb-6 md:mb-8">
                <span className={`font-label-caps text-[10px] tracking-widest uppercase ${step >= 1 ? 'text-primary' : 'text-outline'}`}>01 Details</span>
                <ChevronRight size={12} className="text-outline" />
                <span className={`font-label-caps text-[10px] tracking-widest uppercase ${step >= 2 ? 'text-primary' : 'text-outline'}`}>02 Confirmation</span>
              </nav>
              <h1 className="font-headline-lg text-3xl md:text-5xl uppercase tracking-tighter">CHECKOUT</h1>
            </header>

            <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
              {step === 1 ? (
                <div className="space-y-8 md:space-y-10 animate-slide-up">
                  <div className="space-y-6 md:space-y-8">
                    <h2 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 uppercase tracking-[0.2em]">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                       <div className="relative group">
                        <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase">Full Name</label>
                        <input 
                          type="text" required placeholder="Julianna Vane"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                          value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                        />
                      </div>
                      <div className="relative group">
                        <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase">Email Address</label>
                        <input 
                          type="email" required placeholder="vane@luxury.com"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 md:space-y-8">
                    <h2 className="font-label-caps text-[11px] border-b border-outline-variant/30 pb-4 uppercase tracking-[0.2em]">Shipping Residence</h2>
                    <div className="space-y-6 md:space-y-8">
                      <div className="relative group">
                        <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase">Street Address</label>
                        <input 
                          type="text" required placeholder="12 Avenue Montaigne"
                          className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                          value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                        <div className="relative group">
                          <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase">City</label>
                          <input 
                            type="text" required placeholder="Paris"
                            className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                            value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}
                          />
                        </div>
                        <div className="relative group">
                          <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase">Postal Code</label>
                          <input 
                            type="text" required placeholder="75008"
                            className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                            value={formData.postalCode} onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                          />
                        </div>
                        <div className="relative group">
                          <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase">Country</label>
                          <input 
                            type="text" required placeholder="France"
                            className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                            value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 md:space-y-10 animate-slide-up">
                  <div className="bg-surface p-8 md:p-12 border border-primary/5 space-y-4 md:space-y-6">
                    <h2 className="font-label-caps text-[11px] uppercase tracking-widest mb-6 md:mb-8">Review Selection</h2>
                    <div className="space-y-3 md:space-y-4">
                      <p className="font-body-md flex justify-between text-sm md:text-base"><span>Ship to:</span> <span className="text-on-surface-variant">{formData.customerName}</span></p>
                      <p className="font-body-md flex justify-between text-sm md:text-base"><span>Address:</span> <span className="text-on-surface-variant">{formData.address}, {formData.city}</span></p>
                      <p className="font-body-md flex justify-between text-sm md:text-base"><span>Contact:</span> <span className="text-on-surface-variant">{formData.email}</span></p>
                    </div>
                    <button type="button" onClick={() => setStep(1)} className="font-label-caps text-[9px] border-b border-primary/20 pb-1 uppercase hover:border-primary">Edit details</button>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 md:gap-6 pt-6 md:pt-10">
                <button 
                  type="submit"
                  disabled={checkoutStatus === "loading" || items.length === 0}
                  className="w-full bg-primary text-on-primary py-5 md:py-6 font-button text-button uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3 md:gap-4 relative overflow-hidden group disabled:opacity-50 text-[12px] md:text-[14px]"
                >
                  {checkoutStatus === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>PROCESSING TRANSACTION...</span>
                    </>
                  ) : step === 1 ? (
                    <>
                      <span>CONTINUE TO CONFIRMATION</span>
                      <ChevronRight size={16} />
                    </>
                  ) : (
                    <>
                      <Lock size={16} />
                      <span>AUTHORIZE PURCHASE — ${totalPrice().toLocaleString()}</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-3 opacity-40">
                  <Lock size={12} />
                  <span className="font-label-caps text-[9px] uppercase tracking-widest">End-to-end encrypted transaction</span>
                </div>
              </div>
            </form>
          </div>

          {/* Summary Side */}
          <div className="lg:w-96">
            <div className="bg-surface p-6 md:p-10 border border-primary/5 lg:sticky lg:top-32">
              <h2 className="font-label-caps text-[11px] mb-6 md:mb-8 border-b border-primary/10 pb-4 uppercase tracking-widest">Bag Summary</h2>
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-12 max-h-[35vh] md:max-h-[40vh] overflow-y-auto pr-2 md:pr-4 hide-scrollbar">
                {items.map((item) => (
                  <div key={item.product._id} className="flex gap-3 md:gap-4">
                    <div className="w-14 h-18 md:w-16 md:h-20 relative bg-surface-container shrink-0">
                      <Image src={item.product.imageUrl} alt={item.product.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-label-caps text-[9px] md:text-[10px] uppercase mb-1">{item.product.name}</h3>
                      <p className="text-[11px] md:text-[12px] text-on-surface-variant">Qty: {item.quantity}</p>
                      <p className="text-[11px] md:text-[12px] font-medium mt-1">${(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 md:space-y-4 border-t border-primary/10 pt-6 md:pt-8">
                <div className="flex justify-between font-body-md text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>${totalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-body-md text-sm">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="text-secondary font-medium uppercase tracking-tighter text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between font-headline-md text-xl md:text-2xl pt-4 border-t border-primary/5">
                  <span>Total</span>
                  <span>${totalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
