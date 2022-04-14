import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../Components/Botao";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./atualizar.scss";

const Atualizar = () => {
	const cookie = `Bearer ${document.cookie.split("=")[1]}`;
	const [users, setUsers] = useState([]);
	const [idUser, setIdUser] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [mobile_phone, setMobile_phone] = useState();
	const [usuario, setUsuario] = useState([]);
	/*     const [send, setSend] = useState(false)
	 */
	const [photoStatus, setPhotoStatus] = useState();

	const filesElement = useRef(null);
	const navigate = useNavigate();

	//Funções de Atualização de Dados e Fotos do Usuário

	const sendFile = async () => {
		const dataForm = new FormData();
		for (const file of filesElement.current.files) {
			dataForm.append("file", file);
		}
		dataForm.append("email", email);
		dataForm.append("user_id", idUser);

		if (photoStatus === null) {
			try {
				const response = await axios.post(
					"https://cherry-custard-19143.herokuapp.com/api/v1/photo/save",
					dataForm,
					{ headers: { Authorization: cookie } }
				);
				console.log(response);
				alert("Upload da Foto Realizada com Sucesso");
			} catch (err) {
				console.log(err);
			}
		} else {
			try {
				const response = await axios.post(
					"https://cherry-custard-19143.herokuapp.com/api/v1/photo/update",
					dataForm,
					{ headers: { Authorization: cookie } }
				);
				console.log(response);
				alert("Atualização da Foto Realizada com Sucesso");
			} catch (err) {
				console.log(err);
			}
		}
	};

	const updateUser = async () => {
		const update = {
			name,
			email,
			mobile_phone,
			user_id: idUser,
		};

		try {
			const response = await axios.post(
				"https://cherry-custard-19143.herokuapp.com/api/v1/user/update",
				update,
				{ headers: { Authorization: cookie } }
			);
			alert("Atualização realizada com sucesso");
			console.log(response.data);
		} catch (err) {
			console.log(`Erro na atualização dos dados: ${err}`);
		}
	};
	console.log(idUser);

	//Busca de Dados do Usuário com o Get
	useEffect(() => {
		const cookie = `Bearer ${document.cookie.split("=")[1]}`;
		const getAPI = async () => {
			try {
				const response = await axios.get(
					"https://cherry-custard-19143.herokuapp.com/api/v1/user/list",
					{ headers: { Authorization: cookie } }
				);
				setUsers(response.data.result);
			} catch (err) {
				console.log(`Erro na Busca dos Usuários: ${err}`);
			}
		};

		getAPI();
	}, []);

	useEffect(() => {
		const cookie = `Bearer ${document.cookie.split("=")[1]}`;
		const getUsuario = async () => {
			try {
				const response = await axios.get(
					`https://cherry-custard-19143.herokuapp.com/api/v1/user/view/${idUser}`,
					{ headers: { Authorization: cookie } }
				);
				setUsuario(response.data);
				setName(response.data.result.name);
				setEmail(response.data.result.email);
				setMobile_phone(response.data.result.mobile_phone);
				setPhotoStatus(response.data.result.photo);
			} catch (err) {
				console.log(`Erro na Busca do Usuário pelo Id: ${err}`);
			}
		};

		getUsuario();
	}, [idUser]);

	//Funções de navegação

	const goHome = () => navigate("/home");
	const goRegister = () => navigate("/cadastro");
	const goUsers = () => navigate("/users");

	const exit = () => {
		document.cookie = `auth=; expires=${new Date(0)}`;
		navigate("/");
	};

	console.log(usuario);
	return (
		<div className="ct-atualizar">
			<Header
				atualizar="atualizar"
				homeFunction={goHome}
				registerFunction={goRegister}
				userFunction={goUsers}
				exitFunction={exit}
			/>

			<main className="ct-atualizar__main">
				<section className="ct-atualizar__section">
					<h2> Atualização Cadastral </h2>

					<select
						id="users"
						onChange={(e) => setIdUser(e.target.value)}
					>
						<option value="" selected={true} disabled={true}>
							Selecione um Usuário
						</option>

						{users.map((user) => {
							return <option value={user.id}>{user.name}</option>;
						})}
					</select>

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
						<label htmlFor="tel">Telefone</label>
						<input
							type="tel"
							id="tel"
							value={mobile_phone}
							onChange={(e) => {
								setMobile_phone(e.target.value);
							}}
						/>
					</form>

					<Botao
						classe="btn-send"
						cadastrar="Atualizar"
						event={updateUser}
					/>

					{photoStatus === null ? (
						<form className="formgp-picture-update">
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
								classe="btn-upload-update"
								tipo="button"
								cadastrar="Upload"
								event={sendFile}
							/>
						</form>
					) : (
						<form className="formgp-picture-update">
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
								classe="btn-upload-update"
								tipo="button"
								cadastrar="Update"
								event={sendFile}
							/>
						</form>
					)}
				</section>
			</main>

			<Footer />
		</div>
	);
};
export default Atualizar;
