import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "PulseAI",
      type: "Mobile App & AI",
      link: "https://pulseai-a0548.web.app/",
      stack: ["FastAPI", "Mistral", "Supabase", "Flutter", "Firebase", "Machine Learning"],
      description: "Plateforme de diagnostic médical et d'orientation hospitalière par IA en Afrique.",
      image: "/projects/pulseai.jpg"
    },
    {
      title: "Miabe ASSISTANT",
      type: "Mobile App & AI",
      link: "https://miabe-assistant.web.app/",
      stack: ["Flutter", "Firebase", "LLM", "Dart"],
      description: "Assistant Mobile pour les Etudiants en Science et Technologie.",
      image: "/projects/miabe.jpg"
    },
    {
      title: "FOOD ORDERBOT",
      type: "AI OrderBot",
      link: "https://github.com/light667/LIGHTFOOD-ORDERBOT",
      stack: ["Python", "Langchain", "Gemini", "Chainlit"],
      description: "Chatbot IA pour la commande automatisée de nourriture en ligne.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "MedicalBot",
      type: "AI Project",
      link: "#",
      stack: ["RAG", "ChromaDB", "Python"],
      description: "Assistant conversationnel spécialisé dans l'analyse de documents médicaux.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <h2 className="section-title mb-0">
            <span className="text-neon-cyan italic font-mono">05.</span>
            {t('projects.title')}
          </h2>
          <a href="https://github.com/light667" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-neon-cyan transition-colors">
            {t('nav.projects')} GitHub <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden glass-card p-0 border-white/5 hover:border-neon-cyan/30 transition-all duration-500 bg-white/[0.02]">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img src={project.image} alt={`${project.title} - ${project.type}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/90 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neon-cyan font-bold">{project.type}</span>
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-white/5 hover:bg-neon-cyan hover:text-dark transition-all">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(s => (
                    <span key={s} className="text-[9px] font-bold px-2 py-0.5 bg-white/5 border border-white/10 rounded-full uppercase tracking-wider text-slate-500">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
