## Integrantes:
- Beatriz Brito do Rosário - 2312130227
- Pedro Henrique Sousa Rodrigues - 2312130127
  

# 🚀 Funcionalidades Principais
- *Cadastro e Login de Usuários*: Um formulário permite que novos usuários sejam adicionados com nome e email.
- *Previsão de Tempo*: Mostra a previsão atual da região de Brasília e a previsão dos próximos sete dias.


# 🛠️ Tecnologias Utilizadas
- React: Biblioteca para construção da interface do usuário.
- Vite: Ferramenta de build para um ambiente de desenvolvimento rápido.
- Axios: Cliente HTTP para realizar requisições à API.
- WeatherAPI: O projeto utiliza uma API de previsão do tempo da WeatherAPI.com.


## Passo a Passo de Como Executar o Projeto:

*Obs: É necessário criar um arquivo .env na pasta front e criar a variavel VITE_WEATHER_API_KEY tendo como valor uma chave de API do WeatherAPI (VITE_WEATHER_API_KEY="sua-chave")*

Em um terminal rode:
```
git clone https://github.com/drsousr/T2React-TecnWeb.git
cd back
npx json-server db.json
```

Em outro terminal rode:
```
cd front
npm install
npm run dev
```

Abra seu navegador e acesse a porta que for indicada no seu terminal.
