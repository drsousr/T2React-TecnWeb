import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [users, setUsers] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Erro ao buscar usuários:", err));
  }, []);

  
  const verificarLogin = () => {
    const usuarioValido = users.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioValido) {
      navigate("/previsaoclima");
    } else {
      alert("Email ou senha inválidos.");
    }
  };


  const CadastrarUser = () => {
    if (!newEmail || !newPassword) {
      alert("Preencha todos os campos!");
      return;
    }

    const jaexiste = users.some((user) => user.email === newEmail);

    if (jaexiste) {
      alert("Usuário já existente.");
      return;
    }

    const novoUsuario = { email: newEmail, password: newPassword };

    axios.post("http://localhost:3000/users", novoUsuario)
      .then(res => {
        setUsers([...users, res.data]); //att o estado local
        alert("Usuário criado com sucesso!");
        setNewEmail("");
        setNewPassword("");
      })
      .catch(err => {
        console.error("Erro ao criar usuário:", err);
        alert("Erro ao criar usuário.");
      });
  };


  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}
    >
      <section className="sectionLogin">
        <header className="headerLogin">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="icon" src="../src/assets/user.png" alt="ícone de usuário" />
            <span>Acessar Conta</span>
          </div>
        </header>

        <div className="infsUser">
          <div className='containerLogin'>
            <div className="SInfs">
              <span className="Tittle">Email:</span>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="SInfs">
              <span className="Tittle">Senha:</span>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button onClick={verificarLogin}>Entrar</button>
          </div>
        </div>
      </section>

      <section className="cadastrar">
        <header className="SignHeader">
          <img className="icon" src="../src/assets/cad.png" alt="" />
          <span>Cadastrar</span>
        </header>

        <div className="infsCad">
          <div className="BoxCad">
            <span className='Tittle'>Email:</span>
            <input
              type="email"
              placeholder='Digite um email'
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>

          <div className="BoxCad">
            <span className='Tittle'>Senha:</span>
            <input
              type="text"
              placeholder='Digite uma senha'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button onClick={CadastrarUser}>Criar Conta</button>
        </div>
      </section>
    </div>
  );
}

export default Login;