




import React, { useState } from 'react';
import { Section } from './Section';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
{
  q: 'What is your typical project timeline?',
  a: 'Most websites take 1–3 weeks, while enterprise applications and AI systems typically range from 4–10 weeks depending on scope. I share a clear timeline and milestones before we begin.'
},
{
  q: 'How do payments work?',
  a: 'I usually work with a 50% deposit to start and the remaining balance on delivery. Larger projects can be split into milestone-based payments. I support Stripe, PayPal, and bank transfers.'
},
{
  q: 'Do you offer ongoing maintenance?',
  a: 'Yes. I offer monthly maintenance starting at $100/month covering updates, monitoring, backups, and support, so your product stays secure and performant.'
},
{
  q: 'Can you work with my existing codebase?',
  a: 'Absolutely. I regularly join existing projects to add features, fix bugs, refactor, or improve architecture — including ASP.NET Core, React, Python/Django, and REST API systems.'
},
{
  q: 'Which technologies do you specialize in?',
  a: 'My core stack includes ASP.NET Core, C#, React, TypeScript, Python, and Django, along with SQL Server, PostgreSQL, Docker, Azure, and the OpenAI API for AI-powered features.'
},
{
  q: 'How do we get started?',
  a: 'Send me a message through the contact form or schedule a consultation. We\u2019ll discuss your goals, scope, and budget, then I\u2019ll prepare a clear proposal.'
}];


function FaqRow({ item, index }: {item: QA;index: number;}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#dddddd]">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-6 py-7 text-left">
          
          <span className="text-lg font-semibold text-black md:text-xl">
            {item.q}
          </span>
          <span className="shrink-0 text-black" aria-hidden="true">
            {open ? <MinusIcon size={22} /> : <PlusIcon size={22} />}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden">
          
            <p className="max-w-2xl pb-8 text-base leading-relaxed text-[#555555]">
              {item.a}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}

export function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Answers to common questions.">
      <div className="border-t border-[#dddddd]">
        {FAQS.map((item, i) =>
        <FaqRow key={item.q} item={item} index={i} />
        )}
      </div>
    </Section>);

}