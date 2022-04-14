import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../Components/Botao";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./cadastro.scss";

const Cadastro = () => {
	//States e Hooks
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [mobile_phone, setMobile] = useState();
	const [id, setId] = useState();
	const [send, setSend] = useState(false);
	const filesElement = useRef(null);

	const navigate = useNavigate();
	const cookie = `Bearer ${document.cookie.split("=")[1]}`;

	//Função para cadastrar usuários e enviar foto
	const sendFile = async () => {
		const dataForm = new FormData();
		for (const file of filesElement.current.files) {
			dataForm.append("file", file);
		}
		dataForm.append("email", email);
		dataForm.append("user_id", id);
		const response = await axios.post(
			"https://cherry-custard-19143.herokuapp.com/api/v1/photo/save",
			dataForm,
			{ headers: { Authorization: cookie } }
		);

		console.log(response);
		alert("Upload da Foto Realizada com Sucesso");
		navigate("/home");
	};

	const handleSubmission = async () => {
		const sendData = {
			name,
			email,
			mobile_phone,
		};
		try {
			const responseUser = await axios.post(
				"https://cherry-custard-19143.herokuapp.com/api/v1/user/create",
				sendData,
				{ headers: { Authorization: cookie } }
			);
			console.log(responseUser.data);
			setId(responseUser.data.result.id);
			setSend(true);
			alert("Cadastro Efetuado Com Sucesso");
		} catch (err) {
			alert("Preencha Todos os Dados Corretamente");
		}
	};

	//Funções de Navegação

	const goHome = () => navigate("/home");
	const goUsers = () => navigate("/users");
	const goUpdate = () => navigate("/atualizar");
	const exitPage = () => navigate("/");

	return (
		<div className="ct-cadastro">
			<Header
				cadastro="cadastro"
				homeFunction={goHome}
				userFunction={goUsers}
				updateFunction={goUpdate}
				exitFunction={exitPage}
			/>

			<main className="ct-cadastro__main">
				<section className="ct-cadastro__section">
					<h2> Cadastro de Usuários </h2>

					<form className="form-group">
						<label htmlFor="name"> Nome Completo</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</form>

					<form className="form-group">
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

					<form className="form-group">
						<label htmlFor="data">Telefone</label>
						<input
							type="tel"
							id="data"
							value={mobile_phone}
							onChange={(e) => {
								setMobile(e.target.value);
							}}
						/>
					</form>

					<Botao
						classe="btn-send"
						cadastrar="Cadastrar"
						event={handleSubmission}
					/>

					{send === true ? (
						<form className="formgp-picture">
							<div>
								<label htmlFor="picture">
									Selecione Uma Foto
								</label>
								<input
									type="file"
									id="picture"
									multiple
									ref={filesElement}
								/>
							</div>
							<Botao
								classe="btn-upload"
								tipo="button"
								cadastrar="Upload"
								event={sendFile}
							/>
						</form>
					) : null}
				</section>
			</main>

			<Footer />
		</div>
	);
};
export default Cadastro;
