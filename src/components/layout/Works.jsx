import { motion } from 'framer-motion';
import { projectsList } from '../../data/projectsList';
import Card from '../ui/Card';

const Work = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className='works'>
			{projectsList.map((project) => (
				<Card key={project.id} work={project} />
			))}
		</motion.div>
	);
};

export default Work;
