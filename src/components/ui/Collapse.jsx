import { useState } from 'react';

const Collapse = ({ title, stackItems }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`collapse ${isOpen ? 'open' : ''}`}>
			<h3 className='collapse__title' onClick={() => setIsOpen(!isOpen)}>
				{title}
			</h3>
			<div className='collapse__content'>
				<ul className='collapse__content__list'>
					{stackItems?.map((item, index) => (
						<li
							className='collapse__content__list--item'
							key={index}>
							<img src={item.icon} alt={item.name} />
							<span>{item.name}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Collapse;
