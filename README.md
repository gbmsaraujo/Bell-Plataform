# Bell Plataform

Desafio proposto para construir um sistema de cadastramento do Usuário, protótipo feito pelo figma. Foi utilizada a API enviada pela empresa para validar o login, cadastrar usuários com foto, listar todos os usuários cadastrados, pesquisar o usuário pelo id e ver a foto do usuário.

# Tecnologias Utilizadas

<ul>
  <li>React</li>
  <li>Sass</li>
  <li>Javascript</li>
 </ul>
 
 # Como executar o Front-end?
 
 É importante que você tenha o Node. Clone o Projeto, abra-o com o VS Code e no terminal execute o comando <stronger> npm install </stronger>.
 
 # Como executar a API?
 
 Para executar, é importante que você tenha o Node instalado em sua máquina e a API que está disponível aqui: <a href='https://drive.google.com/drive/folders/1LD2PKjLURxmqjE8D7McQxmamGt0qC-sp?usp=sharing'>API Cadastro</a>. Utilize o Insomnia para rodar a API e ter acesso a todas as rotas. 
 
# Orientações:
 
url = https://cherry-custard-19143.herokuapp.com/api/v1
Login: seuemail@dominio.com.br (Ex: pessoa@gmail.com)
Senha: password (literalmente é só digitar 'password' no campo de senha)

<ul>
  <li> /token - gera o token de autenticação (post) </li>
  <li> /user/create - criar novos usuários (post) </li>
  <li> /user/list - listar todos os usuários (get) </li>
  <li> /user/view/{id} - mostrar dados de apenas um usuário (get) </li>
  <li> /user/update - atualiza cadastro de usuário (post) </li>
  <li> /photo/save - cadastra foto de usuário (post) </li>
  <li> /photo/update - atualiza a foto do usuário (post) </li>
  <li> /photo/view/{user_id} - mostra foto do usuário (get) </li>
</ul>
 # Observações
 
<ul>
  <li>Em termos de layout: a parte de responsividade ainda não foi feita, mas pretendo aprimorar o projeto para incluir no meu portfólio; </li>
  <li>Ainda estou finalizando a parte de autenticação na API que foi enviada para mim; </li>
  <li>Futuramente disponibilizarei uma API feita por mim em Node.js, utilizando MySql e o ORM Sequelize para fazer alguns aprimoramentos no projeto e colocar em práticas meus conhecimentos em Node.js</li>
  <li> O Projeto estará em constante atualização </li>
</ul>

