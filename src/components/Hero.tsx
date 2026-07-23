
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

const HERO_IMG = "/2de3d8c9-3b57-4a22-a8d5-55a7bd071e11.jpg";

const CONTACT_DETAILS = [
  { label: 'Whatsapp', value: '+(234)7076193764', href: 'tel:+(234)7076193764' },
  { label: 'Email', value: 'ngeroge935@yahoo.com', href: 'mailto:hello@nathangeorge.dev' },
  { label: 'Instagram', value: '@', href: 'https://www.instagram.com/' },
  { label: 'X', value: '@', href: 'https://x.com/' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nathan-george-23a4611a2', href: 'https://www.linkedin.com/' }
];

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="home"
      className="w-full scroll-mt-20 pt-28 md:pt-36">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 md:grid-cols-2 md:gap-12 md:px-10 md:pb-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#555555]">
            
            Full Stack Engineer · Cyber Security · AI Developer and Automation · Consultant
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-extrabold leading-[1.02] tracking-tight text-black md:text-6xl lg:text-7xl">
            
            Building Systems That Solves Real Business Problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[#555555]">
            
            We help individual, startups, businesses, and organizations build modern websites,
            enterprise software, AI-powered applications, automation systems, and
            scalable digital products. We also provide Training and workshops for teams and individuals to help them improve their skills and knowledge in software development, AI, and automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row">
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 border border-black bg-black px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black">
              
              Start a Project Now
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1" />
              
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsContactOpen((open) => !open)}
                className="inline-flex w-full items-center justify-center border border-[#dddddd] bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:border-black sm:w-auto">
                
                Book a Call Today
              </button>

              {isContactOpen && (
                <div className="absolute left-0 top-full z-20 mt-3 w-72 rounded-2xl border border-[#dddddd] bg-white p-4 shadow-xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#555555]">
                    Reach me directly
                  </p>
                  <ul className="space-y-2">
                    {CONTACT_DETAILS.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between rounded-lg border border-[#f0f0f0] px-3 py-2 text-sm transition-colors hover:border-black hover:bg-black hover:text-white">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-right text-xs opacity-80">{item.value}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="border border-[#dddddd]">
          
          <img
            src={HERO_IMG}
            alt="Monochrome illustration of a developer workspace with code, dashboards, AI neural networks, and cloud infrastructure"
            className="h-full w-full object-cover"
            loading="eager" />
          
        </motion.div>
      </div>
    </section>);

}