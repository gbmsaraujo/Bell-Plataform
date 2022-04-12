import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Usuarios from "./views/Usuarios";
import Home from "./views/Home";
import Cadastro from "./views/Cadastro";
import Atualizar from "./views/Atualizar";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Login />} />
                <Route  path="/home" element={<Home />} />
                <Route  path="/users" element={<Usuarios />} />
                <Route  path="/cadastro" element={<Cadastro />} />
                <Route  path="/atualizar" element={<Atualizar />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router