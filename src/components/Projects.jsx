import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, BarChart3, FileSearch, Bot, Rocket, Lock, CheckCircle2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { PROJECTS, PROFILE } from '../data/portfolio';
import TiltCard from './fx/TiltCard';

const COVERS = {
  ml: { Icon: BarChart3, className: 'bg-brand-600 text-white', tag: 'ml.classification' },
  rag: { Icon: FileSearch, className: 'bg-flame-500 text-white', tag: 'retrieve → generate' },
  agent: { Icon: Bot, className: 'bg-ink text-white', tag: 'agent.tools' },
  product: { Icon: Rocket, className: 'bg-brand-100 text-ink', tag: 'ship.prod' },
};

const FILTERS = ['all', 'ml', 'rag', 'agent', 'product'];

const BUBBLE = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const ProjectLinks = ({ project, t, dark = false }) => (
  <div className="flex flex-wrap items-center gap-2">
    {project.live && (
      <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary !px-3.5 !py-2 !text-sm">
        {t('projects.live')}
        <ArrowUpRight size={16} />
      </a>
    )}
    {project.code && (
      <a
        href={project.code}
        target="_blank"
        rel="noreferrer"
        className={`btn !px-3.5 !py-2 !text-sm border-2 ${
          dark ? 'border-white/30 text-white hover:bg-white/10' : 'border-ink/15 text-ink hover:border-ink'
        }`}
      >
        <Github size={16} />
        {t('projects.code')}
      </a>
    )}
    {!project.live && !project.code && (
      <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
        <Lock size={14} />
        {t('projects.private')}
      </span>
    )}
  </div>
);

const FeaturedProject = ({ project, t }) => {
  const item = t(`projects.items.${project.id}`, { returnObjects: true });
  return (
    <article className="card-hard grid overflow-hidden lg:grid-cols-12">
      <div className="p-6 sm:p-10 lg:col-span-7">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="chip-flame">{t('projects.featured')}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">{item.kind}</span>
        </div>
        <h3 className="text-4xl font-bold text-ink sm:text-5xl">{item.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">{item.desc}</p>
        <ul className="mt-6 space-y-3">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-slate-700">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="chip-neutral">{s}</span>
          ))}
        </div>
        <div className="mt-8">
          <ProjectLinks project={project} t={t} />
        </div>
      </div>

      <div className="relative flex items-center justify-center border-t-2 border-ink bg-ink p-6 sm:p-10 lg:col-span-5 lg:border-l-2 lg:border-t-0" aria-hidden="true">
        <div className="dot-grid absolute inset-0 opacity-30 [filter:invert(1)]" />
        <motion.div
          className="relative w-full max-w-sm space-y-3 font-sans text-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ show: { transition: { staggerChildren: 0.6, delayChildren: 0.3 } } }}
        >
          <motion.div variants={BUBBLE} className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-brand-600 px-4 py-2.5 text-white">
            2 poulets braisés + 1 jus de bissap, livraison à Bè
          </motion.div>
          <motion.div variants={BUBBLE} className="w-fit max-w-[90%] rounded-xl rounded-bl-sm bg-white px-4 py-3 text-ink">
            <p className="mb-2 font-medium">Récapitulatif de la commande</p>
            <div className="space-y-1 font-mono text-xs text-slate-600">
              <div className="flex justify-between gap-6"><span>2 × Poulet braisé</span><span>7 000</span></div>
              <div className="flex justify-between gap-6"><span>1 × Jus de bissap</span><span>500</span></div>
              <div className="flex justify-between gap-6 border-t border-slate-200 pt-1 font-medium text-ink"><span>Total FCFA</span><span>7 500</span></div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Je confirme et j'envoie au restaurant ?</p>
          </motion.div>
          <motion.div variants={BUBBLE} className="ml-auto w-fit rounded-xl rounded-br-sm bg-brand-600 px-4 py-2.5 text-white">
            Oui, je confirme
          </motion.div>
          <motion.div variants={BUBBLE} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-flame-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            tool_call · create_order → dashboard
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
};

