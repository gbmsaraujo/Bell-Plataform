import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./usuarios.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Usuarios = () => {
	//States e Hooks
	const navigate = useNavigate();
	const [usuarios, setUsuarios] = useState([]);

	//Get Usuários
	useEffect(() => {
		const cookie = `Bearer ${document.cookie.split("=")[1]}`;
		const getUsers = async () => {
			try {
				const response = await axios.get(
					"https://cherry-custard-19143.herokuapp.com/api/v1/user/list",
					{ headers: { Authorization: cookie } }
				);
				setUsuarios(response.data.result);
			} catch (err) {
				alert("Erro na Solicitação, verifique e tente novamente");
			}
		};

		getUsers();
	}, []);

	console.log(usuarios);

	//Funções para navegação do header

	const exitPage = () => {
		document.cookie = `auth=;expires=${new Date(0)}`;
		navigate("/");
	};

	const goRegister = () => {
		navigate("/cadastro");
	};
	const goUpdate = () => {
		navigate("/atualizar");
	};
	const goHome = () => {
		navigate("/home");
	};

	return (
		<div className="ct-usuarios">
			<Header
				usuarios="usuarios"
				exitFunction={exitPage}
				registerFunction={goRegister}
				updateFunction={goUpdate}
				homeFunction={goHome}
			/>

			<main className="ct-usuarios__main">
				<section className="ct-usuarios__section">
					<h2> Usuários Cadastrados </h2>

					<table>
						<thead>
							<td>Nome</td>

							<td>E-mail</td>

							<td>Telefone</td>

							<td>Cadastrado Em</td>
							<td> Foto </td>
						</thead>

						{usuarios.map((item) => {
							return (
								<tr>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.mobile_phone}</td>
									<td>
										{item.created_at.slice(8, 10)}/
										{item.created_at.slice(5, 7)}/
										{item.created_at.slice(0, 4)}
									</td>
									{item.photo ? (
										<td>
											<a
												href={item.photo.photo}
												target="_blank"
												rel="noreferrer noopener"
											>
												Ver Foto
											</a>
										</td>
									) : (
										<td>null</td>
									)}
								</tr>
							);
						})}
					</table>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Usuarios;
