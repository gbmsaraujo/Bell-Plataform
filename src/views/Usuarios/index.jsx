import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./usuarios.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Usuarios = () => {
	const date = new Date()
	const [usuarios, setUsuarios] = useState([])
	
	useEffect(()=>{
		const cookie = `Bearer ${document.cookie.split("=")[1]}`
		const getUsers = async () =>{
			try{
			const response = await axios.get('https://cherry-custard-19143.herokuapp.com/api/v1/user/list',
			{headers: {Authorization: cookie } })
			setUsuarios(response.data.result)
			}
			catch(err){
				console.log(err)
			}
		}

		getUsers()
	
	}, [])

	console.log(usuarios)

	

	return (
		<div className="ct-usuarios">
			<Header usuarios="usuarios" />

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

						{usuarios.map(item=>{
							return(
							<tr>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.mobile_phone}</td>
								<td>{item.created_at.slice(8,10)}/{item.created_at.slice(5,7)}/{item.created_at.slice(0,4)}</td>
								{(item.photo)? <td><a href={item.photo.photo}> Ver Foto </a></td>: <td>null</td> }
							</tr>
							)
						})}
						
                        
					</table>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Usuarios;
