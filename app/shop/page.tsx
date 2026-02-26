"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type GlassProduct = {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  desc: string;
  image: string;
  alt: string;
  badge: string | null;
  badgeClass: string | null;
  colors: string[];
  ageGroup: string;
  frameShape: string;
  material: string;
};

const AGE_GROUPS = [
  { key: "kids", label: "Kids", icon: "child_care" },
  { key: "teens", label: "Teens", icon: "face" },
  { key: "adults", label: "Adults", icon: "group" },
] as const;

const FRAME_SHAPES = [
  "Rectangle",
  "Round",
  "Cat Eye",
  "Aviator",
  "Oval",
  "Square",
];

const SHAPE_TO_KEY: Record<string, string> = {
  Rectangle: "rectangle",
  Round: "round",
  "Cat Eye": "cat-eye",
  Aviator: "aviator",
  Oval: "oval",
  Square: "square",
};

const MATERIALS = ["Acetate", "Metal", "Titanium", "Sustainable"];
const MATERIAL_TO_KEY: Record<string, string> = {
  Acetate: "acetate",
  Metal: "metal",
  Titanium: "titanium",
  Sustainable: "sustainable",
};

const SORT_OPTIONS = [
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
] as const;

export default function ShopPage() {
  const [glasses, setGlasses] = useState<GlassProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [ageFilter, setAgeFilter] = useState<string[]>([]);
  const [shapeFilter, setShapeFilter] = useState<string[]>([]);
  const [materialFilter, setMaterialFilter] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 500]);
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["value"]>("newest");

  useEffect(() => {
    fetch("/api/glasses")
      .then((res) => res.json())
      .then((data) => {
        setGlasses(data.glasses ?? []);
      })
      .catch(() => setGlasses([]))
      .finally(() => setLoading(false));
  }, []);

  const toggleAge = (key: string) => {
    setAgeFilter((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  const toggleShape = (shape: string) => {
    const key = SHAPE_TO_KEY[shape] ?? shape.toLowerCase().replace(/\s+/g, "-");
    setShapeFilter((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  const toggleMaterial = (mat: string) => {
    const key = MATERIAL_TO_KEY[mat] ?? mat.toLowerCase();
    setMaterialFilter((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  const filteredAndSorted = useMemo(() => {
    let list = glasses.filter((p) => {
      if (ageFilter.length && !ageFilter.includes(p.ageGroup)) return false;
      if (shapeFilter.length && !shapeFilter.includes(p.frameShape)) return false;
      if (materialFilter.length && !materialFilter.includes(p.material)) return false;
      if (p.priceNumber < priceRange[0] || p.priceNumber > priceRange[1]) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.priceNumber - b.priceNumber);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.priceNumber - a.priceNumber);

    return list;
  }, [glasses, ageFilter, shapeFilter, materialFilter, priceRange, sort]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-8">
          <nav className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">Collections</span>
          </nav>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Eyewear Collection
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Discover premium frames designed for every face and lifestyle. Expertly crafted for clarity and comfort.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Age Group</h3>
                <div className="space-y-2">
                  {AGE_GROUPS.map(({ key, label, icon }) => (
                    <label
                      key={key}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors ${
                        ageFilter.includes(key) ? "bg-primary/10 text-primary" : "hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className="material-symbols-outlined text-slate-500">{icon}</span>
                      <span className="text-sm font-medium">{label}</span>
                      <input
                        type="checkbox"
                        checked={ageFilter.includes(key)}
                        onChange={() => toggleAge(key)}
                        className="ml-auto rounded border-slate-300 text-primary focus:ring-primary"
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Frame Shape</h3>
                <div className="grid grid-cols-2 gap-2">
                  {FRAME_SHAPES.map((shape) => {
                    const key = SHAPE_TO_KEY[shape] ?? shape.toLowerCase();
                    const active = shapeFilter.includes(key);
                    return (
                      <button
                        key={shape}
                        type="button"
                        onClick={() => toggleShape(shape)}
                        className={`rounded-lg border p-2 text-xs font-semibold transition-all ${
                          active
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-slate-200 dark:border-slate-800 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {shape}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Material</h3>
                <div className="space-y-2">
                  {MATERIALS.map((m) => {
                    const key = MATERIAL_TO_KEY[m] ?? m.toLowerCase();
                    const active = materialFilter.includes(key);
                    return (
                      <label
                        key={m}
                        className={`flex cursor-pointer items-center gap-3 text-sm font-medium ${
                          active ? "text-primary" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={materialFilter.includes(key)}
                          onChange={() => toggleMaterial(m)}
                          className="rounded border-slate-300 text-primary focus:ring-primary"
                        />
                        {m}
                      </label>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Price Range</h3>
                <input
                  type="range"
                  min={50}
                  max={500}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange(([min]) => [min, Number(e.target.value)])}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-slate-800 accent-primary"
                />
                <div className="mt-2 flex justify-between text-xs font-bold">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <p className="text-sm font-medium text-slate-500">
                {loading ? "Loading…" : `Showing ${filteredAndSorted.length} of ${glasses.length} products`}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof SORT_OPTIONS)[number]["value"])}
                className="rounded-lg border-none bg-transparent text-sm font-bold focus:ring-0"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
                ))}
              </div>
            ) : filteredAndSorted.length === 0 ? (
              <p className="py-12 text-center text-slate-500">No products match your filters. Try adjusting them.</p>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAndSorted.map((product) => (
                  <div key={product.id} className="group relative flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-contain object-center transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <button
                        type="button"
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        Virtual Try-On
                      </button>
                      {product.badge && (
                        <span
                          className={`absolute right-4 top-4 rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-widest text-white ${product.badgeClass ?? "bg-primary"}`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{product.name}</h3>
                        <p className="text-sm font-black text-primary">{product.price}</p>
                      </div>
                      <p className="text-xs text-slate-500">{product.desc}</p>
                      {product.colors.length > 0 && (
                        <div className="mt-2 flex gap-1">
                          {product.colors.map((c, i) => (
                            <div
                              key={i}
                              className={`h-3 w-3 rounded-full ring-1 ring-offset-2 ring-primary ${c}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && filteredAndSorted.length > 0 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white">1</button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
                >
                  2
                </button>
                <span className="px-2">...</span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
