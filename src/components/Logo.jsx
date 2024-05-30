import { motion } from 'framer-motion';

const Logo = ({ size, animation }) => {
    return (
        <div className='logo'>
            {animation ? (
                <motion.p
                    className={`logo-${size}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}>
                    <span>&lt;</span>
                    <span> Steve </span>
                    <span>/</span>
                    <span>&gt;</span>
                </motion.p>
            ) : (<p className={`logo-${size}`}>
                <span>&lt;</span>
                <span> Steve </span>
                <span>/</span>
                <span>&gt;</span>
            </p> )}
            
        </div>
    );
};

export default Logo;
