import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="relative block h-10 w-10 shrink-0">
              <Image src="/logo.png" alt="kemold opticals" fill className="object-contain" />
            </span>
            <span className="text-2xl font-bold">kemold opticals</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing world-class eye care services and premium eyewear since 1994. Your vision is our expertise.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm">
            <li>
              <Link href="/appointment" className="hover:text-primary transition-colors">
                Comprehensive Eye Exam
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer transition-colors">Contact Lens Fitting</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Pediatric Eye Care</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Prescription Sunglasses</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Shop</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm">
            <li>
              <Link href="/shop" className="hover:text-primary transition-colors">
                Designer Frames
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer transition-colors">Luxury Collection</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Kids Glasses</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Sports Eyewear</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              123 Vision Way, London
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">call</span>
              +234 (0) 70 3132 2989
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">mail</span>
              igoldadeniyi@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs">© 2024 kemold opticals. All rights reserved.</p>
        <div className="flex gap-6 text-slate-500 text-xs">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
