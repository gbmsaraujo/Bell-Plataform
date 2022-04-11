import './footer.scss';
import Fb from './Icons/facebook.svg'
import Twitter from './Icons/twitter.svg'
import Instagram from './Icons/instagram.svg'

const Footer = () =>{
    return(
        <footer className='ct-footer'>
            <div className='ct-footer__content'>
                <p>Segue a Gente Aí!</p>
                <section className="social-medias">
                    <img src={Instagram} alt="Ícone Instagram" />
                    <img src={Fb} alt="Ícone Facebook" />
                    <img src={Twitter} alt="Ícone Twitter" />
                </section>
            </div>
        </footer>
    )
}

export default Footer

