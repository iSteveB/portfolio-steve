import loongStory from '../assets/images/projects/loong-story.webp';
import whereInTheWorld from '../assets/images/projects/where-in-the-world.webp';
import yummyNouilles from '../assets/images/projects/yummy-nouilles.webp';
import adviceGen from '../assets/images/projects/advice-gen.webp';
import fourCard from '../assets/images/projects/four-card.webp';
import orderSummary from '../assets/images/projects/order-summary.webp';
import travelAgency from '../assets/images/projects/travel-agency.webp';
import comingSoon from '../assets/images/projects/coming-soon.webp';
import calc from '../assets/images/projects/calculatrice.webp';

import i18next from 'i18next';


export const projectsList = [
        {
            id: 1,
            name: 'Yummy Nouilles',
            image: yummyNouilles,
            hardSkills: ['Javascript', 'CSS3', 'API'],
            address: 'https://yummynouilles.vercel.app/',
            text: i18next.t('portfolio.project1.description'),
        },
        {
            id: 2,
            name: 'Where In The World',
            image: whereInTheWorld,
            hardSkills: ['React', 'SASS', 'API'],
            address: 'https://world-map-v01.vercel.app/',
            text: i18next.t('portfolio.project2.description'),
        },
        {
            id: 3,
            name: 'Loong Story',
            image: loongStory,
            hardSkills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Sass'],
            address: 'https://loongstory.onrender.com',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 4,
            name: 'Advice generator',
            image: adviceGen,
            hardSkills: ['HTML', 'CSS', 'JavaScript'],
            address: 'https://advice-generator-sooty.vercel.app/',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 5,
            name: 'Four Card Features',
            image: fourCard,
            hardSkills: ['HTML', 'CSS'],
            address:
                'https://four-card-feature-section-master-iota-woad.vercel.app/',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 6,
            name: 'Order Summary Component',
            image: orderSummary,
            hardSkills: ['HTML', 'CSS'],
            address: 'https://order-summary-component-puce.vercel.app/',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 7,
            name: 'Travel Agency.',
            image: travelAgency,
            hardSkills: ['HTML', 'CSS'],
            address: 'https://travel-agency-beta.vercel.app/',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 8,
            name: 'Coming Soon Page',
            image: comingSoon,
            hardSkills: ['HTML', 'CSS', 'JavaScript'],
            address: 'https://coming-soon-page-nu.vercel.app/',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 9,
            name: 'Calculatrice',
            image: calc,
            hardSkills: ['HTML', 'CSS', 'JavaScript'],
            address: 'https://calculate-eight.vercel.app/',
            text: i18next.t('portfolio.project3.description'),
        },
        {
            id: 10,
            name: 'AL Studio Photos',
            image: calc,
            hardSkills: ['NextJs, Tailwind, Sanity'],
            address: '',
            text: i18next.t('portfolio.project3.description'),
        }
    ];