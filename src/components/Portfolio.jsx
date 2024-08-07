import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projectsList } from '../data/projectsList.js';

import externalLink from '../assets/images/icons/external-link.svg';

const Portfolio = () => {
	const lastProjects = projectsList.sort((a, b) => b.id - a.id).slice(0, 3);

	const [activeIndex, setActiveIndex] = useState({
		activeObject: null,
		objects: lastProjects,
	});

	const toogleClass = (index) => {
		setActiveIndex({
			...activeIndex,
			activeObject: activeIndex.objects[index],
		});
	};

	useEffect(() => {}, [activeIndex]);

	return (
		<>
			<motion.div
				className='accordion'
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.7, delay: 0.35 }}>
				{lastProjects.map((project, index) => {
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
										{project.tags.map((tag) => {
											return <span key={tag}>{tag}</span>;
										})}
									</div>
									<a
										href={project.link}
										target='_blank'
										rel='noreferrer'>
										Visiter le site{' '}
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
		</>
	);
};

export default Portfolio;
