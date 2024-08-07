import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Works from '../components/layout/Works';

const Achievements = () => {
	return (
		<motion.div className='achievements'>
			<Header />
			<h1>Mes travaux</h1>
			<Works />
		</motion.div>
	);
};

export default Achievements;
