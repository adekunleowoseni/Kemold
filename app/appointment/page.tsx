import Link from "next/link";
import Header from "../components/Header";

export default function AppointmentPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          {/* Hero Section */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              Book your eye test
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Professional eye care for all ages. Complete our simple 4-step booking process.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-primary">Step 1 of 4: Select Service</span>
              <span className="text-sm font-medium text-slate-500">25% Complete</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/4" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Section 1: Service Selection */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Choose a service</h2>
                </div>
                <div className="space-y-4">
                  <label className="group relative flex items-center gap-4 p-5 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer hover:border-primary transition-all">
                    <input defaultChecked className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="service" type="radio" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">Comprehensive Eye Test</span>
                        <span className="text-sm font-semibold text-primary">£25.00</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">A full 30-minute health check and vision test using advanced OCT technology.</p>
                    </div>
                  </label>
                  <label className="group relative flex items-center gap-4 p-5 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-primary/50 transition-all">
                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="service" type="radio" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">Contact Lens Consultation</span>
                        <span className="text-sm font-semibold text-primary">£35.00</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Specialist fitting, trials, and health check for new and existing lens wearers.</p>
                    </div>
                  </label>
                  <label className="group relative flex items-center gap-4 p-5 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-primary/50 transition-all">
                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary" name="service" type="radio" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">Frame Repair & adjustment</span>
                        <span className="text-sm font-semibold text-primary">Free</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Quick fix for loose screws, broken frames, or fit adjustments.</p>
                    </div>
                  </label>
                </div>
              </section>

              {/* Section 2: Location Selection */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Choose location</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">London City Center</h3>
                        <p className="text-xs text-slate-500">12 High Street, EC1A 1BB</p>
                      </div>
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div className="h-32 rounded-lg bg-slate-100 dark:bg-slate-800 mb-3 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB16Dd869vtJe75HtDJQ3dmEzaObneBQEYdIjJELtgCez-ANHaeaDnMwAjszeKG0exvSg7yOapzWjE8qOa9hi7PVEAtplXz7kelakWJuyYgAkKFUj8uTjRyJ2JRLWf1a2EuLgwoXJP-FsYWmUJOYlJqZDmi-TKvuaa3mI2KX1CVX6WGBueC_Up_-GxvWuFphc1PsLRJ1ZOwElMP4yIMEYCyOH1F7hjchyOgUVGxuUq-UGI_i2nFQrSE8PEWtmB705sonbNfW7hT')",
                        }}
                      />
                    </div>
                    <button className="w-full py-2 border border-primary text-primary font-semibold rounded-lg text-sm hover:bg-primary hover:text-white transition-colors">
                      Select Branch
                    </button>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 hover:shadow-md transition-shadow opacity-60">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">West End Clinic</h3>
                        <p className="text-xs text-slate-500">45 Oxford Rd, W1D 1AN</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">location_on</span>
                    </div>
                    <div className="h-32 rounded-lg bg-slate-100 dark:bg-slate-800 mb-3 overflow-hidden" />
                    <button className="w-full py-2 border border-slate-300 dark:border-slate-700 text-slate-500 font-semibold rounded-lg text-sm cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </section>

              {/* Section 3: Date & Time Picker */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pick date & time</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="flex border-b border-slate-200 dark:border-slate-800">
                    <div className="flex-1 p-6 border-r border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-slate-900 dark:text-white">October 2023</h3>
                        <div className="flex gap-2">
                          <button type="button" className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">chevron_left</span>
                          </button>
                          <button type="button" className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">chevron_right</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-4 uppercase">
                        <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        <div className="p-2 text-slate-300">28</div>
                        <div className="p-2 text-slate-300">29</div>
                        <div className="p-2 text-slate-300">30</div>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">1</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">2</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">3</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">4</button>
                        <button type="button" className="p-2 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30">12</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">13</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">14</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg">15</button>
                        <button type="button" className="p-2 hover:bg-primary/10 rounded-lg font-bold text-slate-900 dark:text-white">16</button>
                        <div className="p-2 text-slate-400">...</div>
                        <div className="p-2 text-slate-400">...</div>
                      </div>
                    </div>
                    <div className="w-1/3 p-6 bg-slate-50 dark:bg-slate-800/50">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Available Slots</h3>
                      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                        <button type="button" className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-all">09:00 AM</button>
                        <button type="button" className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-all">10:30 AM</button>
                        <button type="button" className="w-full py-2 bg-primary text-white border border-primary rounded-lg text-sm font-bold shadow-md">11:00 AM</button>
                        <button type="button" className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-all">01:30 PM</button>
                        <button type="button" className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-all">03:00 PM</button>
                        <button type="button" className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-all">04:30 PM</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Personal Details */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Enter your details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. John" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. Doe" type="text" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john.doe@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+44 7000 000000" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Birth</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" type="date" />
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar: Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event_note</span>
                  Appointment Summary
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500 font-medium">Service</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white text-right">Comprehensive Eye Test</span>
                  </div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500 font-medium">Location</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white text-right">London City Center</span>
                  </div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500 font-medium">Date & Time</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white text-right">Oct 12, 2023 at 11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white">Total</span>
                    <span className="text-xl font-black text-primary">£25.00</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Confirm Booking
                  </button>
                  <p className="text-[10px] text-center text-slate-400">By confirming, you agree to our terms of service and patient privacy policy.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-green-500 text-3xl">verified</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">NHS Certified</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-blue-500 text-3xl">lock</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Secure Data</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-symbols-outlined text-amber-500 text-3xl">star</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="text-primary opacity-50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
              </svg>
            </div>
            <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">OpticVision Health</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">Need help? Call us at 0800-OPTIC-CARE or email support@opticvision.com</p>
          <div className="flex justify-center gap-6 text-slate-400 text-sm">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <Link href="#" className="hover:text-primary">Cookie Settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
