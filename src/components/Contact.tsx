




import React, { useState } from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ArrowRightIcon, CalendarIcon, CheckIcon } from 'lucide-react';

const BUDGETS = [
'Select a range',
'$300 – $700',
'$700 – $1,500',
'$1,500 – $5,000',
'$5,000+'];


export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="bg-black">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#bbbbbb]">
            Contact
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">
            Let&rsquo;s Build Something Exceptional.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#bbbbbb]">
            Tell me about your project and I&rsquo;ll get back to you within 24 hours
            with next steps. Prefer to talk it through? Schedule a consultation.
          </p>

          <dl className="mt-12 space-y-6 border-t border-[#333333] pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777777]">
                Email
              </dt>
              <dd className="mt-1 text-base text-white">ngeorge935@yahoo.com</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777777]">
                Availability
              </dt>
              <dd className="mt-1 text-base text-white">
                Open for new projects and consulting opportunities.
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ?
          <div className="flex h-full flex-col items-start justify-center border border-[#333333] bg-[#0a0a0a] p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white">
                <CheckIcon size={22} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message sent.</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-[#bbbbbb]">
                Thanks for reaching out. I&rsquo;ll review your project and reply
                within 24 hours.
              </p>
            </div> :

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full border border-[#333333] bg-transparent px-4 py-3 text-white placeholder-[#777777] outline-none transition-colors focus:border-white"
                  placeholder="Jane Doe" />
                
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border border-[#333333] bg-transparent px-4 py-3 text-white placeholder-[#777777] outline-none transition-colors focus:border-white"
                  placeholder="jane@company.com" />
                
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Company" htmlFor="company">
                  <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full border border-[#333333] bg-transparent px-4 py-3 text-white placeholder-[#777777] outline-none transition-colors focus:border-white"
                  placeholder="Company Inc. Optional" />
                
                </Field>
                <Field label="Budget" htmlFor="budget">
                  <select
                  id="budget"
                  name="budget"
                  defaultValue="Select a range"
                  className="w-full appearance-none border border-[#333333] bg-transparent px-4 py-3 text-white outline-none transition-colors focus:border-white">
                  
                    {BUDGETS.map((b) =>
                  <option key={b} value={b} className="bg-black text-white">
                        {b}
                      </option>
                  )}
                  </select>
                </Field>
              </div>

              <Field label="Project Description" htmlFor="description">
                <textarea
                id="description"
                name="description"
                required
                rows={5}
                className="w-full resize-none border border-[#333333] bg-transparent px-4 py-3 text-white placeholder-[#777777] outline-none transition-colors focus:border-white"
                placeholder="Tell me about your goals, scope, and timeline…" />
              
              </Field>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 border border-white bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white">
                
                  Send Message
                  <ArrowRightIcon
                  size={16}
                  className="transition-transform group-hover:translate-x-1" />
                
                </button>
                <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-[#333333] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white">
                
                  <CalendarIcon size={16} />
                  Schedule a Consultation
                </a>
              </div>
            </form>
          }
        </Reveal>
      </div>
    </Section>);

}

function Field({
  label,
  htmlFor,
  children




}: {label: string;htmlFor: string;children: React.ReactNode;}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#bbbbbb]">
        
        {label}
      </label>
      {children}
    </div>);

}