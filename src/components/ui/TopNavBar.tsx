"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";


export default function TopNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const setUser = useCartStore((state) => state.setUser);
  const totalItems = useCartStore((state) => state.totalItems);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Scroll detection for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // ✅ LOGOUT FIXED (CHANGE: sessionStorage clear)
  const handleLogout = () => {
    // 🔥 CHANGE: remove from sessionStorage instead of localStorage
    sessionStorage.removeItem("user");

    setUser(null);        // switch to guest cart
    setIsLoggedIn(false);

    router.push("/login");
  };

  if (!mounted) return null;

  const cartCount = totalItems();

  return (
    <>
      <header className={`fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-primary/10 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 md:h-20 max-w-container-max mx-auto">

          {/* LEFT */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="text-primary font-bold text-sm md:text-base tracking-tight">
              AESTHETE
            </Link>

            <div className="hidden md:flex gap-8">
              <Link href="/collections" className={`font-body-md text-sm hover:text-secondary transition-colors ${pathname === "/collections" ? "text-primary font-medium" : "text-on-surface-variant"}`}>Collections</Link>
              <Link href="/story" className={`font-body-md text-sm hover:text-secondary transition-colors ${pathname === "/story" ? "text-primary font-medium" : "text-on-surface-variant"}`}>Story</Link>
              <Link href="/contact" className={`font-body-md text-sm hover:text-secondary transition-colors ${pathname === "/contact" ? "text-primary font-medium" : "text-on-surface-variant"}`}>Contact</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 md:gap-6">

            <Link href="/collections" className="hover:text-secondary transition-colors" aria-label="Search">
              <Search size={18} />
            </Link>

            <Link href="/admin" className="hover:text-secondary transition-colors hidden md:block" aria-label="Admin">
              <User size={18} />
            </Link>

            {/* AUTH BUTTONS - Desktop only */}
            <div className="hidden md:flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 border border-primary/20 text-xs uppercase tracking-wider hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="px-3 py-1.5 border border-primary/20 text-xs uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all">
                  Login
                </Link>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative hover:text-secondary transition-colors" aria-label="Cart">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-secondary text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1 hover:text-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? "active" : ""}`}>
        <div className="flex justify-between items-center px-6 h-16 border-b border-primary/10">
          <span className="font-headline-md text-xl tracking-tighter">AESTHETE</span>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col py-8 px-6">
          <Link href="/" className="py-4 font-label-caps text-[12px] uppercase tracking-[0.2em] border-b border-primary/5 hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="/collections" className="py-4 font-label-caps text-[12px] uppercase tracking-[0.2em] border-b border-primary/5 hover:text-secondary transition-colors">
            Collections
          </Link>
          <Link href="/story" className="py-4 font-label-caps text-[12px] uppercase tracking-[0.2em] border-b border-primary/5 hover:text-secondary transition-colors">
            Our Story
          </Link>
          <Link href="/contact" className="py-4 font-label-caps text-[12px] uppercase tracking-[0.2em] border-b border-primary/5 hover:text-secondary transition-colors">
            Contact
          </Link>
          <Link href="/admin" className="py-4 font-label-caps text-[12px] uppercase tracking-[0.2em] border-b border-primary/5 hover:text-secondary transition-colors">
            Dashboard
          </Link>
          <Link href="/cart" className="py-4 font-label-caps text-[12px] uppercase tracking-[0.2em] border-b border-primary/5 hover:text-secondary transition-colors flex items-center justify-between">
            <span>Shopping Bag</span>
            {cartCount > 0 && (
              <span className="bg-primary text-on-primary text-[10px] px-2 py-0.5">{cartCount}</span>
            )}
          </Link>
        </nav>

        <div className="px-6 mt-4">
          {isLoggedIn ? (
            <button
              onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
              className="w-full py-4 border border-primary text-primary font-button text-[11px] uppercase tracking-widest hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
            >
              Sign Out
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link href="/login" className="w-full py-4 bg-primary text-on-primary font-button text-[11px] uppercase tracking-widest text-center">
                Sign In
              </Link>
              <Link href="/signup" className="w-full py-4 border border-primary text-primary font-button text-[11px] uppercase tracking-widest text-center">
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}