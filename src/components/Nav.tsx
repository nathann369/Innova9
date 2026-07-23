
import  { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const LINKS = [
{ label: 'Home', href: '#home' },
{ label: ' Services', href: '#services' },
{ label: 'About', href: '#about' },
{ label: 'Projects', href: '#projects' },
{ label: 'Pricing', href: '#pricing' },
{ label: 'Contact', href: '#contact' }];


export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full bg-white transition-shadow ${
      scrolled ? 'border-b border-[#dddddd]' : 'border-b border-transparent'}`
      }>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        
        <a
          href="#home"
          className="text-sm font-bold uppercase tracking-[0.2em] text-black">
          
           [INNOVA-9]
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) =>
          <li key={l.href}>
              <a
              href={l.href}
              className="text-sm font-medium text-[#555555] transition-colors hover:text-black">
              
                {l.label}
              </a>
            </li>
          )}
        </ul>

        <a
          href="#contact"
          className="hidden border border-black bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black md:inline-block">
          
          Start a Project
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-black md:hidden">
          
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {open &&
      <div className="border-t border-[#dddddd] bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {LINKS.map((l) =>
          <li key={l.href}>
                <a
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#eeeeee] py-4 text-base font-medium text-black">
              
                  {l.label}
                </a>
              </li>
          )}
            <li>
              <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block bg-black px-5 py-3 text-center text-base font-semibold text-white">
              
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      }
    </header>);

}