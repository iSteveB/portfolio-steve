import { useTranslation } from 'react-i18next';
import englishIcon from '../assets/images/icons/united-kingdom.png'
import frenchIcon from '../assets/images/icons/france.png'

const lngs = {
    en: { nativeName: englishIcon },
    fr: { nativeName: frenchIcon }
};

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    return (
        <div className='language-switcher'>
          {Object.keys(lngs).map((lng) => (
            <img src={lngs[lng].nativeName} key={lng} className={ i18n.resolvedLanguage === lng ? 'french' : 'english' } alt="change Language" onClick={() => i18n.changeLanguage(lng)} />
          ))}
        </div>
    );
};

export default LanguageSwitcher;