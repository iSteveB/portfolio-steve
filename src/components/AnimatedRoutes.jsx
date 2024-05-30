import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Achievements from '../pages/Achievements';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/realisations' element={<Achievements />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
