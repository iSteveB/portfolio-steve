import Collapse from './ui/Collapse';
import reactIcon from '../assets/images/stack/react.svg';
import nodeIcon from '../assets/images/stack/nodejs.svg';
import expressIcon from '../assets/images/stack/express.svg';
import nestjsIcon from '../assets/images/stack/nestjs.svg';
import typescriptIcon from '../assets/images/stack/typescript.svg';
import sassIcon from '../assets/images/stack/sass.svg';
import nextjsIcon from '../assets/images/stack/nextjs.svg';
import tailwindIcon from '../assets/images/stack/tailwind.svg';
import reduxToolkitIcon from '../assets/images/stack/redux-toolkit.svg';
import mongodbIcon from '../assets/images/stack/mongodb.svg';
import postgresqlIcon from '../assets/images/stack/postgresql.svg';
import prismaIcon from '../assets/images/stack/prisma.svg';
import githubIcon from '../assets/images/stack/github.svg';
import figmaIcon from '../assets/images/stack/figma.svg';
import javascriptIcon from '../assets/images/stack/javascript.svg';
import sanityIcon from '../assets/images/stack/sanity.svg';
import notionIcon from '../assets/images/stack/notion.svg';
import jiraIcon from '../assets/images/stack/jira.svg';
import postmanIcon from '../assets/images/stack/postman.svg';

const TechStack = () => {
	const frontendStack = [
		{ name: 'React', icon: reactIcon },
		{ name: 'JavaScript', icon: javascriptIcon },
		{ name: 'TypeScript', icon: typescriptIcon },
		{ name: 'Sass', icon: sassIcon },
		{ name: 'NextJS', icon: nextjsIcon },
		{ name: 'Tailwind', icon: tailwindIcon },
		{ name: 'Redux/Toolkit', icon: reduxToolkitIcon },
	];

	const backendStack = [
		{ name: 'Node.js', icon: nodeIcon },
		{ name: 'Express', icon: expressIcon },
		{ name: 'NestJS', icon: nestjsIcon },
		{ name: 'Sanity', icon: sanityIcon },
		{ name: 'Prisma', icon: prismaIcon },
	];

	const databaseStack = [
		{ name: 'MongoDB', icon: mongodbIcon },
		{ name: 'PostgreSQL', icon: postgresqlIcon },
	];

	const toolsStack = [
		{ name: 'GitHub', icon: githubIcon },
		{ name: 'Figma', icon: figmaIcon },
		{ name: 'Notion', icon: notionIcon },
		{ name: 'Jira', icon: jiraIcon },
    { name: 'Postman', icon: postmanIcon },
	];

	return (
		<div className='tech-stack'>
			<div className='tech-stack__row'>
				<div className='tech-stack__column'>
					<Collapse title='Frontend' stackItems={frontendStack} />
				</div>
				<div className='tech-stack__column'>
					<Collapse title='Backend' stackItems={backendStack} />
				</div>
			</div>
			<div className='tech-stack__row'>
				<div className='tech-stack__column'>
					<Collapse title='Database' stackItems={databaseStack} />
				</div>
				<div className='tech-stack__column'>
					<Collapse title='Outils' stackItems={toolsStack} />
				</div>
			</div>
		</div>
	);
};

export default TechStack;
