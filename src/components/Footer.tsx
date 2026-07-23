
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const NAV = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Services', href: '#services' },
{ label: 'Projects', href: '#projects' },
{ label: 'Pricing', href: '#pricing' },
{ label: 'Contact', href: '#contact' }];


const SOCIAL = [
{ label: 'GitHub', href: 'https://github.com/nathann369', Icon: GithubIcon },
{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathan-george-23a4611a2', Icon: LinkedinIcon },
{ label: 'Email', href: 'mailto:ngeorge935@yahoo.com', Icon: MailIcon }];


export function Footer() {
  return (
    <footer className="w-full border-t border-[#dddddd] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black">
              George Nathan
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              Full Stack Software Engineer, AI Developer, and Business Automation
              Consultant building software that solves real business problems.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {NAV.map((l) =>
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#555555] transition-colors hover:text-black">
              
                {l.label}
              </a>
            )}
          </nav>

          <div className="flex flex-col gap-4">
            {SOCIAL.map(({ label, href, Icon }) =>
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-3 text-sm font-medium text-[#555555] transition-colors hover:text-black">
              
                <Icon size={18} />
                {label}
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#dddddd] pt-8 text-sm text-[#555555] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} George Nathan. All rights reserved.</p>
          <p>Building software that solves real business problems.</p>
        </div>
      </div>
    </footer>);

}