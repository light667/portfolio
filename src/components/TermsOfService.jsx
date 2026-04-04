import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-300">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Retour au portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-neon-purple/10 rounded-xl text-neon-purple">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Conditions d'Utilisation
            </h1>
          </div>

          <p className="text-slate-500 text-sm mb-12">
            Dernière mise à jour : Avril 2026
          </p>

          <div className="space-y-10 text-slate-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Présentation du Site</h2>
              <p>
                Ce site web est le portfolio professionnel de Kokou Armand Light DJOSSOU, ingénieur
                en Intelligence Artificielle et développeur mobile. Il a pour objectif de présenter
                ses compétences, projets et services aux potentiels clients et recruteurs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Acceptation des Conditions</h2>
              <p>
                En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation.
                Si vous n'acceptez pas l'une de ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Propriété Intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logo, code source, design)
                est la propriété exclusive de Kokou Armand Light DJOSSOU, sauf mention contraire.
                Toute reproduction, distribution ou utilisation sans autorisation écrite préalable
                est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Services Proposés</h2>
              <p>
                Les services présentés sur ce site sont fournis à titre informatif. Les conditions
                exactes de chaque prestation (tarifs, délais, livrables) font l'objet d'un devis
                personnalisé et d'un contrat séparé entre le prestataire et le client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Formulaire de Contact</h2>
              <p>
                Le formulaire de contact est destiné aux demandes professionnelles légitimes :
                demandes de collaboration, de services ou d'information. Toute utilisation abusive
                (spam, messages malveillants) pourra entraîner un blocage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Liens Externes</h2>
              <p>
                Ce site contient des liens vers des sites externes (GitHub, LinkedIn, etc.).
                Kokou Armand Light DJOSSOU n'est pas responsable du contenu de ces sites externes
                et décline toute responsabilité quant aux dommages pouvant résulter de leur
                consultation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Limitation de Responsabilité</h2>
              <p>
                Ce site est fourni "tel quel". L'auteur s'efforce de maintenir les informations
                à jour mais ne garantit pas l'exactitude, la complétude ou l'actualité des
                informations diffusées. En aucun cas, l'auteur ne pourra être tenu responsable
                des dommages directs ou indirects résultant de l'utilisation de ce site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Modifications</h2>
              <p>
                Ces conditions peuvent être modifiées à tout moment. Les utilisateurs sont invités
                à les consulter régulièrement. La poursuite de l'utilisation du site après
                modification vaut acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Contact</h2>
              <p>
                Pour toute question concernant ces conditions, contactez :{' '}
                <a href="mailto:nethaniahdjossou@gmail.com" className="text-neon-cyan hover:underline">
                  nethaniahdjossou@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
