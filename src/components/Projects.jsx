import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, Lock, BarChart3, FileSearch, Bot, Rocket } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import { PROJECTS, PROFILE } from '../data/portfolio';

const FEATURED = ['oren', 'arcep', 'churn', 'credit', 'pulse'];
const CATEGORY_ICON = { ml: BarChart3, rag: FileSearch, agent: Bot, product: Rocket };
const PANEL = 'overflow-hidden rounded-[32px] sm:rounded-[40px] md:rounded-[48px]';

/* ---------- visuals for the tall right-hand panel ---------- */

const ChatVisual = ({ lines, tag }) => (
  <div className="flex h-full flex-col justify-end gap-3 bg-[#111] p-6 text-sm sm:p-8 sm:text-base">
    <span className="mb-auto font-mono text-[11px] uppercase tracking-widest text-mist/40">{tag}</span>
    {lines.map(([who, text], i) => (
      <motion.p
        key={i}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + i * 0.35 }}
        className={
          who === 'user'
            ? 'ml-auto max-w-[80%] rounded-3xl rounded-br-md bg-mist/10 px-4 py-2.5 font-light text-mist'
            : who === 'tool'
              ? 'font-mono text-[11px] uppercase tracking-widest text-[#ff9b5c]'
              : 'max-w-[88%] rounded-3xl rounded-bl-md bg-gradient-to-br from-grape to-magenta px-4 py-2.5 font-light text-white'
        }
      >
        {text}
      </motion.p>
    ))}
  </div>
);

const BarsVisual = ({ tag, bars }) => (
  <div className="flex h-full flex-col bg-[#111] p-6 sm:p-8">
    <span className="mb-6 font-mono text-[11px] uppercase tracking-widest text-mist/40">{tag}</span>
    <div className="my-auto space-y-4">
      {bars.map(([name, w], i) => (
        <div key={name}>
          <p className="mb-1.5 font-mono text-xs text-mist/60">{name}</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${w}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-3 rounded-full bg-gradient-to-r from-grape via-magenta to-ember"
          />
        </div>
      ))}
    </div>
  </div>
);

const ShapVisual = ({ tag }) => {
  const rows = ['EXT_SOURCE_3', 'EXT_SOURCE_2', 'DAYS_BIRTH', 'AMT_CREDIT', 'bureau_agg'];
  return (
    <div className="flex h-full flex-col bg-[#111] p-6 sm:p-8">
      <span className="mb-6 font-mono text-[11px] uppercase tracking-widest text-mist/40">{tag}</span>
      <svg viewBox="0 0 400 260" className="my-auto w-full">
        <line x1="200" y1="0" x2="200" y2="260" stroke="rgba(215,226,234,0.2)" />
        {rows.map((r, ri) => (
          <g key={r}>
            <text x="0" y={ri * 52 + 30} fill="rgba(215,226,234,0.55)" fontSize="11" fontFamily="JetBrains Mono, monospace">{r}</text>
            {Array.from({ length: 22 }, (_, i) => {
              const spread = 150 - ri * 22;
              const x = 200 + Math.sin(i * 2.3 + ri) * spread * ((i % 5) / 5 + 0.2);
              const y = ri * 52 + 42 + Math.cos(i * 1.7) * 6;
              return <circle key={i} cx={x} cy={y} r="3.4" fill={x > 200 ? '#B600A8' : '#BE4C00'} opacity="0.85" />;
            })}
          </g>
        ))}
      </svg>
    </div>
  );
};

const ImageVisual = ({ src, alt }) => <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />;

const VISUALS = {
  oren: () => (
    <ChatVisual
      tag="oren · web channel"
      lines={[
        ['user', '2 poulets braisés + 1 jus de bissap, livraison à Bè'],
        ['bot', 'Récapitulatif : 2 × poulet braisé, 1 × bissap. Je confirme et j’envoie au restaurant ?'],
        ['user', 'Oui, je confirme'],
        ['tool', '✓ tool_call · create_order → dashboard'],
      ]}
    />
  ),
  arcep: () => (
    <ChatVisual
      tag="rag · source-grounded"
      lines={[
        ['user', 'Quelles obligations de couverture pour un opérateur mobile ?'],
        ['tool', 'retrieve · k=4 → rerank → 3 passages'],
        ['bot', 'D’après les textes [1] et le cahier des charges [2], l’opérateur doit… [3]'],
      ]}
    />
  ),
  churn: () => (
    <BarsVisual
      tag="feature selection · telco churn"
      bars={[
        ['Contract', 100],
        ['tenure', 86],
        ['MonthlyCharges', 72],
        ['AvgChargePerService', 64],
        ['NumServicesSubscribed', 52],
      ]}
    />
  ),
  credit: () => <ShapVisual tag="shap · beeswarm (illustration)" />,
  pulse: () => <ImageVisual src="/projects/pulseai.jpg" alt="Pulse AI" />,
};

