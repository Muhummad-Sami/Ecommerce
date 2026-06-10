"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { getPendingCartItem, clearPendingCartItem } from "@/lib/auth";
import { LogIn } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setMessage(data.message || "Login failed");
        setError(true);
        return;
      }

      if (!data.user?.id) {
        setMessage("Invalid server response");
        setError(true);
        return;
      }

      // Save user to session
      sessionStorage.setItem("user", JSON.stringify(data.user));

      // Load user's cart
      useCartStore.getState().setUser(data.user.id);

      // ✅ PROCESS PENDING CART ITEM — auto-add product that was waiting
      const pending = getPendingCartItem();
      if (pending && pending.product) {
        // Small delay to ensure cart store is ready with user's cart
        setTimeout(() => {
          useCartStore.getState().addItem(pending.product, pending.quantity || 1);
          clearPendingCartItem();

          // If user was trying to checkout, go to checkout
          if (pending.goToCheckout) {
            router.push("/checkout");
          } else {
            router.push(redirectTo);
          }
        }, 100);
      } else {
        // No pending item — just redirect normally
        router.push(redirectTo);
      }

      setMessage("Login successful! Redirecting...");
      setError(false);
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="w-full max-w-[420px] flex flex-col items-center space-y-10 md:space-y-12 py-12">

        {/* Back to home */}
        <Link href="/" className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors self-start">
          ← Back to Store
        </Link>

        <header className="text-center space-y-3 md:space-y-4">
          <h1 className="font-headline-md text-headline-md tracking-tighter text-primary text-3xl md:text-headline-md">
            AESTHETE
          </h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px] md:text-[12px]">
            Sign in to your account
          </p>
        </header>

        {/* Show info banner when redirected from cart/checkout */}
        {redirectTo !== "/" && (
          <div className="w-full bg-surface-container-low border border-primary/10 p-4 flex items-center gap-3">
            <LogIn size={16} className="text-secondary shrink-0" />
            <p className="text-[12px] text-on-surface-variant">
              Please sign in to continue with your {redirectTo.includes("checkout") ? "checkout" : "shopping"}. Your selected items will be added to your bag automatically.
            </p>
          </div>
        )}

        <form onSubmit={handleLogin} className="w-full space-y-8 md:space-y-10">
          <div>
            <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary focus:outline-none transition-colors font-body-md"
            />
          </div>

          <div>
            <label className="block font-label-caps text-[10px] text-outline mb-2 uppercase tracking-widest">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-transparent border-b border-primary/20 py-3 focus:border-primary focus:outline-none transition-colors font-body-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-primary text-white uppercase tracking-widest font-button text-[12px] md:text-[14px] hover:bg-black transition-all disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <p className={`text-sm text-center ${error ? "text-red-500" : "text-green-600"}`}>
            {message}
          </p>
        )}

        <footer className="text-center pt-6 md:pt-8 border-t border-primary/5 w-full">
          <p className="text-on-surface-variant text-sm">
            Don&apos;t have an account?
            <Link
              href={`/signup${redirectTo !== "/" ? `?redirect=${encodeURIComponent(redirectTo)}` : ""}`}
              className="text-primary ml-2 font-medium hover:text-secondary transition-colors"
            >
              Create Account
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse font-label-caps text-label-caps">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}