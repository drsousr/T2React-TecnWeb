import { useEffect, useState } from "react";
import { buscarPrevisao } from "../services/ClimaService";

function PrevisaoClima() {
  const [previsao, setPrevisao] = useState([]);
  const [local, setLocal] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      const resposta = await buscarPrevisao("Brasília");
      if (resposta.sucesso) {
        setPrevisao(resposta.dados);
        setLocal(resposta.local);
      } else {
        setErro(resposta.mensagem);
      }
    }
    carregar();
  }, []);

  if (erro) return <p>{erro}</p>;
  if (!previsao.length) return <p>Carregando previsão...</p>;


  return (
    <>
        <header className="previsao-header">
 
                <div className="header">
                        <img style={{height: '100px', width: '100px'}} src="/src/assets/icon.png"/>
                        <h1 className="title">Previsão do Tempo</h1>
                </div>
        </header>


        <nav>
            <div className="previsao-atual">
                            <img src={previsao[0].day.condition.icon} alt="ícone clima" />
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
                                <img src={dia.day.condition.icon} alt="icon" />
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
