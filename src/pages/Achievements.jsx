import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Works from '../components/layout/Works';
import TechStack from '../components/TechStack';

const Achievements = () => {
	return (
		<motion.div className='achievements'>
			<Header />
			<h1>Mon Parcours Tech</h1>
			<h2>Stack technique</h2>
			<TechStack />
			<h2>Formation</h2>
			<h2>Mes Projets</h2>
			<Works />
		</motion.div>
	);
};

export default Achievements;
