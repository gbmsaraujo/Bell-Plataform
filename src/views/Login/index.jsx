import "./login.scss";
import LogoLogin from "./img/Logo.svg";
import AsideImg from "./img/aside_img.svg";
import Botao from "../../Components/Botao";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState();
	const [pwd, setPwd] = useState();

	const navigate = useNavigate();

	const handleLogin = async () => {
		const auth = {
			email,
			password: pwd,
		};
		try {
			const response = await axios.post(
				"https://cherry-custard-19143.herokuapp.com/api/v1/token",auth);
			document.cookie = `auth=${response.data.token};expires=${new Date(2100,0,1)}`;
			alert("Login Efetuado com Sucesso!");
			navigate("/home");
			setEmail("");
			setPwd("");
		} catch (err) {
			alert("Verifique seus dados e Tente novamente!!");
		}
	};

	return (
		<main className="ct-login">
			<aside className="ct-login__aside">
				<h1>Bell Platarform </h1>
				<p>Plataforma de Cadastramento de Usuários</p>
				<img src={AsideImg} alt="Imagem do Aside" />
			</aside>

			<section className="ct-login__section">
				<img src={LogoLogin} alt="Logo do Login" />

				<form className="form-group-login">
					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</form>

				<form className="form-group-login">
					<label htmlFor="pwd"> Senha </label>
					<input
						type="password"
						id="pwd"
						value={pwd}
						onChange={(e) => setPwd(e.target.value)}
					/>
				</form>

				<Botao
					login="Login"
					classe="btn-login"
					tipo="button"
					event={handleLogin}
				/>

				<p>
					Não tem uma conta?
					<span className="clique-cadastro"> Cadastre-se </span>
				</p>
			</section>
		</main>
	);
};

export default Login;
