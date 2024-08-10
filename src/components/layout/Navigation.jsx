/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Navigation = ({ showMenu }) => {
	return (
		<nav className={`navigation ${showMenu ? 'show-nav' : ''}`}>
			<ul>
				<li>
					<NavLink className={(navData) => navData.isActive ? 'nav-active' : ''} end to='/'>
						Accueil
					</NavLink>
				</li>

				<li>
					<NavLink className={(navData) => navData.isActive ? 'nav-active' : ''} to='/realisations'>
						Savoir-faire
					</NavLink>
				</li>

				<li>
					<NavLink className={(navData) => navData.isActive ? 'nav-active' : ''} to='/contact'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
