import curriculumVitae from '../assets/download/cv-steve-basse.pdf';
import { motion } from 'framer-motion'

const DownloadCV = () => {

    return (
        <motion.div initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className='download-cv'>
            <form method='get' action={curriculumVitae} target='_blank'>
                <button type='submit'>Télécharger mon CV</button>
            </form>
        </motion.div>
    );
};

export default DownloadCV;
