import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation('translation');

    return (
        <div className='contact'>
            <Header />
            <h1>{t('contact.letsTalk')}</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;
