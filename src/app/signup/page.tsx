"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { UserPlus } from "lucide-react";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "";
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMessage(data.error || "Something went wrong");
      setError(true);
      return;
    }

    setMessage("Account created! Redirecting to login...");
    setError(false);

    setName("");
    setEmail("");
    setPassword("");

    // Redirect to login, preserving the redirect param
    router.push(`/login${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`);
  };

  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="w-full max-w-[480px] py-12">

        {/* Back to home */}
        <Link href="/" className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors mb-10 md:mb-12 inline-block">
          ← Back to Store
        </Link>

        <div className="text-center mb-10 md:mb-12">
          <h1 className="font-headline-md text-headline-md tracking-tighter text-primary text-3xl md:text-headline-md mb-3">
            AESTHETE
          </h1>
          <p className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant uppercase tracking-widest">
            Create your account
          </p>
        </div>

        {/* Show info banner when redirected from cart/checkout */}
        {redirectTo && (
          <div className="w-full bg-surface-container-low border border-primary/10 p-4 flex items-center gap-3 mb-8">
            <UserPlus size={16} className="text-secondary shrink-0" />
            <p className="text-[12px] text-on-surface-variant">
              Create an account to continue with your {redirectTo.includes("checkout") ? "purchase" : "shopping"}.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
          <div>
            <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="w-full py-3 bg-transparent border-b border-primary/20 focus:border-primary focus:outline-none transition-colors font-body-md"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full py-3 bg-transparent border-b border-primary/20 focus:border-primary focus:outline-none transition-colors font-body-md"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="w-full py-3 bg-transparent border-b border-primary/20 focus:border-primary focus:outline-none transition-colors font-body-md"
              placeholder="Minimum 8 characters"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary font-button text-[12px] md:text-button py-5 uppercase tracking-widest gold-hover-effect disabled:opacity-50 hover:bg-black transition-all"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          {message && (
            <p className={`text-center mt-4 text-sm ${error ? "text-red-500" : "text-green-600"}`}>
              {message}
            </p>
          )}
        </form>

        <footer className="text-center mt-10 md:mt-12 pt-6 md:pt-8 border-t border-primary/5">
          <p className="text-on-surface-variant text-sm">
            Already have an account?
            <Link
              href={`/login${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
              className="text-primary ml-2 font-medium hover:text-secondary transition-colors"
            >
              Sign In
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse font-label-caps text-label-caps">Loading...</div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}