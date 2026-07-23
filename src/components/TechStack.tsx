


import React from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';

const TECH = [
'ASP.NET Core',
'C#',
'React',
'JavaScript',
'TypeScript',
'Python',
'Django',
'SQL Server',
'PostgreSQL',
'Bootstrap',
'Git',
'GitHub',
'Docker',
'Azure',
'OpenAI API',
'REST APIs'];


export function TechStack() {
  return (
    <Section
      id="tech"
      eyebrow="Tech Stack"
      title="Tools I use to ship reliable software.">
      
      <div className="grid grid-cols-2 border-l border-t border-[#dddddd] sm:grid-cols-3 md:grid-cols-4">
        {TECH.map((t, i) =>
        <Reveal
          key={t}
          delay={i % 4 * 0.04}
          className="flex items-center justify-center border-b border-r border-[#dddddd] px-4 py-10 text-center text-base font-semibold text-black transition-colors hover:bg-black hover:text-white">
          
            {t}
          </Reveal>
        )}
      </div>
    </Section>);

}