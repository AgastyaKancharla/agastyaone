'use client';

import { useState } from 'react';

const businessTypes = ['Dental Clinic', 'Multi-Chair Clinic', 'New Clinic (Opening Soon)', 'Other'];

const services = [
  'Website Development',
  'CRM Software',
  'SEO Services',
  'WhatsApp Automation',
  'Appointment Software',
  'Practice Automation',
  'Not Sure — Need Advice',
];

const timeSlots = [
  '9:00 AM – 10:00 AM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '6:00 PM – 7:00 PM',
];

// Get next 5 weekdays from today
function getAvailableDates(): { label: string; value: string }[] {
  const dates: { label: string; value: string }[] = [];
  const now = new Date();
  let d = new Date(now);
  // Start from tomorrow
  d.setDate(d.getDate() + 1);

  while (dates.length < 5) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      const label = d.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
      const value = d.toISOString().split('T')[0];
      dates.push({ label, value });
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const availableDates = getAvailableDates();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('Timestamp', new Date().toISOString());
    formData.set('Source Page', window.location.pathname);
    formData.set('Preferred Date', selectedDate);
    formData.set('Preferred Time', selectedSlot);
    formData.set('Service Interest', selectedService);

    try {
      if (!endpoint) {
        await new Promise((resolve) => setTimeout(resolve, 600));
      } else {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });
      }
      form.reset();
      setSelectedDate('');
      setSelectedSlot('');
      setSelectedService('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="motion-card rounded-brand bg-white p-8 shadow-card text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>
        <h3 className="font-heading text-xl font-bold text-[#1A1A2E]">You're booked in!</h3>
        <p className="mt-3 leading-7 text-gray-600">
          We will WhatsApp you at your number within 2 hours to confirm your call on{' '}
          <strong>{selectedDate}</strong> between <strong>{selectedSlot}</strong>.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Can't wait?{' '}
          <a
            href={`https://wa.me/918328443057?text=${encodeURIComponent('Hi Agastya, I just booked a call on your website. Looking forward to speaking!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#25D366] underline"
          >
            Message us on WhatsApp now →
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="motion-card grid gap-5 rounded-brand bg-white p-6 shadow-card">

      {/* Name + WhatsApp side by side on desktop */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" name="Name" placeholder="Dr. Ramesh or Dr. Priya" required />
        <Field
          label="WhatsApp Number"
          name="WhatsApp Number"
          type="tel"
          placeholder="+91 98765 43210"
          required
        />
      </div>

      {/* Clinic name */}
      <Field label="Clinic Name" name="Clinic Name" placeholder="e.g. Smile Dental Clinic, Koramangala" />

      {/* Business type */}
      <Select label="Clinic Type" name="Business Type" options={businessTypes} />

      {/* Service interest */}
      <div className="grid gap-2">
        <span className="font-heading text-sm font-medium">What are you most interested in?</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {services.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setSelectedService(s)}
              className={`rounded-xl border px-3 py-2 text-left text-xs font-medium transition ${
                selectedService === s
                  ? 'border-[#E86C2F] bg-orange-50 text-[#E86C2F]'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Date picker */}
      <div className="grid gap-2">
        <span className="font-heading text-sm font-medium">Preferred Call Date</span>
        <div className="flex flex-wrap gap-2">
          {availableDates.map((d) => (
            <button
              type="button"
              key={d.value}
              onClick={() => setSelectedDate(d.label)}
              className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                selectedDate === d.label
                  ? 'border-[#E86C2F] bg-orange-50 text-[#E86C2F]'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Time slot picker */}
      <div className="grid gap-2">
        <span className="font-heading text-sm font-medium">Preferred Time Slot</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`rounded-xl border px-3 py-2 text-center text-xs font-medium transition ${
                selectedSlot === slot
                  ? 'border-[#E86C2F] bg-orange-50 text-[#E86C2F]'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Optional message */}
      <div className="grid gap-2">
        <span className="font-heading text-sm font-medium">
          Anything you'd like us to know? <span className="font-normal text-gray-400">(optional)</span>
        </span>
        <textarea
          name="Message"
          rows={3}
          placeholder="e.g. We have 3 chairs, currently 0 reviews on Google, want more walk-ins..."
          className="rounded-brand border border-black/10 bg-[#F8F6F3] px-4 py-3 text-sm outline-none focus:border-[#E86C2F] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-brand bg-[#E86C2F] px-6 py-3.5 font-heading font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60"
      >
        {status === 'loading' ? 'Booking your call...' : 'Book My Free Call →'}
      </button>

      <p className="text-center text-xs text-gray-400">
        We confirm on WhatsApp within 2 hours ·{' '}
        <a href="tel:+918328443057" className="text-[#E86C2F] hover:underline">
          Or call us directly
        </a>
      </p>

      {status === 'error' && (
        <p className="rounded-brand bg-red-50 p-4 text-sm font-medium text-red-800">
          Something went wrong. WhatsApp us directly at{' '}
          <a href="https://wa.me/918328443057" className="underline">
            +91 83284 43057
          </a>{' '}
          and we will book your call.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-heading text-sm font-medium">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-brand border border-black/10 bg-[#F8F6F3] px-4 py-3 text-sm outline-none focus:border-[#E86C2F]"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="font-heading text-sm font-medium">{label}</span>
      <select
        name={name}
        required
        className="rounded-brand border border-black/10 bg-[#F8F6F3] px-4 py-3 text-sm outline-none focus:border-[#E86C2F]"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
