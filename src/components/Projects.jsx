import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Miabe ASSISTANT",
      type: "Mobile App & AI",
      link: "https://miabe-assistant.web.app/",
      stack: ["Flutter", "Firebase", "LLM", "Dart"],
      description: "Assistant Mobile pour les Etudiants en Science et Technologie.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "PulseAI",
      type: "Mobile App & AI",
      link: "https://pulseai-a0548.web.app/",
      stack: ["FastAPI", "Mistral", "Supabase", "Flutter", "Firebase", "Machine Learning"],
      description: "Plateforme de diagnostic médical et d'orientation hospitalière par IA en Afrique.",
      image: "https://images.unsplash.com/photo-1576091160550-217359f49fde?auto=format&fit=crop&q=80&w=800"
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
        <div className="flex justify-between items-end mb-16">
          <h2 className="section-title mb-0">
            <span className="text-neon-cyan italic font-mono">04.</span>
            {t('projects.title')}
          </h2>
          <a href="https://github.com/light667" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-neon-cyan transition-colors">
            {t('nav.projects')} GitHub <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card p-0 border-white/5 hover:border-neon-cyan/30 transition-all duration-500 bg-white/[0.02]"
            >
              {/* Reduced Image Size Container */}
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-70 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/90 to-transparent" />
              </div>
              
              <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neon-cyan font-bold">{project.type}</span>
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-1 rounded bg-white/5 hover:bg-neon-cyan hover:text-dark transition-all scale-75">
                      <ExternalLink size={16} />
                    </a>
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                 <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-1">
                   {project.stack.map(s => (
                     <span key={s} className="text-[8px] font-bold px-1.5 py-0.5 bg-white/5 border border-white/10 rounded uppercase tracking-tighter text-slate-500">
                       {s}
                     </span>
                   ))}
                 </div>
              </div>
            </motion.div>
          ))}
          
          {/* Professional Call-to-action */}
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex flex-col items-center justify-center glass-card border-dashed border-white/10 text-center p-6 bg-transparent"
          >
             <div className="p-3 bg-neon-cyan/10 rounded-full mb-4">
                <Code size={24} className="text-neon-cyan" />
             </div>
             <p className="text-slate-500 text-sm font-light italic mb-2">
                {t('projects.under_construction')}
             </p>
             <span className="text-[10px] text-neon-cyan/50 font-bold uppercase tracking-widest">SYSTEM_UPDATING...</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
