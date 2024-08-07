import loongStory from '../assets/images/projects/loong-story.webp';
import whereInTheWorld from '../assets/images/projects/where-in-the-world.webp';
import yummyNouilles from '../assets/images/projects/yummy-nouilles.webp';
import adviceGen from '../assets/images/projects/advice-gen.webp';
import fourCard from '../assets/images/projects/four-card.webp';
import orderSummary from '../assets/images/projects/order-summary.webp';
import travelAgency from '../assets/images/projects/travel-agency.webp';
import comingSoon from '../assets/images/projects/coming-soon.webp';
import calc from '../assets/images/projects/calculatrice.webp';
import alstudio from '../assets/images/projects/alstudio.webp';
// import nina from '../assets/images/projects/nina.webp';
// import kasa from '../assets/images/projects/kasa.svg';
// import argentBank from '../assets/images/projects/argentBank.webp';

export const projectsList = [
	{
		id: 1,
		name: 'Yummy Nouilles',
		image: yummyNouilles,
		tags: ['Javascript', 'CSS3', 'API'],
		link: 'https://yummynouilles.vercel.app/',
		github: 'https://github.com/iSteveB/Yummy_Nouilles',
		description: "Site web d'un restaurant utilisant l'API Google Maps.",
		date: '12-2021',
	},
	{
		id: 2,
		name: 'Where In The World',
		image: whereInTheWorld,
		tags: ['Sass', 'React', 'API'],
		link: 'https://world-map-v01.vercel.app/',
		github: 'https://github.com/iSteveB/world-map-v01',
		description: 'Application web présentant les pays du monde.',
		date: '08-2022',
	},
	{
		id: 3,
		name: 'Loong Story',
		image: loongStory,
		tags: ['React', 'Redux', 'Sass', 'Node.js', 'MongoDB'],
		link: null,
		github: 'https://github.com/iSteveB/loong-story',
		description: 'Réseau social inspiré de Twitter.',
		date: '08-2023',
	},
	{
		id: 4,
		name: 'Advice generator',
		image: adviceGen,
		tags: ['HTML', 'CSS', 'JavaScript', 'API'],
		link: 'https://advice-generator-sooty.vercel.app/',
		github: 'https://github.com/iSteveB/advice-generator',
		description: 'Génère des conseils aléatoirement.',
		date: '05-2022',
	},
	{
		id: 5,
		name: 'Four Card Features',
		image: fourCard,
		tags: ['HTML', 'CSS'],
		link: 'https://four-card-feature-section-master-iota-woad.vercel.app/',
		github: 'https://github.com/iSteveB/Four-Card-Feature-Section',
		description: 'Utilisation de CSS Grid pour placer des élements.',
		date: '07-2021',
	},
	{
		id: 6,
		name: 'Order Summary Component',
		image: orderSummary,
		tags: ['HTML', 'CSS'],
		link: 'https://order-summary-component-puce.vercel.app/',
		github: 'https://github.com/iSteveB/Order-Summary-Component',
		description: 'Composant permettant de faire une synthèse avant achat.',
		date: '10-2021',
	},
	{
		id: 7,
		name: 'Travel Agency.',
		image: travelAgency,
		tags: ['HTML', 'CSS'],
		link: 'https://travel-agency-beta.vercel.app/',
		github: 'https://github.com/iSteveB/Travel-Agency',
		description: "Site vitrine d'une agence de voyage.",
		date: '10-2021',
	},
	{
		id: 8,
		name: 'Coming Soon Page',
		image: comingSoon,
		tags: ['HTML', 'CSS', 'JavaScript'],
		link: 'https://coming-soon-page-nu.vercel.app/',
		github: 'https://github.com/iSteveB/Coming-Soon-Page',
		description: "Page d'attente intégrant une validation d'adresse mail",
		date: '10-2021',
	},
	{
		id: 9,
		name: 'Calculatrice',
		image: calc,
		tags: ['HTML', 'CSS', 'JavaScript'],
		link: 'https://calculate-eight.vercel.app/',
		github: 'https://github.com/iSteveB/Calculatrice',
		description: 'Permet de réaliser des opérations simples.',
		date: '10-2021',
	},
	{
		id: 10,
		name: 'AL Studio Photos',
		image: alstudio,
		tags: ['Next.js', 'Tailwind', 'Sanity'],
		link: 'https://www.alstudiophotos.com/',
		github: 'https://github.com/iSteveB/alstudio',
		description: 'Portfolio réalisé pour une photographe.',
		date: '01-2024',
	},
	{
		id: 11,
		name: 'Nina Carducci',
		image: '',
		tags: ['HTML', 'CSS3', 'SEO'],
		link: 'https://isteveb.github.io/ninacarducci.github.io/',
		github: 'https://github.com/iSteveB/ninacarducci.github.io',
		description: 'Optimisation SEO pour le portfolio d\'une photographe.',
		date: '06-2024',
	},
	{
		id: 12,
		name: 'Kasa',
		image: '',
		tags: ['React', 'Sass'],
		link: 'https://kasa-isteveb.vercel.app',
		github: 'https://github.com/iSteveB/kasa',
		description: 'Agence de location de logements.',
		date: '06-2024',
	},
	{
		id: 13,
		name: 'ArgentBank',
		image: '',
		tags: ['React', 'Redux', 'Swagger', 'API'],
		link: 'https://argentbank-isteveb.vercel.app/',
		github: 'https://github.com/iSteveB/ArgentBank',
		description: 'Intégration du frontend d\'une banque en ligne',
		date: '07-2024',
	}
];
