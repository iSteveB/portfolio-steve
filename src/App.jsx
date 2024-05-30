import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import { AnimatePresence } from "framer-motion"

const App = () => {
    return (
        <Suspense fallback={null}>
            <Router>
                <AnimatePresence>
                    <AnimatedRoutes />
                </AnimatePresence>
            </Router>
        </Suspense>
    );
};

export default App;

