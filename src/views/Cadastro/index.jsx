import Botao from "../../Components/Botao"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import './cadastro.scss'

const Cadastro = () =>{
    return(
       
        <div className="ct-cadastro">
 
            <Header cadastro='cadastro' />
 
            <main className='ct-cadastro__main'>

                <section className='ct-cadastro__section'>
                <h2> Cadastro de Usuários </h2>

                <form className='form-group'>
                    <label htmlFor="name"> Nome Completo</label>
                    <input type="text" id='name'/>
                </form>

                <form className='form-group'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id='email'/>
                </form>

                <form className='form-group'>
                    <label htmlFor="data">Cadastrado em</label>
                    <input type="date" id='data'/>
                </form>
                
                <form className='form-group'>
                    <label htmlFor="picture">Selecione Uma Foto</label>
                    <input type="file" id='picture'/>
                </form>

                <Botao classe='btn-send'
                        cadastrar='Cadastrar'
                />
        
            </section>
 

 
            </main>
          
          <Footer />
        
         </div>
        
     )
}
export default Cadastro