import React from 'react';
import Header from '../components/Header';

import { motion } from 'framer-motion';
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
