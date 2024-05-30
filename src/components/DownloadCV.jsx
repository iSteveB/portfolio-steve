import { useTranslation } from 'react-i18next';
import curriculumVitae from '../assets/download/cv-steve-basse.pdf';
import { motion } from 'framer-motion'

const DownloadCV = () => {
    const { t } = useTranslation('translation');

    return (
        <motion.div initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className='download-cv'>
            <form method='get' action={curriculumVitae} target='_blank'>
                <button type='submit'>{t('common.cv')}</button>
            </form>
        </motion.div>
    );
};

export default DownloadCV;
