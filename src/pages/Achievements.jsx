import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import ProjectCard from '../components/ProjectCard';

const Achievements = () => {
    return (
        <motion.div className='achievements'>
            <Header />
            <ProjectCard />
        </motion.div>
    );
};

export default Achievements;
