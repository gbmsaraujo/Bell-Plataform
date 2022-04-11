const Botao = ({clique, login, cadastrar,atualizar, tipo, classe}) =>{
    return(
        <button type={tipo} className={classe}>{[clique, login, cadastrar,atualizar]}</button>
    )
}

export default Botao