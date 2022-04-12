const Botao = ({clique, login, cadastrar, atualizar, tipo, classe, event}) =>{
    return(
        <button type={tipo} className={classe} onClick={event}>{[clique, login, cadastrar,atualizar]}</button>
    )
}

export default Botao