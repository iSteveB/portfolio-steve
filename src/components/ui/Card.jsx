/* eslint-disable react/prop-types */
import eye from '../../assets/images/icons/eye.svg';
import githubIcon from '../../assets/images/icons/githubIcon.svg';

const Card = ({work}) => {
  return (
    <div className='work-card'>
      <img className="work-card__image" src={work.image} alt={work.name} />
      <div className="work-card__links">
        {work.link && <a href={work.link} target="_blank" rel="noreferrer"><img src={eye} alt="Voir en live" title='Voir en live'/></a>}
        <a href={work.github} target="_blank" rel="noreferrer"><img src={githubIcon} alt="Voir sur GitHub" title='Voir sur GitHub' /></a>
      </div>
        <h4 className="work-card__title">{work.name}</h4>
        <p className="work-card__description">{work.description}</p>
        <p className="work-card__tags">
        {work.tags.map((tag, id) => <span key={id} className="work-card__tag">{tag}</span>)}
        </p>
    </div>
  );
};

export default Card;