import Link from "next/link";
import { Globe, Share2, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative bg-surface dark:bg-surface-container-low border-t border-primary/10 dark:border-outline-variant/20 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-headline-md text-headline-md text-primary dark:text-on-surface mb-6">AESTHETE</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[200px]">Modern curation for the refined individual.</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6 uppercase">Collections</h4>
          <ul className="space-y-4">
            <li><Link href="/collections" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">The Archive</Link></li>
            <li><Link href="/collections" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">New Objects</Link></li>
            <li><Link href="/collections" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Seasonal Edit</Link></li>
            <li><Link href="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Bespoke Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6 uppercase">Client Care</h4>
          <ul className="space-y-4">
            <li><Link href="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Privacy</Link></li>
            <li><Link href="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Terms</Link></li>
            <li><Link href="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Shipping</Link></li>
            <li><Link href="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-opacity">Sustainability</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6 uppercase">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="text-primary hover:text-secondary transition-colors"><Globe className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="#" className="text-primary hover:text-secondary transition-colors"><Share2 className="w-5 h-5" strokeWidth={1.5} /></a>
            <a href="#" className="text-primary hover:text-secondary transition-colors"><AtSign className="w-5 h-5" strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body-md text-body-md text-on-surface-variant opacity-60">© 2024 AESTHETE. All rights reserved.</span>
        <div className="flex gap-8">
          <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">PARIS</span>
          <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">LONDON</span>
          <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">TOKYO</span>
        </div>
      </div>
    </footer>
  );
}
