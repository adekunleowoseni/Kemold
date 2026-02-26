import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PRODUCTS = [
  {
    name: "Classic Noir",
    price: "$185",
    desc: "Handcrafted Acetate • Rectangle",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9H-h2qeXSGw465BtY78V4LEcqWDnLd1SQ2MrEZG3L0YnA7sP15kj2bru-swvcZQNiDkfmo2SxuLjWDLdOeHJfSoPMgNjue-XMf8nId1c0_i64UC9523AVXVFcZ9eeiXDaeW0HfzEs3XWTTkF1fArxh5shhrWoSjRIzsO2PjNAa2lJgpdwXucxtJNQv0mz7T2siC-_FG3yTrNR1daW2dUEbNgcBNXaBXbSXFtn1mDMAYG3o_j7xlrrOkXSZXpqPWWKXGh5UwOG",
    alt: "Modern black designer glasses on white background",
    badge: "New",
    colors: ["bg-black", "bg-amber-900", "bg-slate-400"],
  },
  {
    name: "The Minimalist",
    price: "$210",
    desc: "Premium Titanium • Round",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiNVl8L3nnbYLkzw7FDCl2keqVwgWPFdcBbw_MFgckHWYSn3s6JNAgC7HbBjCJ4vqeqO8PZh-e1MJ2bGZh8yjOTEcZPTyAYVd9YUWtNqs8ES12NQcAGUzHerRA1vP8xef8brOjddLO34BXm00n9Vfc20vA7JIof6XyoYG7H0UuteLwg7JDHI_vN2uD0kCfrDs2RHH-LHmB42LEj3CLgqFM9hC3Tc_jKci45jnNvXHhxT3S2m2N9xQaFuX1mTrkA72IRsvYOP4b",
    alt: "Minimalist gold wire rimmed glasses",
    badge: null,
    colors: ["bg-yellow-600", "bg-slate-200"],
  },
  {
    name: "Crystal Vision",
    price: "$195",
    desc: "Eco-Acetate • Square",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDksbvR6nMduxYsdlT218J2wiEfZrA7oFGkq9fLjvESH-eeL6tgxnGPMECaSawBK8pFz6VO1AFtZoAzAmC_dKdRDmz8S_SzcBAeuTkh64I_BUwn_2RUaSgU0MspCr6fijdHOQ0Ehkx7t7ZdLV__W9CSuXbNvpC3udYxrT7l-NHOaZsHJjZ1t-A7mqdClNnWPO_30GJzpthaSbLaSgMqDMMmYfNYwq8xq9jLbTgTqyZqxeLgBQKIsZ3CaNRsfwUV1D0Q59dfPAGu",
    alt: "Clear frames with dark lenses",
    badge: "Best Seller",
    badgeClass: "bg-slate-900",
    colors: ["bg-slate-100/50 border border-slate-300", "bg-blue-100/50 border border-slate-300"],
  },
  {
    name: "Amber Archive",
    price: "$165",
    desc: "Hand-polished Shell • Cat Eye",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVJXws_aw_rM6j8bxkdulhtmRD8AcRKqtNDxhlqtgRO7W_595AD6JltwFxE3JhafONtRBj42TmMQEmLipEQ4gH5S0OUppuDPcUKes-h-DEYyYkAsQzwmi0DRSWQHZqOFhJ5I7AtvA6yc9OD3FEjDE904g5JHgAC9v6rvVDBoDlI5tb3vY_71v8YUiUkCXy3v2kvKVANugg2P4eDhyw0x6aEhM89ew4lmgr_aPLbGpXBfWhkzZAL7Qgy7gbOfY_uYVowrvz1ioA",
    alt: "Stylish tortoise shell glasses",
    badge: null,
    colors: ["bg-orange-900", "bg-orange-700"],
  },
  {
    name: "Rose Elegance",
    price: "$240",
    desc: "Rose Gold Metal • Oval",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2K3v_vk_VNi-Vf0walwsp9ZcACl-Yrfd1ycSJ1BJr0ASTy0sq5RjaUhbiFJrDfUdybjfjnkpf1L2D_EYp8DYFsQ5pImS8RG0Ux10_bhsLWMEDdyz3MHAT0Hq7aIuxExKyxwCx61A9S62fn96JpvMt2Etm0MgqmwAcYjjg0K32RIf6UGdyVd8b4bFb4u4O-CCiKoeMM3F-FQ0E8pczqgb_nsF4QvXvu-4MVuXV-yc59_Yxum3c6eNZA33bE7Ghf9txs69LrZMz",
    alt: "Rose gold metal glasses",
    badge: null,
    colors: ["bg-rose-200", "bg-rose-300"],
  },
  {
    name: "Modern Cobalt",
    price: "$175",
    desc: "Recycled Bio-Polymers • Square",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJCZ_TVdQoze6sclNa5YWZXWWq3g4t7yeVoHDjV-b03LuR2wukCTlObSf0uimoWqpJi2CJMtXD9l9yrGBhniDkiSvHH0oKtRSF_HKtZpgHKp3OZbtN1b0ilIvwOL4YSedvz-eql5_g9N_86_3bYTwO7cgZmV3-nMJBl_-Krh5d8CpqG5kJ-uqPGKqa1gp0Xt0txrCNkNg44Rd6gWV0hkbRB9zPOz3QfsZjnpO7myI2nYHnalT5wUq0a6tnT7jpZiileQmL27Do",
    alt: "Bold blue glasses frames",
    badge: null,
    colors: ["bg-blue-800", "bg-blue-900"],
  },
];

const FRAME_SHAPES = ["Rectangle", "Round", "Cat Eye", "Aviator", "Oval", "Square"];

export default function ShopPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Breadcrumbs & Title */}
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
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Age Group</h3>
                <div className="space-y-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-slate-500">child_care</span>
                    <span className="text-sm font-medium">Kids</span>
                    <input className="ml-auto rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-slate-500">face</span>
                    <span className="text-sm font-medium">Teens</span>
                    <input className="ml-auto rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg bg-primary/10 p-2 text-primary transition-colors">
                    <span className="material-symbols-outlined">group</span>
                    <span className="text-sm font-bold">Adults</span>
                    <input defaultChecked className="ml-auto rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                  </label>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Frame Shape</h3>
                <div className="grid grid-cols-2 gap-2">
                  {FRAME_SHAPES.map((shape) => (
                    <button
                      key={shape}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 p-2 text-xs font-semibold hover:border-primary hover:text-primary transition-all"
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Material</h3>
                <div className="space-y-2">
                  {["Acetate", "Metal", "Titanium", "Sustainable"].map((m) => (
                    <label key={m} className="flex items-center gap-3 text-sm font-medium">
                      <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Price Range</h3>
                <input
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-slate-800 accent-primary"
                  type="range"
                  min={50}
                  max={500}
                />
                <div className="mt-2 flex justify-between text-xs font-bold">
                  <span>$50</span>
                  <span>$500+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <p className="text-sm font-medium text-slate-500">Showing 24 of 156 products</p>
              <select className="rounded-lg border-none bg-transparent text-sm font-bold focus:ring-0">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Popularity</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product) => (
                <div key={product.name} className="group relative flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2">
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
                    <div className="mt-2 flex gap-1">
                      {product.colors.map((c, i) => (
                        <div
                          key={i}
                          className={`h-3 w-3 rounded-full ring-1 ring-offset-2 ring-primary ${c}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white">1</button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold">2</button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold">3</button>
              <span className="px-2">...</span>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold">12</button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
