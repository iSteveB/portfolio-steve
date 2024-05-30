import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = ({showMenu}) => {

    const { t } = useTranslation('translation');
  
    return (
        <nav className={`navigation ${showMenu ? 'show-nav' : ''}`}>
                <ul>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? 'nav-active' : ''
                            }
                            end
                            to='/'>
                            {t('homepage.home')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? 'nav-active' : ''
                            }
                            to='/realisations'>
                            Portfolio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? 'nav-active' : ''
                            }
                            to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
        </nav>
    );
};

export default Navigation;
