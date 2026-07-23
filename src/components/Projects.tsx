


import React from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  stack: string[];
  image: string;
  demo: string;
  github: string;
}

const PROJECTS: Project[] = [
{
  name: 'ApplyPilot AI',
  description:
  'An AI-powered job application assistant that analyzes resumes, tailors applications, and tracks progress in real time.',
  stack: ['React', 'Python', 'OpenAI API', 'PostgreSQL'],
  image: "/9b1e319a-1015-4b3a-bdec-0dc0f34e04d8.jpg",

  demo: '#',
  github: '#'
},
{
  name: 'Glomus Global Services',
  description:
  'A corporate website and services platform for a global business consultancy, focused on clarity and conversion.',
  stack: ['ASP.NET Core', 'C#', 'SQL Server', 'Bootstrap'],
  image: "/40c465a6-41f1-4807-a730-bdef4f54fe6f.jpg",

  demo: '#',
  github: '#'
},
{
  name: 'AgriConnect Africa',
  description:
  'A marketplace connecting farmers and buyers with listings, logistics, and a dual-sided dashboard.',
  stack: ['Django', 'React', 'PostgreSQL', 'REST APIs'],
  image: "/7c31f2c5-a1d4-41ec-a8bc-4d143b69a1cc.jpg",

  demo: '#',
  github: '#'
},
{
  name: 'Enterprise Inventory Management System',
  description:
  'A scalable inventory platform with multi-warehouse tracking, role-based access, and analytics.',
  stack: ['ASP.NET Core', 'C#', 'SQL Server', 'Azure'],
  image: "/506dd158-48d6-4eef-9bcc-421f1472949e.jpg",

  demo: '#',
  github: '#'
},
{
  name: 'AI Customer Support Platform',
  description:
  'An AI-assisted support desk with live chat, ticket routing, a knowledge base, and agent analytics.',
  stack: ['React', 'Python', 'OpenAI API', 'Docker'],
  image: "/9d9d5a7b-e108-49a8-bd77-e5117df31674.jpg",

  demo: '#',
  github: '#'
},
{
  name: 'Corporate Business Website',
  description:
  'A modern, editorial corporate site with a bold hero, feature sections, and a fast, responsive layout.',
  stack: ['React', 'TypeScript', 'REST APIs', 'Azure'],
  image: "/952c6a9e-67e2-4d01-9834-822d27b77a67.jpg",

  demo: '#',
  github: '#'
}];


export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work across web, enterprise, and AI."
      intro="A look at products I've designed and engineered end to end.">
      
      <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2">
        {PROJECTS.map((p, i) =>
        <Reveal
          key={p.name}
          delay={i % 2 * 0.1}
          as="article"
          className="flex flex-col">
          
            <div className="overflow-hidden border border-[#dddddd]">
              <img
              src={p.image}
              alt={`${p.name} project screenshot`}
              className="h-full w-full object-cover grayscale transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy" />
            
            </div>

            <h3 className="mt-7 text-2xl font-bold tracking-tight text-black">
              {p.name}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#555555]">
              {p.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((t) =>
            <li
              key={t}
              className="border border-[#dddddd] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#555555]">
              
                  {t}
                </li>
            )}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
              href={p.demo}
              className="inline-flex items-center gap-2 border border-black bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black">
              
                <ExternalLinkIcon size={15} />
                Live Demo
              </a>
              <a
              href={p.github}
              className="inline-flex items-center gap-2 border border-[#dddddd] bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:border-black">
              
                <GithubIcon size={15} />
                GitHub
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}