import { motion } from 'framer-motion';
import { projectsList } from '../../data/projectsList';
import Card from '../ui/Card';

const Work = () => {
	const sortedListByDate = projectsList.sort((a, b) => new Date(b.date) - new Date(a.date));
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className='works'>
			{sortedListByDate
				.map((project) => (
					<Card key={project.id} work={project} />
				))}
		</motion.div>
	);
};

export default Work;
