import "./header.scss";
import Logo from "./imgs/Logo.svg";

const Header = ({ home, cadastro, usuarios, atualizar, sair, exitFunction, homeFunction, userFunction, updateFunction }) => {
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
					<li> Home </li>
					<li> Cadastrar </li>
					<li> Atualizar </li>
					<li onClick={exitFunction}> Sair </li>
				</>
			);
		} else if (atualizar === "atualizar") {
			return (
				<>
					<li> Home </li>
					<li> Cadastrar </li>
					<li> Usuários </li>
					<li onClick={exitFunction}> Sair </li>
				</>
			);
		} else if (home === "home") {
			return (
				<>
					<li> Home </li>
					<li> Sobre </li>
					<li> Login </li>
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
	};
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
