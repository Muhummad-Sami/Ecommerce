"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loading) return; // stop double click

  setLoading(true);

  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  setLoading(false);

  console.log("Response:", data);

  if (!res.ok) {
  setMessage(data.error || "Something went wrong");
  setError(true);
  return;
  }

  // success
  setMessage("Account created successfully");
  setError(false);

  setName("");
  setEmail("");
  setPassword("");

  // redirect immediately
  router.push("/login");
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col selection:bg-secondary-fixed/30">

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-primary/10 h-20">
        <nav className="flex justify-between items-center w-full px-[20px] md:px-[80px] h-full max-w-[1440px] mx-auto">
          <div className="font-headline-md text-headline-md tracking-tighter text-primary">
            AESTHETE
          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main className="flex-grow flex items-center justify-center pt-20 px-[20px]">
        <div className="w-full max-w-[480px] py-[120px]">

          <div className="text-center mb-12">
            <h1 className="font-headline-lg text-headline-lg mb-4">
              Create Account
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* NAME */}
            <div>
              <label className="block font-label-caps text-label-caps mb-2">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full py-3 input-underline font-body-md"
                placeholder="Enter your full name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-label-caps text-label-caps mb-2">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full py-3 input-underline font-body-md"
                placeholder="name@example.com"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block font-label-caps text-label-caps mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full py-3 input-underline font-body-md"
                placeholder="Minimum 8 characters"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary font-button text-button py-5 uppercase tracking-widest gold-hover-effect disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
            {/* MESSAGE */}
            {message && (
              <p
                className={`text-center mt-4 text-sm ${
                  error ? "text-red-500" : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}

          </form>
        </div>
      </main>
    </div>
  );
}