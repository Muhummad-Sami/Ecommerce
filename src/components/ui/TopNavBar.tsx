import Link from "next/link";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-primary/10 transition-all duration-700 ease-in-out">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="font-headline-md text-headline-md tracking-tighter text-primary">
            AESTHETE
          </Link>
          <div className="hidden md:flex gap-10">
            <Link href="/collections" className="font-label-caps text-[10px] tracking-widest text-primary border-b border-transparent hover:border-primary pb-1 transition-all duration-500 uppercase">
              Collections
            </Link>
            <Link href="/story" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant hover:text-primary pb-1 transition-all duration-500 uppercase">
              Our Story
            </Link>
            <Link href="/contact" className="font-label-caps text-[10px] tracking-widest text-on-surface-variant hover:text-primary pb-1 transition-all duration-500 uppercase">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-primary hover:opacity-50 transition-opacity">
            <Search size={18} strokeWidth={1} />
          </button>
          <Link href="/admin" className="text-primary hover:opacity-50 transition-opacity hidden sm:block">
            <User size={18} strokeWidth={1} />
          </Link>
          <Link href="/cart" className="text-primary hover:opacity-50 transition-opacity relative">
            <ShoppingBag size={18} strokeWidth={1} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
