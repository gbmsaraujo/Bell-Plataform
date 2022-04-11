import Botao from "../../Components/Botao"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import './atualizar.scss'

const Atualizar = () =>{
    return(
       
        <div className="ct-atualizar">
 
            <Header atualizar='atualizar' />
 
            <main className='ct-atualizar__main'>

                <section className='ct-atualizar__section'>
                <h2> Atualização Cadastral </h2>

                <select id="users">
                    <option value="" selected={true} disabled={true}> Selecione um Usuário </option>
                </select>

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
                        cadastrar='Atualizar'
                />
        
            </section>
 

 
            </main>
          
          <Footer />
        
         </div>
        
     )
}
export default Atualizar