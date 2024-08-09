import DownloadCV from '../components/ui/DownloadCV';
import Header from '../components/layout/Header';
import Logo from '../components/layout/Logo';
import ContactForm from '../components/ui/ContactForm';
import Gallery from '../components/Gallery';
import Footer from '../components/layout/Footer';
import Stack from '../components/Stack';

import cleanCodeIcon from '../assets/images/icons/clean_code.png';
import seoIcon from '../assets/images/icons/seoIcon.png';
import speedIcon from '../assets/images/icons/speed.png';

import { motion } from 'framer-motion';

const Accueil = () => {
	return (
		<div className='home'>
			<Header />
			<div className='intro-container'>
				<div className='intro'>
					<Logo size='xl' animation={true} />
					<motion.h2
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.3 }}>
						Développeur Web React & Node.js
					</motion.h2>
					<DownloadCV />
				</div>
			</div>

			<section className='skills'>
				<h2>Compétences</h2>

				<div className='competences-container'>
					<div className='competences'>
						<motion.div
							initial={{
								opacity: 0,
								transform: { translateY: 100 },
							}}
							whileInView={{
								opacity: 1,
								transform: { translateY: 0 },
							}}
							transition={{ duration: 0.4, delay: 0.4 }}>
							<img src={speedIcon} alt='seo' />
							<h5>Performance</h5>
							<p>
								Optimiser les sites web, pour augmenter la
								vitesse de chargement des pages et
								l&apos;expérience utilisateur.
							</p>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								transform: { translateY: 100 },
							}}
							whileInView={{
								opacity: 1,
								transform: { translateY: 0 },
							}}
							transition={{ duration: 0.8, delay: 0.8 }}>
							<img src={cleanCodeIcon} alt='clean code' />
							<h5>Clean Code</h5>
							<p>
								Écrire du code facile à lire, à maintenir, et
								qui adhére aux bonnes pratiques.
							</p>
						</motion.div>
						<motion.div
							initial={{
								opacity: 0,
								transform: { translateY: 100 },
							}}
							whileInView={{
								opacity: 1,
								transform: { translateY: 0 },
							}}
							transition={{ duration: 0.7, delay: 1.2 }}>
							<img src={seoIcon} alt='SEO' />
							<h5>SEO</h5>
							<p>
								Améliorer la visibilité en ligne en utilisant
								des techniques de référencement naturel.
							</p>
						</motion.div>
					</div>
				</div>
				<Stack direction='left' />
			</section>

			<section className='portfolio'>
				<h2>Derniers Projets</h2>
				<Gallery />
			</section>

			<motion.section
				className='contact'
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.7, delay: 0.35 }}>
				<h2>Contactez-moi</h2>
				<ContactForm />
			</motion.section>

			<Footer />
		</div>
	);
};

export default Accueil;
