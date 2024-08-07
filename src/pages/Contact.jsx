import ContactForm from '../components/ui/ContactForm';
import Header from '../components/layout/Header';

const Contact = () => {

    return (
        <div className='contact'>
            <Header />
            <h1>Contactez-moi</h1>
            <ContactForm />
        </div>
    );
};

export default Contact;
