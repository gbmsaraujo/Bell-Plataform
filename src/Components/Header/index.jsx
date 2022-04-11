import './header.scss'
import Logo from './imgs/Logo.svg'

const Header = ({home, sobre, login, registro, usuario, atualizar, cadastrar, sair, exitFunction}) =>{
    return(
        <header className='ct-header'>
            <div className='ct-header__content'>
                <img src={Logo} alt="Logo Bell Plataform" />
                <nav>
                    <ul>
                       <li>{home}</li>
                       <li>{sobre}</li>
                       <li>{login}</li>
                       <li>{registro}</li>
                       <li>{usuario}</li>
                       <li>{atualizar}</li>
                       <li>{cadastrar}</li>
                       <li onClick={exitFunction}>{sair}</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header