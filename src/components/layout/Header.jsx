import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';
import burgerButton from '../../assets/images/icons/burger-menu.svg';
import closeButton from '../../assets/images/icons/close.svg';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	return (
		<div className={`header-container ${isScrolled ? 'small' : ''}`}>
			<div className='header'>
				<Link to='/'>
					<Logo size='s' />
				</Link>
				<Navigation showMenu={showMenu} />
				<SocialNetwork />
				<img
					className='burger-menu'
					onClick={toggleMenu}
					src={showMenu ? closeButton : burgerButton}
					alt='Menu'
				/>
			</div>
		</div>
	);
};

export default Header;