/* ---------- card pieces ---------- */

const Links = ({ project, t, light = false }) => (
  <div className="flex flex-wrap gap-3">
    {project.live && (
      <a href={project.live} target="_blank" rel="noreferrer" className={light ? 'btn-ghost-light' : 'btn-ghost-dark'}>
        {t('projects.live')}
        <ArrowUpRight size={16} />
      </a>
    )}
    {project.code && (
      <a href={project.code} target="_blank" rel="noreferrer" className={light ? 'btn-ghost-light' : 'btn-ghost-dark'}>
        <Github size={16} />
        {t('projects.code')}
      </a>
    )}
    {!project.live && !project.code && (
      <span className="inline-flex items-center gap-2 text-sm font-light uppercase tracking-widest text-mist/60">
        <Lock size={14} />
        {t('projects.private')}
      </span>
    )}
  </div>
);

const Card = ({ project, index, total, progress, t }) => {
  const item = t(`projects.items.${project.id}`, { returnObjects: true });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const Icon = CATEGORY_ICON[project.category];
  const Visual = VISUALS[project.id];

  return (
    <div className="sticky top-24 flex h-[85vh] items-start md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full origin-top rounded-[40px] border-2 border-mist bg-night p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-5 flex flex-col gap-4 px-2 sm:mb-6 md:flex-row md:items-end md:justify-between md:px-4">
          <div className="flex items-end gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 110px)' }}>
              0{index + 1}
            </span>
            <div className="pb-1 sm:pb-2">
              <p className="text-xs font-light uppercase tracking-widest text-mist/60 sm:text-sm">
                {item.kind}
                {project.wip && <span className="ml-2 rounded-full border border-ember/70 px-2 py-0.5 text-[10px] text-[#ff9b5c]">{t('projects.wip')}</span>}
              </p>
              <h3 className="font-medium uppercase leading-tight text-mist" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.6rem)' }}>
                {item.title}
              </h3>
            </div>
          </div>
          <Links project={project} t={t} />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <div className="flex flex-col gap-3 md:w-[40%] md:gap-4">
            <div
              className={`${PANEL} relative flex flex-col justify-between bg-gradient-to-br from-plum via-[#5a0a63] to-grape p-6 sm:p-7`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <Icon size={34} className="text-white/90" />
              <p className="font-black uppercase leading-none tracking-tight text-white" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2.4rem)' }}>
                {t(`projects.filters.${project.category}`)}
              </p>
            </div>
            <div className={`${PANEL} flex flex-col gap-4 border border-mist/15 bg-carbon p-6 sm:p-7 md:min-h-[clamp(160px,22vw,340px)]`}>
              <p className="font-light leading-relaxed text-mist/80" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.05rem)' }}>
                {item.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="chip-dark">{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={`${PANEL} hidden min-h-[300px] border border-mist/15 md:block md:w-[60%]`}>
            <Visual />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  const featured = FEATURED.map((id) => PROJECTS.find((p) => p.id === id));
  const others = PROJECTS.filter((p) => !FEATURED.includes(p.id));

  return (
    <section id="projects" className="section-dark">
      <FadeIn as="h2" y={40} className="hero-heading heading-xl mb-14 text-center sm:mb-20">
        {t('projects.heading')}
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {featured.map((p, i) => (
          <Card key={p.id} project={p} index={i} total={featured.length} progress={scrollYProgress} t={t} />
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-6xl sm:mt-32">
        <FadeIn as="h3" className="mb-6 text-center font-medium uppercase tracking-widest text-mist/60 sm:text-lg">
          {t('projects.others')}
        </FadeIn>
        <ul>
          {others.map((p, i) => {
            const item = t(`projects.items.${p.id}`, { returnObjects: true });
            return (
              <FadeIn
                as="li"
                key={p.id}
                delay={i * 0.08}
                className="flex flex-col gap-4 border-t border-mist/15 py-7 md:flex-row md:items-center md:gap-10"
              >
                <span className="hero-heading shrink-0 font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
                  0{featured.length + i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-light uppercase tracking-widest text-mist/50">
                    {item.kind}
                    {p.wip && <span className="ml-2 text-[#ff9b5c]">· {t('projects.wip')}</span>}
                  </p>
                  <h4 className="mt-1 font-medium uppercase text-mist" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.7rem)' }}>
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-2xl font-light leading-relaxed text-mist/60">{item.desc}</p>
                </div>
                <Links project={p} t={t} />
              </FadeIn>
            );
          })}
        </ul>
        <FadeIn className="mt-12 flex justify-center">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-ghost-dark">
            <Github size={16} />
            {t('projects.all_github')}
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
