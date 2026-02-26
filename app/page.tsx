import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const COLLECTIONS = [
  {
    title: "Kids & Teens",
    description: "Durable, stylish frames built for active lives.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIS9cGm8bAmmKJf1h4DKFxwZ4a-QbFr0IqUVxFp_8t5VapDVLOg70GNg28Q_nDfe1e8MRInSZXpL5f37gwzsXCRsDHOJuMdqCuS0JP8kHSK_0R4ytL41vhDGkpTKy6IEZFgNQ0WbKt8UmS4rQe7NwHXczg_IW8D6USDdBFcGlbRuSRXApSpZtrOHjd-6jUQfIlxfh951zAAHMyoCzndLzggJsvxsLFL78asKHtUlVbOBKApJsFz3VtVdKD_N2a6a6DNSW8JWSJ",
    alt: "Young boy wearing colorful durable glasses",
  },
  {
    title: "Young Adults",
    description: "Trend-setting designs and digital eye protection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8XK58n0qVpV3jdN6n8s00WiaKxrSXYn3eGnnd0ElLGPZMGdwN6F0O9KMv6tl6dQPgXr90XVrZ1wLHeBZcYcDx0DFiuPebwYjCxy-bsjZpCKA05O4sH9B5zezQmfP3g1QuxCw1kbdnBbRlvCNkiqqp3EdTN-WRU8nsGtvG3cO-X_0rGVHi3cCxNJxqfr6OEFTUsIGmRyHbvhCB3EYDad67xIaGXJv1Zy55zp4svgsznF29-6SCI_G8Ak5liFYJN3bdS-j5xcuE",
    alt: "Fashionable young woman wearing trendy eyewear",
  },
  {
    title: "Classic Adults",
    description: "Sophisticated elegance for work and leisure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV-sY4m16vgXQJLpcqyJlHFQyzSoqTiYKpKpjiKCx9Xi8VzuY7aM9I2sWFDgJk7DRNyGw3I_VKygwtdYEKgNsEJbdrczo8TiIp27FNu08JqNkeK99ymxla4fT2hzH3DDQkqXKQYbAFWQ8s5YI2TVHVVgRL1aTrhhY-G2ZE8pUi39V5usW8NARV_abRZWMHNMRlkjvJjmONmkilkyVFGB6Lz92pUV4eqF_23tksYG-D6eOpA5w-jN-YmONROGQ051CtamSTbPYO",
    alt: "Distinguished man wearing elegant classic frames",
  },
];

const FEATURES = [
  {
    icon: "verified_user",
    title: "Expert Consultations",
    description: "Our certified opticians provide thorough eye exams for all ages using evidence-based practices.",
  },
  {
    icon: "memory",
    title: "Advanced Technology",
    description: "We use the latest 3D retinal imaging and precision diagnostic tools for accurate vision correction.",
  },
  {
    icon: "stylus_note",
    title: "Curated Styles",
    description: "A handpicked selection of frames from world-leading designers and independent artisanal brands.",
  },
  {
    icon: "support_agent",
    title: "Lifetime Support",
    description: "Complimentary adjustments and cleaning services for the life of your eyewear.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-12 lg:py-20">
            <div className="flex flex-col gap-10 lg:flex-row items-center">
              <div className="flex flex-col gap-8 lg:w-1/2">
                <div className="flex flex-col gap-4">
                  <span className="text-primary font-bold tracking-widest text-xs uppercase">
                    Est. 1994 • Professional Eye Care
                  </span>
                  <h1 className="text-navy dark:text-white text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                    Precision Eye Care <br />{" "}
                    <span className="text-primary">for Every Generation</span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[540px]">
                    Experience expert consultations and a curated collection of premium eyewear tailored to your unique lifestyle. Your vision is our priority.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/appointment"
                    className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                  >
                    Book an Eye Test
                  </Link>
                  <Link
                    href="/shop"
                    className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-beige dark:bg-slate-800 text-navy dark:text-white text-base font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  >
                    Shop Glasses
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC12dQtEXPji-cBqD6mjJeNN6Ribkw-Hj4nH9-bRxcnSUAr8Xhuyos0au1vMpUDWDPYyyXa9pRRMe5yK9G_PSYL0hHThj_DTy18_u1kNUbb2OAIpaV5UV7X7Cqa1pgAjFdPQ6acfYtz5KYJbp8dRZU-MSgha7G5R-31jwIJJr9QnmGWTtSK1VpqgQ3udmpSLUTl_rYL0TGmljEi8OnG128PDbtrzbxURJnCKRbpOzmhZhXyZPn3S8f0hOgjytzp7fXz7Od1VimN"
                    alt="Modern optician checking patient eye vision"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Collection Categories */}
          <section id="collections" className="bg-white dark:bg-background-dark py-20 px-6 md:px-20 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-navy dark:text-white text-3xl md:text-4xl font-bold mb-4">
                  Explore Our Collections
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {COLLECTIONS.map((item) => (
                  <Link
                    href="/shop"
                    key={item.title}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:from-primary/80" />
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                      <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="about" className="py-20 px-6 md:px-20 bg-background-light dark:bg-slate-900/50">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3 flex flex-col gap-6">
                  <h2 className="text-navy dark:text-white text-4xl font-extrabold leading-tight">
                    Why Choose Our Care?
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    Combining advanced technology with personalized care to ensure your vision is at its best. We pride ourselves on attention to detail and patient satisfaction.
                  </p>
                  <div className="flex items-center gap-4 text-primary">
                    <span className="font-bold text-lg">Trust Score: 4.9/5</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="p-8 rounded-2xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-primary/10 size-12 rounded-xl flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-navy dark:text-white text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
