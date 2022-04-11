import Header from '../../Components/Header'
import './home.scss'
import Add from './imgs/icons/plus.svg'
import Users from './imgs/icons/users.svg'
import Update from './imgs/icons/update.svg'
import AsideImg from './imgs/aside-img.svg'
import Footer from '../../Components/Footer'

const Home = () =>{
    return(
       
       <div className="ct-home">

           <Header sair='Sair' />

           <main className='ct-main'>
               <section className='ct-main__section'>
               <h2>Bem-Vindo a Plataforma,</h2>
               <h3>Como podemos ajudar?</h3>

               <div className='choice-group'>
                <button><img src={Add} alt="Adicionar Usuário" /></button>
                <p> Cadastrar Usuários</p>
               </div>

               <div className='choice-group'>
                <button><img src={Users} alt="Adicionar Usuário" /></button>
                <p> Ver Usuários Cadastrados </p>
               </div>

               <div className='choice-group'>
                <button><img src={Update} alt="Adicionar Usuário" /></button>
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