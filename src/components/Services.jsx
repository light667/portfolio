import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BrainCircuit, DatabaseZap, Smartphone, ShieldCheck } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "s1",
      icon: <BrainCircuit size={40} className="text-neon-cyan" />,
      title: t('services.s1.title'),
      desc: t('services.s1.desc'),
      gradient: "from-neon-cyan/20 to-transparent"
    },
    {
      id: "s2",
      icon: <DatabaseZap size={40} className="text-neon-purple" />,
      title: t('services.s2.title'),
      desc: t('services.s2.desc'),
      gradient: "from-neon-purple/20 to-transparent"
    },
    {
      id: "s3",
      icon: <Smartphone size={40} className="text-neon-lime" />,
      title: t('services.s3.title'),
      desc: t('services.s3.desc'),
      gradient: "from-neon-lime/20 to-transparent"
    },
    {
      id: "s4",
      icon: <ShieldCheck size={40} className="text-blue-500" />,
      title: t('services.s4.title'),
      desc: t('services.s4.desc'),
      gradient: "from-blue-500/20 to-transparent"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">03.</span>
          {t('services.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card border-none overflow-hidden relative"
            >
              {/* Decorative gradient corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
