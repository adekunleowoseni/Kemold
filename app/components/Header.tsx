"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-20 py-4">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-3 text-navy dark:text-primary">
          <span className="size-6 text-primary">
            <span className="material-symbols-outlined text-3xl">visibility</span>
          </span>
          <h2 className="text-navy dark:text-white text-xl font-bold tracking-tight">
          Kemold Opticals
          </h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            Glasses
          </Link>
          <Link
            href="/appointment"
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            Eye Care
          </Link>
          <Link
            href="/#about"
            className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="text-slate-400 flex bg-white dark:bg-slate-800 items-center justify-center pl-3">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 border-none bg-white dark:bg-slate-800 focus:ring-0 h-full placeholder:text-slate-400 text-sm rounded-r-lg px-2"
              placeholder="Find frames..."
            />
          </div>
        </label>
        <Link
          href="/appointment"
          className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-transform hover:scale-[1.02] active:scale-95"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
