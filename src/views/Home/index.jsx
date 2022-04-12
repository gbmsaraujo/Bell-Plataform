import Header from '../../Components/Header'
import './home.scss'
import Add from './imgs/icons/plus.svg'
import Users from './imgs/icons/users.svg'
import Update from './imgs/icons/update.svg'
import AsideImg from './imgs/aside-img.svg'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () =>{
    const navigate = useNavigate()
   
    const exit = () =>{
        document.cookie = `auth=; expires=${new Date(0)}`
        navigate('/')
    }

    return(
       
       <div className="ct-home">

           <Header sair='Sair' 
           exitFunction={exit}/>

           <main className='ct-main'>
               <section className='ct-main__section'>
               <h2>Bem-Vindo a Plataforma,</h2>
               <h3>Como podemos ajudar?</h3>

               <div className='choice-group'>
                <button onClick={e =>{navigate('/cadastro')}}><img src={Add} alt="Adicionar Usuário" /></button>
                <p> Cadastrar Usuários</p>
               </div>

               <div className='choice-group'>
                <button onClick={e =>{navigate('/users')}}><img src={Users} alt="Ver Usuários" /></button>
                <p> Ver Usuários Cadastrados </p>
               </div>

               <div className='choice-group'>
                <button onClick={e =>{navigate('/atualizer')}}><img src={Update} alt="Atualizar Usuários" /></button>
                <p> Atualizar Dados </p>
               </div>

               </section>

               <aside className='ct-main__aside' >
                   <img src={AsideImg} alt="Imagem Aside" />
               </aside>

           </main>
         
         <Footer />
       
        </div>
       
    )

}

export default Home