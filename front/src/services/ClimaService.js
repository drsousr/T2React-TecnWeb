// src/services/ClimaService.js
import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const url = `https://api.weatherapi.com/v1/forecast.json`;

export async function buscarPrevisao(cidade = "Brasília") {

    const resposta = await axios.get(url, {
      params: {
        key: apiKey,
        q: cidade,
        days: 7,
        lang: "pt"
      }
    });

    return {
      sucesso: true,
      dados: resposta.data.forecast.forecastday,
      local: resposta.data.location.name
    };

}

// ícone: dia.day.condition.icon
// temp: dia.day.avgtemp_c
// descrição: dia.day.condition.text
