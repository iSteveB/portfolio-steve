import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Works from '../components/layout/Works';
import TechStack from '../components/TechStack';
import Formation from '../components/Formation';

const Achievements = () => {
	return (
		<motion.div className='achievements'>
			<Header />
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				Mon Parcours Tech
			</motion.h1>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}>
				<h2>Stack technique</h2>
				<TechStack />
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.5 }}>
				<h2>Formation</h2>
				<Formation />
			</motion.section>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6, duration: 0.5 }}>
				<h2>Mes Projets</h2>
				<Works />
			</motion.section>
		</motion.div>
	);
};

export default Achievements;
