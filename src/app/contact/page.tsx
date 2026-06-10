"use client";

import TopNavBar from "@/components/ui/TopNavBar";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formspree.io/f/xqengkwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Inquiry: ${formData.subject}`
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <TopNavBar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          {/* Header & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <header className="mb-10 md:mb-16">
              <p className="font-label-caps text-[10px] text-secondary tracking-[0.3em] uppercase mb-3 md:mb-4">Concierge</p>
              <h1 className="font-headline-lg text-3xl md:text-5xl lg:text-7xl mb-6 md:mb-8 tracking-tighter uppercase">GET IN TOUCH</h1>
              <p className="font-body-lg text-on-surface-variant max-w-md leading-relaxed text-sm md:text-base">
                Whether you&apos;re inquiring about a bespoke order or seeking archival information, our dedicated team is at your disposal.
              </p>
            </header>

            <div className="space-y-8 md:space-y-12">
              <a href="mailto:atelier@aesthete.com" className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 shrink-0">
                  <Mail size={16} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] uppercase tracking-widest mb-1 md:mb-2 opacity-50">Email</h3>
                  <p className="font-body-md text-base md:text-xl">atelier@aesthete.com</p>
                </div>
              </a>
              <a href="tel:+442079460123" className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 shrink-0">
                  <Phone size={16} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] uppercase tracking-widest mb-1 md:mb-2 opacity-50">Studio</h3>
                  <p className="font-body-md text-base md:text-xl">+44 (0) 20 7946 0123</p>
                </div>
              </a>
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 shrink-0">
                  <MapPin size={16} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] uppercase tracking-widest mb-1 md:mb-2 opacity-50">Maison</h3>
                  <p className="font-body-md text-base md:text-xl">12 Avenue Montaigne, Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-12 lg:p-20 border border-primary/5 shadow-sm relative overflow-hidden">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 md:py-20 h-full animate-slide-up">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6 md:mb-8">
                  <CheckCircle2 size={36} strokeWidth={1} />
                </div>
                <h2 className="font-headline-md text-2xl md:text-3xl mb-4 tracking-tight uppercase">Message Received</h2>
                <p className="font-body-md text-on-surface-variant max-w-sm mb-8 md:mb-10 text-sm md:text-base">Your inquiry is being handled with the utmost care. Expect a response from our atelier within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="font-label-caps text-[10px] border-b border-primary pb-1 hover:text-secondary uppercase tracking-widest transition-colors">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 animate-slide-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="relative group">
                    <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" required placeholder="Julianna Vane"
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" required placeholder="vane@luxury.com"
                      className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Inquiry Subject</label>
                  <input 
                    type="text" required placeholder="Regarding the Archival Collection"
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md"
                    value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="relative group">
                  <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Message</label>
                  <textarea 
                    required rows={4} placeholder="Compose your inquiry..."
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md resize-none"
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-primary text-on-primary py-5 md:py-6 font-button text-button uppercase tracking-[0.3em] hover:bg-black transition-all flex items-center justify-center gap-3 md:gap-4 relative overflow-hidden text-[12px] md:text-[14px]"
                >
                  {status === "loading" ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>TRANSMITTING...</span>
                    </div>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-error text-center mt-4 font-body-md text-sm">Connection interrupted. Please attempt your submission again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
