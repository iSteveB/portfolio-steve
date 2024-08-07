import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Input from './Input';
import SocialNetwork from '../SocialNetwork';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
	const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

		setIsLoading(true);
    emailjs
      .sendForm(
        'service_5uejtrn',
        'template_5agglvh',
        form.current,
        'WcTjx_hDSVUI77y2w'
      )
      .then(
        () => {
          setFormData({
            lastname: '',
            firstname: '',
            email: '',
            message: ''
          });

					setIsLoading(false);
          alert("Merci pour votre message! À très vite! 😊");
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
        <Input
          type="text"
          name="lastname"
          placeholder="Nom"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="firstname"
          placeholder="Prénom"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="9"
          cols="70"
          maxLength="500"
          minLength="10"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder={"Votre message ici..."}
        ></textarea>

        <button type="submit">{ isLoading ? 'Envoie...' : 'Envoyer'}</button>
      </form>

      <SocialNetwork />
    </motion.div>
  );
};

export default ContactForm; 