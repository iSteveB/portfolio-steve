
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>© {year} - Steve Basse</p>
        </div>
    );
};

export default Footer;