"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingBag, User } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";


export default function TopNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const setUser = useCartStore((state) => state.setUser);

  // ✅ INIT AUTH + CART (FIXED: using sessionStorage instead of localStorage)
  useEffect(() => {
    setMounted(true);

    // 🔥 CHANGE: localStorage → sessionStorage (auto logout on browser close)
    const userStr = sessionStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;

    if (user?.id) {
      setIsLoggedIn(true);
      setUser(user.id); // load user cart
    } else {
      setIsLoggedIn(false);
      setUser(null); // guest cart
    }
  }, [setUser]);

  // ✅ LOGOUT FIXED (CHANGE: sessionStorage clear)
  const handleLogout = () => {
    // 🔥 CHANGE: remove from sessionStorage instead of localStorage
    sessionStorage.removeItem("user");

    setUser(null);        // switch to guest cart
    setIsLoggedIn(false);

    router.push("/login");
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-primary/10">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20">

        {/* LEFT */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-primary font-bold">
            AESTHETE
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/collections">Collections</Link>
            <Link href="/story">Story</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          <Search size={18} />

          <Link href="/admin">
            <User size={18} />
          </Link>

          {/* AUTH BUTTONS */}
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="px-3 py-1 border text-xs uppercase">
                Account
              </Link>

              <button
                onClick={handleLogout}
                className="px-3 py-1 border text-xs uppercase hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="px-3 py-1 border text-xs uppercase">
              Login
            </Link>
          )}

          <Link href="/cart">
            <ShoppingBag size={18} />
          </Link>

        </div>

      </nav>
    </header>
  );
}