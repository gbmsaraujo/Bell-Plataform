import axios from "axios";
import { useState } from "react";
import Botao from "../../Components/Botao";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./cadastro.scss";

const Cadastro = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [data, setData] = useState();
	const [picture, setPicture] = useState();

	const handleSubmission = async () => {
		const sendData = {
			name,
			email,
			data,
		};
		try {
			const responseUser = await axios.post(
				"https://cherry-custard-19143.herokuapp.com/api/v1/user/create",
				sendData,
				{ headers: { Authorization: document.cookie.split('=')[1] } })
                alert(responseUser.data)
			
			}
		 catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="ct-cadastro">
			<Header cadastro="cadastro" />

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
						<label htmlFor="data">Cadastrado em</label>
						<input
							type="date"
							id="data"
							value={data}
							onChange={(e) => {
								setData(e.target.value);
							}}
						/>
					</form>

					<form className="form-group">
						<label htmlFor="picture">Selecione Uma Foto</label>
						<input
							type="file"
							id="picture"
							onChange={(e) => setPicture(e.target.files[0])}
						/>
					</form>

					<Botao classe="btn-send" cadastrar="Cadastrar" event={handleSubmission} />
				</section>
			</main>

			<Footer />
		</div>
	);
};
export default Cadastro;
