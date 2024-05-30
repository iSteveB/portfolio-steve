import DownloadCV from '../components/DownloadCV';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Stack from '../components/Stack';

import cleanCodeIcon from '../assets/images/icons/clean_code.png';
import responsiveIcon from '../assets/images/icons/responsive.png';
import speedIcon from '../assets/images/icons/speed.png';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Accueil = () => {
    const { t } = useTranslation('translation');

    return (
        <div className='home'>
            <Header />
            <div className='intro-container'>
                <div className='intro'>
                    <Logo size='xl' animation={true} />
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.35 }}>
                        {t('homepage.job')} React & Node.js
                    </motion.h2>
                    <DownloadCV />
                </div>
            </div>

            <section className='skills'>
                <h2>{t('homepage.skills.title')}</h2>

                <div className='competences-container'>
                    <div className='competences'>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: { translateY: 100 },
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: { translateY: 0 },
                            }}
                            transition={{ duration: 0.8, delay: 0.8 }}>
                            <img src={speedIcon} alt='seo' />
                            <h5>Performance</h5>
                            <p>{t('homepage.skills.performance')}</p>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: { translateY: 100 },
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: { translateY: 0 },
                            }}
                            transition={{ duration: 1, delay: 1 }}>
                            <img src={cleanCodeIcon} alt='clean code' />
                            <h5>Clean Code</h5>
                            <p>{t('homepage.skills.cleanCode')}</p>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: { translateY: 100 },
                            }}
                            whileInView={{
                                opacity: 1,
                                transform: { translateY: 0 },
                            }}
                            transition={{ duration: 0.7, delay: 1.2 }}>
                            <img src={responsiveIcon} alt='Responsive' />
                            <h5>Responsive</h5>
                            <p>{t('homepage.skills.responsive')}</p>
                        </motion.div>
                    </div>
                </div>
                <Stack direction='left' />
            </section>

            <section className='portfolio'>
                <h2>{t('homepage.lastProjects.title')}</h2>
                <Portfolio />
            </section>

            <section
                className='contact'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}>
                <h2>{t('contact.letsTalk')}</h2>
                <ContactForm />
            </section>

            <Footer />
        </div>
    );
};

export default Accueil;
