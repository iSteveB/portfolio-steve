import externalLink from '../assets/images/icons/external-link.svg';
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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ProjectCard = () => {
	const { t } = useTranslation('translation');

	const projectsList = [
		{
			id: 1,
			name: 'Yummy Nouilles',
			image: yummyNouilles,
			hardSkills: ['Javascript', 'CSS3', 'API'],
			address: 'https://yummynouilles.vercel.app/',
			text: t('portfolio.project1.description'),
		},
		{
			id: 2,
			name: 'Where In The World',
			image: whereInTheWorld,
			hardSkills: ['Sass', 'React', 'API'],
			address: 'https://world-map-v01.vercel.app/',
			text: t('portfolio.project2.description'),
		},
		{
			id: 3,
			name: 'Loong Story',
			image: loongStory,
			hardSkills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Sass'],
			address: 'https://loongstory.onrender.com',
			text: t('portfolio.project3.description'),
		},
		{
			id: 4,
			name: 'Advice generator',
			image: adviceGen,
			hardSkills: ['HTML', 'CSS', 'JavaScript', 'API'],
			address: 'https://advice-generator-sooty.vercel.app/',
			text: t('portfolio.project4.description'),
		},
		{
			id: 5,
			name: 'Four Card Features',
			image: fourCard,
			hardSkills: ['HTML', 'CSS'],
			address:
				'https://four-card-feature-section-master-iota-woad.vercel.app/',
			text: t('portfolio.project5.description'),
		},
		{
			id: 6,
			name: 'Order Summary Component',
			image: orderSummary,
			hardSkills: ['HTML', 'CSS'],
			address: 'https://order-summary-component-puce.vercel.app/',
			text: t('portfolio.project6.description'),
		},
		{
			id: 7,
			name: 'Travel Agency.',
			image: travelAgency,
			hardSkills: ['HTML', 'CSS'],
			address: 'https://travel-agency-beta.vercel.app/',
			text: t('portfolio.project7.description'),
		},
		{
			id: 8,
			name: 'Coming Soon Page',
			image: comingSoon,
			hardSkills: ['HTML', 'CSS', 'JavaScript'],
			address: 'https://coming-soon-page-nu.vercel.app/',
			text: t('portfolio.project8.description'),
		},
		{
			id: 9,
			name: 'Calculatrice',
			image: calc,
			hardSkills: ['HTML', 'CSS', 'JavaScript'],
			address: 'https://calculate-eight.vercel.app/',
			text: t('portfolio.project9.description'),
		},
		{
			id: 10,
			name: 'AL Studio Photos',
			image: alstudio,
			hardSkills: ['NextJs, Tailwind, Sanity'],
			address: '',
			text: t('portfolio.project3.description'),
		},
	];

	const [activeIndex, setActiveIndex] = useState({
		activeObject: null,
		objects: projectsList,
	});

	const toogleClass = (index) => {
		setActiveIndex({
			...activeIndex,
			activeObject: activeIndex.objects[index],
		});
	};

	return (
		<div className='portfolio'>
			<motion.div
				className='accordion page'
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.25 }}>
				{projectsList.map((project, index) => {
					return (
						<div
							key={index}
							className={
								activeIndex.objects[index] ===
								activeIndex.activeObject
									? 'image active'
									: 'image'
							}
							style={{
								background: `url(${project.image}) center/cover`,
							}}
							onClick={() => toogleClass(index)}>
							<div className='text-container'>
								<div className='text'>
									<h3>{project.name}</h3>
									<p>{project.text}</p>
									<div className='tags'>
										{project.hardSkills.map((tag) => {
											return <span key={tag}>{tag}</span>;
										})}
									</div>
									<a
										href={project.address}
										target='_blank'
										rel='noreferrer'>
										{t('common.haveALook')}{' '}
										<img
											src={externalLink}
											alt='external link'
										/>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default ProjectCard;
