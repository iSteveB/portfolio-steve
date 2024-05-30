import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import SocialNetwork from './SocialNetwork';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const { t } = useTranslation('translation');
    const form = useRef();

    const [firstname, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_5wk0o1s',
                'template_5agglvh',
                form.current,
                'WcTjx_hDSVUI77y2w'
            )
            .then(
                (result) => {
                    setEmail('');
                    setLastName('');
                    setFirstname('');
                    setEmail('');
                    setTextarea('');
                    alert(t('contact.greetings'));
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <motion.div
            className='contact-form'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}>
            <form ref={form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='lastname'
                    placeholder={t('contact.lastName')}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    type='text'
                    name='firstname'
                    placeholder={t('contact.firstName')}
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder={t('contact.email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    name='message'
                    rows='9'
                    cols='70'
                    maxLength='500'
                    minLength='10'
                    required
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    placeholder={t('contact.text')}></textarea>

                <button type='submit'>{t('contact.send')}</button>
            </form>

            <SocialNetwork />
        </motion.div>
    );
};

export default ContactForm;
