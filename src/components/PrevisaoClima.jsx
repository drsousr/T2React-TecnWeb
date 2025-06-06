import { useEffect, useState } from "react";
import { buscarPrevisao } from "../services/ClimaService";
import { Link } from 'react-router-dom';

function PrevisaoClima() {
  const [previsao, setPrevisao] = useState([]);
  const [local, setLocal] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarPrevisao() {
      try {
        const resposta = await buscarPrevisao("Brasília");

        if (resposta.sucesso) {
          setPrevisao(resposta.dados);
          setLocal(resposta.local);
          setErro(""); // Limpa erro anterior se houver
        } else {
          setErro(resposta.mensagem || "Erro desconhecido ao buscar a previsão.");
          setPrevisao([]);
        }
      } catch (e) {
        setErro("Erro de conexão ou inesperado.");
        setPrevisao([]);
      }
    }

    carregarPrevisao();
  }, []);

  if (erro) return <p>{erro}</p>;
  if (!previsao.length) return <p>Carregando previsão...</p>;

  return (
    <>
      <header className="previsao-header">

        <Link to={"/login"}>
        <div className="AcessarConta">
          <img className="iconUser" src="../src/icons/user.png" alt="Usuário" />
        </div>
        </Link>
        <div className="header">
          <img style={{ height: 100, width: 100 }} src="/src/assets/icon.png" alt="Ícone do App" />
          <h1 className="title">Previsão do Tempo</h1>
        </div>
      </header>

      <nav>
        <div className="previsao-atual">
          <img src={previsao[0].day.condition.icon} alt="Ícone clima" />
          <h2>{Math.round(previsao[0].day.avgtemp_c)}°</h2>
          <div>
            <strong>{previsao[0].day.condition.text}</strong><br />
            <span>{local}</span>
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="previsao-semanal">
          {previsao.map((dia, idx) => (
            <div key={idx} className="dia">
              <p><strong>{formatarDia(dia.date)}</strong></p>
              <img src={dia.day.condition.icon} alt="Ícone do dia" />
              <p>{Math.round(dia.day.avgtemp_c)}°</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

function formatarDia(dataStr) {
  const dias = ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."];
  const d = new Date(dataStr);
  return dias[d.getDay()];
}

export default PrevisaoClima;
