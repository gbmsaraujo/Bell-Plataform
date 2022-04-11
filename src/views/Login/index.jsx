import './login.scss'
import LogoLogin from './img/Logo.svg'
import AsideImg from './img/aside_img.svg'
import Botao from  '../../Components/Botao'

const Login = () =>{

    return(
        <main className='ct-login'>
            <aside className='ct-login__aside'>
                <h1>Bell Platarform </h1>
                <p>Plataforma de Cadastramento de Usuários</p>
                <img src={AsideImg} alt="Imagem do Aside" />
            </aside>

            <section className='ct-login__section'> 
                <img src={LogoLogin} alt="Logo do Login" />

                <form className='form-group'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id='email'/>
                </form>

                <form className='form-group'>
                    <label htmlFor="pwd"> Senha </label>
                    <input type="password" id='pwd' />
                </form>

                <Botao login="Login" 
                classe='btn-login'/>

                <p>  Não tem uma conta? <span className='clique-cadastro'>  Cadastre-se </span> </p>
            
            </section>

            
        </main>
        
    )
}

export default Login