// Small looping motif per category, drawn in the project cover.
const CoverArt = ({ category }) => {
  if (category === 'ml') {
    return (
      <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
        {[0.5, 0.8, 0.45, 1, 0.7, 0.9, 0.6].map((hgt, i) => (
          <span
            key={i}
            style={{ height: `${hgt * 100}%`, animationDelay: `${i * 0.15}s` }}
            className="w-2.5 origin-bottom animate-bar rounded-sm bg-white/70"
          />
        ))}
      </div>
    );
  }
  if (category === 'rag') {
    return (
      <div className="relative h-20 w-16 overflow-hidden rounded-md border-2 border-white/80 bg-white/15 p-2" aria-hidden="true">
        {[100, 80, 92, 64, 86, 70].map((wd, i) => (
          <span key={i} style={{ width: `${wd}%` }} className="mb-1.5 block h-1 rounded-full bg-white/70" />
        ))}
        <span className="absolute inset-x-0 top-0 h-4 animate-sweep bg-white/45" />
      </div>
    );
  }
  return (
    <div className="w-32 space-y-1.5 rounded-md border border-white/25 bg-white/10 p-2 font-mono text-[9px] leading-none text-white/80" aria-hidden="true">
      <p>&gt; plan()</p>
      <p>&gt; tool_call <span className="text-flame-200">✓</span></p>
      <p>
        &gt; confirm<span className="ml-0.5 inline-block h-2 w-1 animate-pulse bg-white/80 align-middle" />
      </p>
    </div>
  );
};

const ProjectCard = ({ project, t }) => {
  const item = t(`projects.items.${project.id}`, { returnObjects: true });
  const cover = COVERS[project.category];
  const { Icon } = cover;

  return (
    <TiltCard>
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink bg-white transition-shadow duration-200 hover:shadow-hard-lg">
      <div className="relative h-44 overflow-hidden border-b-2 border-ink">
        {project.image ? (
          <img
            src={project.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`relative flex h-full flex-col justify-between p-5 ${cover.className}`}>
            <div className="dot-grid absolute inset-0 opacity-20 [filter:invert(1)]" aria-hidden="true" />
            <span className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-80">
              <Icon size={14} />
              {cover.tag}
            </span>
            <div className="relative flex items-end justify-between gap-3">
              <span className="font-display text-3xl font-bold leading-none tracking-tight">
                {t(`projects.filters.${project.category}`)}
              </span>
              <CoverArt category={project.category} />
            </div>
          </div>
        )}
        {project.wip && (
          <span className="absolute right-3 top-3 rounded-full border-2 border-ink bg-white px-2.5 py-0.5 font-mono text-[11px] font-medium text-ink">
            {t('projects.wip')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-brand-700">{item.kind}</p>
        <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <ProjectLinks project={project} t={t} />
        </div>
      </div>
    </article>
    </TiltCard>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const featured = PROJECTS.find((p) => p.featured);
  const showFeatured = filter === 'all' || filter === featured.category;
  const others = useMemo(
    () => PROJECTS.filter((p) => !p.featured && (filter === 'all' || p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section bg-white">
      <div className="container-page">
        <SectionHeading label={t('projects.label')} title={t('projects.title')} subtitle={t('projects.subtitle')}>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            <Github size={18} />
            {t('projects.all_github')}
            <ArrowUpRight size={16} />
          </a>
        </SectionHeading>

        <Reveal className="-mx-4 mb-10 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div role="tablist" aria-label={t('projects.title')} className="flex w-max gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === f ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink hover:border-ink'
                }`}
              >
                {t(`projects.filters.${f}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-8">
          <AnimatePresence initial={false}>
            {showFeatured && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FeaturedProject project={featured} t={t} />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {others.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} t={t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
