import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Smartphone, Server } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: "AI & Data Science",
      icon: <BrainCircuit className="text-neon-cyan" />,
      skills: ["Python", "Numpy", "ScikitLearn", "Pandas"]
    },
    {
      title: "Generative AI & Vector DBs",
      icon: <Code2 className="text-neon-purple" />,
      skills: ["Langchain", "Chainlit", "HuggingFace", "ChromaDB", "Pinecone", "Weaviate"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-neon-lime" />,
      skills: ["Flutter", "Dart"]
    },
    {
      title: "Backend & BaaS",
      icon: <Server className="text-blue-400" />,
      skills: ["Firebase", "Supabase"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">02.</span>
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card neon-border group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg">
                  {group.icon}
                </div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 hover:border-neon-cyan hover:text-white transition-all cursor-default"
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
