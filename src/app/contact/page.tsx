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
      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Header & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <header className="mb-16">
              <p className="font-label-caps text-[10px] text-secondary tracking-[0.3em] uppercase mb-4">Concierge</p>
              <h1 className="font-headline-lg text-5xl md:text-7xl mb-8 tracking-tighter uppercase">GET IN TOUCH</h1>
              <p className="font-body-lg text-on-surface-variant max-w-md leading-relaxed">
                Whether you're inquiring about a bespoke order or seeking archival information, our dedicated team is at your disposal.
              </p>
            </header>

            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  <Mail size={18} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] uppercase tracking-widest mb-2 opacity-50">Email</h3>
                  <p className="font-body-md text-xl">atelier@aesthete.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  <Phone size={18} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] uppercase tracking-widest mb-2 opacity-50">Studio</h3>
                  <p className="font-body-md text-xl">+44 (0) 20 7946 0123</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center border border-primary/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  <MapPin size={18} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-label-caps text-[10px] uppercase tracking-widest mb-2 opacity-50">Maison</h3>
                  <p className="font-body-md text-xl">12 Avenue Montaigne, Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-surface p-12 md:p-20 border border-primary/5 shadow-sm relative overflow-hidden">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-20 h-full animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={40} strokeWidth={1} />
                </div>
                <h2 className="font-headline-md text-3xl mb-4 tracking-tight uppercase">Message Received</h2>
                <p className="font-body-md text-on-surface-variant max-w-sm mb-10">Your inquiry is being handled with the utmost care. Expect a response from our atelier within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="font-label-caps text-[10px] border-b border-primary pb-1 hover:text-secondary uppercase tracking-widest transition-colors">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    required rows={5} placeholder="Compose your inquiry..."
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors font-body-md resize-none"
                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-primary text-on-primary py-6 font-button text-button uppercase tracking-[0.3em] hover:bg-black transition-all flex items-center justify-center gap-4 relative overflow-hidden"
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
                  <p className="text-error text-center mt-4 font-body-md">Connection interrupted. Please attempt your submission again.</p>
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
