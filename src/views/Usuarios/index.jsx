import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./usuarios.scss";

const Usuarios = () => {
	return (
		<div className="ct-usuarios">
			<Header usuarios="usuarios" />

			<main className="ct-usuarios__main">
				<section className="ct-usuarios__section">
					<h2> Usuários Cadastrados </h2>

					<table>
						<tr>
							<th>Nome</th>

							<th>E-mail</th>

							<th>Telefone</th>

							<th>Cadastrado Em</th>
							<th> Foto </th>
						</tr>

                        <tr>
                            <td>Gabriel</td>
                            <td>gbmsaraujo</td>
                        </tr>
					</table>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Usuarios;
