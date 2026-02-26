"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import Header from "../components/Header";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
];

const SERVICES = [
  { id: "eye-test", name: "Comprehensive Eye Test", price: "£25.00" },
  { id: "contact-lens", name: "Contact Lens Consultation", price: "£35.00" },
  { id: "frame-repair", name: "Frame Repair & adjustment", price: "Free" },
];

function getDaysInMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const count = last.getDate();
  const firstWeekday = (first.getDay() + 6) % 7;
  return { count, firstWeekday };
}

function isPast(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cell = new Date(year, month, day);
  return cell < today;
}

function formatDateKey(year: number, month: number, day: number) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function formatDisplayDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function AppointmentPage() {
  const today = useMemo(() => new Date(), []);
  const [service, setService] = useState(SERVICES[0]);
  const [location, setLocation] = useState<"London City Center" | null>("London City Center");
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const calendar = useMemo(() => {
    const { count, firstWeekday } = getDaysInMonth(viewYear, viewMonth);
    const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
    const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
    const prevCount = new Date(viewYear, viewMonth, 0).getDate();
    const cells: { type: "prev" | "curr" | "next"; year: number; month: number; day: number }[] = [];
    for (let i = 0; i < firstWeekday; i++) {
      const day = prevCount - firstWeekday + 1 + i;
      cells.push({ type: "prev", year: prevYear, month: prevMonth, day });
    }
    for (let day = 1; day <= count; day++) {
      cells.push({ type: "curr", year: viewYear, month: viewMonth, day });
    }
    const rest = 42 - cells.length;
    for (let day = 1; day <= rest; day++) {
      cells.push({ type: "next", year: viewMonth === 11 ? viewYear + 1 : viewYear, month: viewMonth === 11 ? 0 : viewMonth + 1, day });
    }
    return cells;
  }, [viewYear, viewMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedTime) {
      setSubmitStatus("error");
      setSubmitError("Please select a date and time.");
      return;
    }
    if (!location) {
      setSubmitStatus("error");
      setSubmitError("Please select a location.");
      return;
    }
    const trim = (s: string) => s.trim();
    if (!trim(firstName) || !trim(lastName) || !trim(email) || !trim(phone)) {
      setSubmitStatus("error");
      setSubmitError("Please fill in all required details (first name, last name, email, phone).");
      return;
    }

    setSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const res = await fetch("/api/booking/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: service.name,
          servicePrice: service.price,
          location,
          date: formatDisplayDate(selectedDate),
          time: selectedTime,
          firstName: trim(firstName),
          lastName: trim(lastName),
          email: trim(email),
          phone: trim(phone),
          dateOfBirth: trim(dateOfBirth) || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitStatus("error");
        setSubmitError(data.error ?? "Booking could not be sent.");
        return;
      }

      setSubmitStatus("success");
    } catch (e) {
      setSubmitStatus("error");
      setSubmitError(e instanceof Error ? e.message : "Network error.");
    } finally {
      setSubmitting(false);
    }
  };

  const summaryDate = selectedDate && selectedTime
    ? `${formatDisplayDate(selectedDate)} at ${selectedTime}`
    : "—";

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              Book your eye test
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Professional eye care for all ages. Complete our simple 4-step booking process.
            </p>
          </div>

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
            <div className="lg:col-span-2 space-y-12">
              {/* Services */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Choose a service</h2>
                </div>
                <div className="space-y-4">
                  {SERVICES.map((s) => (
                    <label
                      key={s.id}
                      className={`group relative flex items-center gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                        service.id === s.id
                          ? "border-primary bg-primary/5"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        checked={service.id === s.id}
                        onChange={() => setService(s)}
                        className="w-5 h-5 text-primary border-slate-300 focus:ring-primary"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-slate-900 dark:text-white">{s.name}</span>
                          <span className="text-sm font-semibold text-primary">{s.price}</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {s.id === "eye-test" && "A full 30-minute health check and vision test using advanced OCT technology."}
                          {s.id === "contact-lens" && "Specialist fitting, trials, and health check for new and existing lens wearers."}
                          {s.id === "frame-repair" && "Quick fix for loose screws, broken frames, or fit adjustments."}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* Location */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Choose location</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 border rounded-xl bg-white dark:bg-slate-900 transition-shadow ${
                      location === "London City Center"
                        ? "border-primary shadow-md"
                        : "border-slate-200 dark:border-slate-800 hover:shadow-md"
                    }`}
                  >
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
                    <button
                      type="button"
                      onClick={() => setLocation("London City Center")}
                      className="w-full py-2 border border-primary text-primary font-semibold rounded-lg text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      Select Branch
                    </button>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 opacity-60">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">West End Clinic</h3>
                        <p className="text-xs text-slate-500">45 Oxford Rd, W1D 1AN</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400">location_on</span>
                    </div>
                    <div className="h-32 rounded-lg bg-slate-100 dark:bg-slate-800 mb-3 overflow-hidden" />
                    <button type="button" disabled className="w-full py-2 border border-slate-300 dark:border-slate-700 text-slate-500 font-semibold rounded-lg text-sm cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </section>

              {/* Date & Time Picker */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pick date & time</h2>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="flex border-b border-slate-200 dark:border-slate-800 flex-col sm:flex-row">
                    <div className="flex-1 p-6 border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {MONTH_NAMES[viewMonth]} {viewYear}
                        </h3>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={prevMonth}
                            className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                            aria-label="Previous month"
                          >
                            <span className="material-symbols-outlined">chevron_left</span>
                          </button>
                          <button
                            type="button"
                            onClick={nextMonth}
                            className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                            aria-label="Next month"
                          >
                            <span className="material-symbols-outlined">chevron_right</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-4 uppercase">
                        <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {calendar.map((cell, i) => {
                          const key = formatDateKey(cell.year, cell.month, cell.day);
                          const isCurr = cell.type === "curr";
                          const disabled = isCurr && isPast(cell.year, cell.month, cell.day);
                          const selected = selectedDate === key;
                          return (
                            <button
                              key={i}
                              type="button"
                              disabled={disabled}
                              onClick={() => {
                                if (disabled) return;
                                setSelectedDate(key);
                              }}
                              className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                                cell.type !== "curr"
                                  ? "text-slate-300 dark:text-slate-600 cursor-default"
                                  : disabled
                                    ? "text-slate-300 dark:text-slate-600 cursor-not-allowed"
                                    : selected
                                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                                      : "hover:bg-primary/10 text-slate-900 dark:text-white"
                              }`}
                            >
                              {cell.day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 p-6 bg-slate-50 dark:bg-slate-800/50">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Available Slots</h3>
                      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`w-full py-2 rounded-lg text-sm font-medium border transition-all ${
                              selectedTime === slot
                                ? "bg-primary text-white border-primary shadow-md"
                                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-primary"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Personal Details */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">4</div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Enter your details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="e.g. John"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="e.g. Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+44 7000 000000"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Birth</label>
                    <input
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      type="date"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event_note</span>
                  Appointment Summary
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500 font-medium">Service</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white text-right">{service.name}</span>
                  </div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500 font-medium">Location</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white text-right">{location ?? "—"}</span>
                  </div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500 font-medium">Date & Time</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white text-right">{summaryDate}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white">Total</span>
                    <span className="text-xl font-black text-primary">{service.price}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {submitStatus === "success" && (
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium text-center">
                      Booking sent successfully. We&apos;ll confirm via email.
                    </p>
                  )}
                  {submitStatus === "error" && submitError && (
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium text-center">{submitError}</p>
                  )}
                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    disabled={submitting}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? "Sending…" : "Confirm Booking"}
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

      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="text-primary opacity-50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
              </svg>
            </div>
            <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Kemold Opticals</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">Need help? Call us at +234 (0) 70 3132 2989 or email support@opticvision.com</p>
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
