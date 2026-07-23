import React from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared editorial section shell: generous vertical rhythm, thin top divider,
 * consistent max-width and header treatment.
 */
export function Section({ id, eyebrow, title, intro, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full border-t border-[#dddddd] scroll-mt-20 ${className}`}>
      
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {(eyebrow || title) &&
        <header className="mb-16 max-w-3xl">
            {eyebrow &&
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#555555]">
                {eyebrow}
              </p>
          }
            {title &&
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-black md:text-5xl">
                {title}
              </h2>
          }
            {intro &&
          <p className="mt-6 text-lg leading-relaxed text-[#555555]">{intro}</p>
          }
          </header>
        }
        {children}
      </div>
    </section>);

}