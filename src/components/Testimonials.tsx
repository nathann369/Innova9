


import { Section } from './Section';
import { Reveal } from './Reveal';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
{
  quote:
  'Nathan delivered our enterprise platform ahead of schedule and the architecture has scaled flawlessly. Rare to find an engineer who thinks about the business, not just the code.',
  name: 'Silva Blessing',
  role: 'Director and CEO, Glomus Global Services'
},
{
  quote:
  'The AI automation he built saved our support team dozens of hours every week. Clean, reliable, and thoughtfully designed from end to end.',
  name: 'Valentine Courage',
  role: 'Founder, Havilah Fussion'
},
{
  quote:
  'Professional, communicative, and genuinely skilled. Our dashboard finally makes our data usable. I recommend Nathan without hesitation.',
  name: 'Grace Adeyemi',
  role: 'Product Lead, AgriConnect Africa'
}];


export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Trusted by teams who ship.">
      
      <div className="grid grid-cols-1 gap-0 border-l border-t border-[#dddddd] md:grid-cols-3">
        {TESTIMONIALS.map((t, i) =>
        <Reveal
          key={t.name}
          delay={i * 0.08}
          as="article"
          className="flex flex-col justify-between border-b border-r border-[#dddddd] p-10">
          
            <blockquote className="text-lg leading-relaxed text-black">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-8 border-t border-[#dddddd] pt-6">
              <p className="text-sm font-bold text-black">{t.name}</p>
              <p className="mt-1 text-sm text-[#555555]">{t.role}</p>
            </footer>
          </Reveal>
        )}
      </div>
    </Section>);

}