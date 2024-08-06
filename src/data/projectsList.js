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

export const projectsList = [
	{
		id: 1,
		name: 'Yummy Nouilles',
		image: yummyNouilles,
		hardSkills: ['Javascript', 'CSS3', 'API'],
		address: 'https://yummynouilles.vercel.app/',
		text: "Site web d'un restaurant utilisant l'API Google Maps.",
	},
	{
		id: 2,
		name: 'Where In The World',
		image: whereInTheWorld,
		hardSkills: ['Sass', 'React', 'API'],
		address: 'https://world-map-v01.vercel.app/',
		text: 'Application web présentant les pays du monde.',
	},
	{
		id: 3,
		name: 'Loong Story',
		image: loongStory,
		hardSkills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Sass'],
		address: 'https://loongstory.onrender.com',
		text: 'Réseau social inspiré de Twitter.',
	},
	{
		id: 4,
		name: 'Advice generator',
		image: adviceGen,
		hardSkills: ['HTML', 'CSS', 'JavaScript', 'API'],
		address: 'https://advice-generator-sooty.vercel.app/',
		text: 'Génère des conseils aléatoirement.',
	},
	{
		id: 5,
		name: 'Four Card Features',
		image: fourCard,
		hardSkills: ['HTML', 'CSS'],
		address:
			'https://four-card-feature-section-master-iota-woad.vercel.app/',
		text: 'Utilisation de CSS Grid pour placer des élements.',
	},
	{
		id: 6,
		name: 'Order Summary Component',
		image: orderSummary,
		hardSkills: ['HTML', 'CSS'],
		address: 'https://order-summary-component-puce.vercel.app/',
		text: 'Composant permettant de faire une synthèse avant achat.',
	},
	{
		id: 7,
		name: 'Travel Agency.',
		image: travelAgency,
		hardSkills: ['HTML', 'CSS'],
		address: 'https://travel-agency-beta.vercel.app/',
		text: "Site vitrine d'une agence de voyage.",
	},
	{
		id: 8,
		name: 'Coming Soon Page',
		image: comingSoon,
		hardSkills: ['HTML', 'CSS', 'JavaScript'],
		address: 'https://coming-soon-page-nu.vercel.app/',
		text: "Page d'attente intégrant une validation d'adresse mail",
	},
	{
		id: 9,
		name: 'Calculatrice',
		image: calc,
		hardSkills: ['HTML', 'CSS', 'JavaScript'],
		address: 'https://calculate-eight.vercel.app/',
		text: 'Permet de réaliser des opérations simples.',
	},
	{
		id: 10,
		name: 'AL Studio Photos',
		image: alstudio,
		hardSkills: ['Next.js', 'Tailwind', 'Sanity'],
		address: 'https://www.alstudiophotos.com/',
		text: 'Portfolio réalisé pour une photographe.',
	},
];
