import "./header.scss";
import Logo from "./imgs/Logo.svg";

const Header = ({ home, cadastro, usuarios, atualizar, sair, exitFunction, homeFunction, userFunction, updateFunction, registerFunction, loginFunction}) => {
	const menu = () => {
		if (cadastro === "cadastro") {
			return (
				<>
					<li onClick={homeFunction}> Home </li>
					<li onClick={userFunction}> Usuarios </li>
					<li onClick={updateFunction}> Atualizar </li>
					<li onClick={exitFunction}> Sair </li>
				</>
			);
		} else if (usuarios === "usuarios") {
			return (
				<>
					<li onClick={homeFunction} > Home </li>
					<li onClick={registerFunction}> Cadastrar </li>
					<li onClick={updateFunction} > Atualizar </li>
					<li onClick={exitFunction}> Sair </li>
				</>
			);
		} else if (atualizar === "atualizar") {
			return (
				<>
					<li onClick={homeFunction}> Home </li>
					<li onClick={registerFunction}> Cadastrar </li>
					<li onClick={userFunction}> Usuários </li>
					<li onClick={exitFunction}> Sair </li>
				</>
			);
		} else if (home === "home") {
			return (
				<>
					<li onClick={homeFunction}> Home </li>
					<li> Sobre </li>
					<li onClick={loginFunction}> Login </li>
					<li> Cadastre-se </li>
				</>
			);
		} else {
			return (
				<>
					<li onClick={exitFunction}> Sair </li>
				</>
			);
		}
	}
	return (
		<header className="ct-header">
			<div className="ct-header__content">
				<img src={Logo} alt="Logo Bell Plataform" />
				<nav>
					<ul>{menu()}</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
