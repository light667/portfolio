import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BrainCircuit, MonitorSmartphone, Sparkles, GitBranch } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: "AI, ML & Data Science",
      icon: <BrainCircuit className="text-neon-cyan" />,
      skills: ["Python", "Numpy", "ScikitLearn", "Pandas", "Seaborn", "PyTorch"]
    },
    {
      title: "Generative AI & Vector DBs",
      icon: <Sparkles className="text-neon-purple" />,
      skills: ["Langchain", "LlamaIndex", "Chainlit", "HuggingFace", "ChromaDB", "Pinecone", "Weaviate", "Prompt Engineering", "RAG", "Fine Tuning", "AI Agent"]
    },
    {
      title: "Mobile & Web Development",
      icon: <MonitorSmartphone className="text-neon-lime" />,
      skills: ["Flutter", "Dart", "FastAPI", "Streamlit", "HTML", "CSS", "Firebase", "Supabase"]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="text-blue-500" />,
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">03.</span>
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card neon-border group relative flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  {group.icon}
                </div>
                <h3 className="font-bold text-white text-[10px] uppercase tracking-wider">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 hover:border-neon-cyan hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
