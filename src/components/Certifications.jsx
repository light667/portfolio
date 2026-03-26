import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const { t } = useTranslation();

  const certs = [
    { id: 1, img: "/certif1.jpg", title: "Certification IA 1" },
    { id: 2, img: "/certif2.jpg", title: "Certification Mobile" },
    { id: 3, img: "/certif3.jpg", title: "GenAI Expert" },
    { id: 4, img: "/certif4.jpg", title: "Cloud Architecture" },
    { id: 5, img: "/certif5.jpg", title: "Data Science Specialization" }

  ];

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">07.</span>
          {t('certifications.title')}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden glass-card p-0 border-white/5"
            >
              <img 
                src={cert.img} 
                alt={cert.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                 <Award size={24} className="text-neon-cyan mb-2" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{cert.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
