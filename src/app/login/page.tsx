"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ UI states (FIXED missing issues)
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);

    // ❗ FIX 1: check HTTP status too
    if (!res.ok || !data.success) {
      setMessage(data.message || "Login failed");
      setError(true);
      return;
    }

    // ❗ FIX 2: safe user check
    if (!data.user?.id) {
      setMessage("Invalid server response");
      setError(true);
      return;
    }

    // save user
    sessionStorage.setItem("user", JSON.stringify(data.user));

    // FIX 3: ensure cart loads properly
    setTimeout(() => {
      useCartStore.getState().setUser(data.user.id);
    }, 50);

    setMessage("Login successful");
    setError(false);

    router.push("/");
  } catch (err) {
    console.error(err);
    setMessage("Server error. Try again.");
    setError(true);
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-[20px] md:px-[80px] bg-surface-container-lowest">

      <div className="w-full max-w-[420px] flex flex-col items-center space-y-12">

        <header className="text-center space-y-4">
          <h1 className="font-headline-md text-headline-md tracking-tighter text-primary">
            AESTHETE
          </h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            Sign in to your account
          </p>
        </header>

        <form onSubmit={handleLogin} className="w-full space-y-10">

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full bg-transparent border-b border-primary/20 py-3"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-transparent border-b border-primary/20 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 bg-primary text-white uppercase tracking-widest"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* MESSAGE */}
        {message && (
          <p className={error ? "text-red-500" : "text-green-600"}>
            {message}
          </p>
        )}

        <footer className="text-center pt-8 border-t border-primary/5 w-full">
          <p className="text-on-surface-variant">
            Don't have an account?
            <a href="/signup" className="text-primary ml-2">
              Sign Up
            </a>
          </p>
        </footer>

      </div>
    </main>
  );
}