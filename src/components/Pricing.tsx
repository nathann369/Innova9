



import React from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { CheckIcon } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const TIERS: Tier[] = [
{
  name: 'Starter',
  price: '$500',
  note: 'For a polished business or marketing website.',
  features: [
  'Business Website',
  'Responsive Design',
  'Contact Form',
  '5 Pages',
  'Basic SEO'],

  cta: 'Get Started'
},
{
  name: 'Professional',
  price: '$1,200',
  note: 'For applications with data and user accounts.',
  features: [
  'Everything in Starter',
  'Admin Dashboard',
  'Database',
  'Authentication',
  'API Integration'],

  featured: true,
  cta: 'Choose Professional'
},
{
  name: 'Enterprise',
  price: 'Custom Quote',
  note: 'For AI-powered, automated, large-scale systems.',
  features: [
  'AI Features',
  'Automation',
  'Unlimited Pages',
  'Training',
  'Cloud Deployment'],

  cta: 'Request a Quote'
}];


export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Straightforward pricing for every stage."
      intro="Transparent packages designed to scale with your needs. Every project starts with a conversation.">
      
      <div className="grid grid-cols-1 gap-0 border border-[#dddddd] lg:grid-cols-3 lg:divide-x lg:divide-[#dddddd]">
        {TIERS.map((t, i) =>
        <Reveal
          key={t.name}
          delay={i * 0.08}
          className={`flex flex-col p-10 ${
          t.featured ? 'bg-black text-white' : 'bg-white text-black'} ${
          i < TIERS.length - 1 ? 'border-b border-[#dddddd] lg:border-b-0' : ''}`}>
          
            <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            t.featured ? 'text-[#bbbbbb]' : 'text-[#555555]'}`
            }>
            
              {t.name}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight">
                {t.price}
              </span>
            </div>

            <p
            className={`mt-4 text-sm leading-relaxed ${
            t.featured ? 'text-[#bbbbbb]' : 'text-[#555555]'}`
            }>
            
              {t.note}
            </p>

            <ul className="mt-8 flex flex-1 flex-col gap-4">
              {t.features.map((f) =>
            <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckIcon
                size={16}
                className={`mt-0.5 shrink-0 ${
                t.featured ? 'text-white' : 'text-black'}`
                } />
              
                  <span className={t.featured ? 'text-white' : 'text-black'}>
                    {f}
                  </span>
                </li>
            )}
            </ul>

            <a
            href="#contact"
            className={`mt-10 inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold transition-colors ${
            t.featured ?
            'border border-white bg-white text-black hover:bg-black hover:text-white' :
            'border border-black bg-black text-white hover:bg-white hover:text-black'}`
            }>
            
              {t.cta}
            </a>
          </Reveal>
        )}
      </div>
    </Section>);

}