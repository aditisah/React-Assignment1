import './Logo.css';
import LogoImg from '../image/google.png';
function Logo(){
    return(
        <div className="logo">
            <img src={LogoImg} alt='logo'/>
        </div>
    )
}

export default Logo;