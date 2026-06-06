'use client';

import { useState } from 'react';

const businessTypes = ['Restaurant', 'Cloud Kitchen', 'Dental Clinic', 'Other'];
const neighbourhoods = ['Koramangala', 'Indiranagar', 'Jayanagar', 'HSR Layout', 'Whitefield', 'Other'];
const callTimes = ['Morning', 'Afternoon', 'Evening'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('Timestamp', new Date().toISOString());
    formData.set('Source Page', window.location.pathname);

    try {
      if (!endpoint) {
        await new Promise((resolve) => setTimeout(resolve, 600));
      } else {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
      }
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="motion-card grid gap-4 rounded-brand bg-white p-6 shadow-card">
      <Field label="Your Name" name="Name" required />
      <Field label="Your Business Name" name="Business Name" required />
      <Select label="Business Type" name="Business Type" options={businessTypes} />
      <Select label="Your Neighbourhood in Bangalore" name="Neighbourhood" options={neighbourhoods} />
      <Field
        label="Your WhatsApp Number"
        name="WhatsApp Number"
        type="tel"
        placeholder="We will confirm your booking on WhatsApp within 2 hours"
        required
      />
      <label className="grid gap-2">
        <span className="font-heading text-sm font-medium">What is your biggest challenge right now?</span>
        <textarea
          name="Challenge Description"
          required
          rows={4}
          className="rounded-brand border border-black/10 bg-warm px-4 py-3 outline-none focus:border-saffron"
        />
      </label>
      <Select label="Preferred call time" name="Preferred Call Time" options={callTimes} />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-brand bg-saffron px-6 py-3 font-heading font-semibold text-white disabled:opacity-60"
      >
        {status === 'loading' ? 'Booking...' : 'Book My Free Call'}
      </button>
      {status === 'success' && (
        <p className="rounded-brand bg-green-50 p-4 text-sm font-medium text-green-800">
          Hi, thanks for booking a call with AgastyaOne. We will confirm your call time on WhatsApp within 2 hours.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-brand bg-red-50 p-4 text-sm font-medium text-red-800">
          Something went wrong. Please message hello@agastyaone.com and we will help you book the call.
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
  required = false
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
        className="rounded-brand border border-black/10 bg-warm px-4 py-3 outline-none focus:border-saffron"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2">
      <span className="font-heading text-sm font-medium">{label}</span>
      <select name={name} required className="rounded-brand border border-black/10 bg-warm px-4 py-3 outline-none focus:border-saffron">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
