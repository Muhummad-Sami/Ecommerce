import Link from "next/link";
import { Globe, Share2, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative bg-surface dark:bg-surface-container-low border-t border-primary/10 dark:border-outline-variant/20 transition-all duration-300">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 md:col-span-1">
          <h2 className="font-headline-md text-headline-md text-primary dark:text-on-surface mb-4 md:mb-6">AESTHETE</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[200px] text-sm">Modern curation for the refined individual.</p>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-4 md:mb-6 uppercase text-[10px] md:text-[12px]">Collections</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link href="/collections" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">The Archive</Link></li>
            <li><Link href="/collections" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">New Objects</Link></li>
            <li><Link href="/collections" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Seasonal Edit</Link></li>
            <li><Link href="/contact" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Bespoke Service</Link></li>
          </ul>
        </div>

        {/* Client Care */}
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-4 md:mb-6 uppercase text-[10px] md:text-[12px]">Client Care</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link href="/story" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">About Us</Link></li>
            <li><Link href="/contact" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Shipping Info</Link></li>
            <li><Link href="/contact" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Returns</Link></li>
            <li><Link href="/contact" className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Contact Us</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-4 md:mb-6 uppercase text-[10px] md:text-[12px]">Connect</h4>
          <div className="flex gap-4 mb-6">
            <a href="https://aesthete.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors" aria-label="Website"><Globe className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors" aria-label="Twitter"><Share2 className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="mailto:atelier@aesthete.com" className="text-primary hover:text-secondary transition-colors" aria-label="Email"><AtSign className="w-5 h-5" strokeWidth={1.5} /></a>
          </div>
          <div className="hidden md:block">
            <Link href="/login" className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary border-b border-primary/20 pb-1 transition-all uppercase tracking-widest">
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-margin-mobile md:px-margin-desktop py-6 md:py-8 max-w-container-max mx-auto border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <span className="font-body-md text-[12px] md:text-body-md text-on-surface-variant opacity-60">© 2024 AESTHETE. All rights reserved.</span>
        <div className="flex gap-6 md:gap-8">
          <span className="font-label-caps text-[9px] md:text-[10px] tracking-widest text-on-surface-variant">PARIS</span>
          <span className="font-label-caps text-[9px] md:text-[10px] tracking-widest text-on-surface-variant">LONDON</span>
          <span className="font-label-caps text-[9px] md:text-[10px] tracking-widest text-on-surface-variant">TOKYO</span>
        </div>
      </div>
    </footer>
  );
}
