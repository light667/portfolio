import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Politique de Confidentialité
            </h1>
          </div>

          <p className="text-slate-500 text-sm mb-12">
            Dernière mise à jour : Avril 2026
          </p>

          <div className="space-y-10 text-slate-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Bienvenue sur le portfolio de Kokou Armand Light DJOSSOU. La protection de vos données
                personnelles est une priorité. Cette politique de confidentialité explique quelles
                informations sont collectées, comment elles sont utilisées et quels sont vos droits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Données Collectées</h2>
              <p className="mb-4">Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Formulaire de contact :</strong> Nom, adresse email,
                  type de demande et message. Ces données sont transmises via EmailJS et envoyées
                  directement à notre boîte email professionnelle.
                </li>
                <li>
                  <strong className="text-white">Analytics :</strong> Données de navigation anonymes
                  collectées par Firebase Analytics (pages visitées, durée de session, type d'appareil,
                  localisation approximative).
                </li>
                <li>
                  <strong className="text-white">Cookies :</strong> Cookies techniques nécessaires au
                  fonctionnement du site et cookies analytiques de Firebase.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Utilisation des Données</h2>
              <p className="mb-4">Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact et de collaboration</li>
                <li>Améliorer l'expérience utilisateur du site</li>
                <li>Analyser le trafic et les performances du site</li>
                <li>Vous fournir les services demandés</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Partage des Données</h2>
              <p>
                Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées
                avec les services suivants uniquement dans le cadre du fonctionnement du site :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong className="text-white">Firebase (Google)</strong> — Hébergement et analytics</li>
                <li><strong className="text-white">EmailJS</strong> — Transmission sécurisée des messages de contact</li>
                <li><strong className="text-white">Vercel</strong> — Hébergement alternatif</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Conservation des Données</h2>
              <p>
                Les données du formulaire de contact sont conservées uniquement dans notre boîte email.
                Les données analytics sont conservées selon les politiques de rétention de Firebase
                Analytics (14 mois par défaut). Vous pouvez demander la suppression de vos données
                à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Vos Droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:nethaniahdjossou@gmail.com" className="text-neon-cyan hover:underline">
                  nethaniahdjossou@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Cookies</h2>
              <p>
                Ce site utilise des cookies techniques indispensables au fonctionnement du site,
                ainsi que des cookies analytiques de Firebase pour mesurer l'audience. Vous pouvez
                accepter ou refuser les cookies non essentiels via la bannière affichée lors de
                votre première visite. Votre choix est sauvegardé dans le stockage local de votre
                navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Contact</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité, vous pouvez
                nous contacter à :{' '}
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

export default PrivacyPolicy;
