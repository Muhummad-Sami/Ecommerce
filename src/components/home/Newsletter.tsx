"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="reveal-on-scroll py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
      <h2 className="font-headline-md text-headline-md mb-6 uppercase tracking-tighter">Enter the World of AESTHETE</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-md mx-auto">Sign up for private releases and exclusive cultural insights.</p>
      
      {status === "success" ? (
        <div className="font-body-md text-secondary">Welcome to Aesthete. You are now on the list.</div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col md:flex-row gap-8 items-end justify-center">
          <div className="w-full relative group">
            <label className="block font-label-caps text-label-caps text-left mb-2 uppercase opacity-50">Email Address</label>
            <input 
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-secondary focus:outline-none transition-colors font-body-md" 
              placeholder="YOUR@EMAIL.COM" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            className="bg-primary text-white px-10 py-4 font-button text-button uppercase tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all shrink-0 disabled:opacity-50" 
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "JOINING..." : "JOIN"}
          </button>
        </form>
      )}
    </section>
  );
}
