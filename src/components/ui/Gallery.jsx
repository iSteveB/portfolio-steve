import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsList } from '../../data/projectsList.js';
import { getProjectImage } from '../../utils/getProjectImage.js';

import externalLink from '../../assets/images/icons/external-link.svg';

const Gallery = () => {
	const [activeProject, setActiveProject] = useState(null);

	const lastProjects = projectsList
		.sort((a, b) => new Date(b.date) - new Date(a.date))
		.slice(0, 3);

	const handleProjectClick = (projectIndex) => {
		setActiveProject(lastProjects[projectIndex]);
	};

	return (
		<motion.div
			className='gallery'
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.7, delay: 0.35 }}>
			{lastProjects.map((project, index) => {
				const { original } = getProjectImage(project.image);
				const isActive = project === activeProject;

				return (
					<div
						key={index}
						className={`image ${isActive ? 'active' : ''}`}
						onClick={() => handleProjectClick(index)}>
						<div className='image-container'>
							<img
								className='image-cover'
								src={original}
								alt={project.name}
							/>
						</div>
						<div className='text-container'>
							<div className='text'>
								<h3>{project.name}</h3>
								<p>{project.description}</p>
								<div className='tags'>
									{project.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>
								<div className='links'>
									{project.link && (
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
									)}
									{project.github && (
										<a
											href={project.github}
											target='_blank'
											rel='noreferrer'>
											Voir le code{' '}
											<img
												src={externalLink}
												alt='external link'
											/>
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</motion.div>
	);
};

export default Gallery;
