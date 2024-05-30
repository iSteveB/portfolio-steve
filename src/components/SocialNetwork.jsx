import githubIcon from "../assets/images/icons/invertocat.svg"
import linkedinIcon from "../assets/images/icons/linkedin.svg"
import codepenIcon from "../assets/images/icons/codepen.svg"

const SocialNetwork = () => {
    return (
        <div className="social-network">
            <a href="https://www.linkedin.com/in/steve-basse/" alt="linkedin" title="LinkedIn"><img src={linkedinIcon} alt="linkedin-icon"/></a>
            <a href="https://github.com/iSteveB" alt="github" title="GitHub"><img src={githubIcon} alt="github-icon"/></a>
            <a href="https://codepen.io/isteveB" alt="codePen" title="CodePen"><img src={codepenIcon} alt="codepen-icon"/></a>
        </div>
    );
};

export default SocialNetwork;