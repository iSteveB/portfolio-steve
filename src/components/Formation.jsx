import { motion } from 'framer-motion';

const Formation = () => {
    return (
        <motion.div 
            className="formation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3>Développeur / Intégrateur Web</h3>
            <p>Titre RNCP 5 - @OpenClassrooms</p>
            <span>Mars 2024 - Août 2024</span>
            <ul>
                <li>Conception et développement d&apos;interfaces utilisateurs avec <strong>React</strong>.</li>
                <li><strong>Collaboration</strong> avec des designers pour traduire des maquettes en <strong>applications fonctionnelles</strong>.</li>
                <li><strong>Intégration de données</strong> provenant de diverses sources back-end et bases de données.</li>
                <li><strong>Optimisation d&apos;applications</strong> pour maximiser leur vitesse, leur efficacité et le <strong>SEO</strong>. </li>
                <li> <strong>Gestion de projet </strong> web grâce à la <strong>méthode agile</strong>.</li>
            </ul>
        </motion.div>
    );
};

export default Formation;