import { callAPI } from "./fetch.js";

let FechaUf = [];
let ValorUf = [];
let FechaUf_2 = [];
let ValorUf_2 = [];

const getData = async () => {
  const Indicadores = await callAPI("https://mindicador.cl/api/uf");
  const arrayindicadores = Indicadores.serie;

  for (var i = 0; i < arrayindicadores.length; i++) {
    FechaUf_2 = arrayindicadores[i].fecha;      
    ValorUf_2 = arrayindicadores[i].valor;
    FechaUf.push(FechaUf_2);
    ValorUf.push(ValorUf_2);
  }

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: "line",
    data: {
      labels: FechaUf,
      datasets: [
        {
          label: "Valores",
          data: ValorUf,
          borderWidth: 1,
          borderColor: 'green',
        },
      ],
    },
      
   options: {
        scales: {
          xAxes: [{
              gridLines: {
                  display:false,
              }
          }]
        },
        title: {
          display: true,
          text: 'Valores UF Mensuales',
          fontSize: 28,
          padding : 28,
          fontcolor: '#12619c', 
        },
        legend: {
          position: 'top',
          labels: {
              padding: 20,
              boxWidth: 15,
              fontFamily: 'system-ui',
              fontColor: 'black',
          }
        },
        layout: {
          padding: {
              right: 50,
          }
        },
        tooltips: {
          backgroundColor: 'green',
          titleFontSize: 14,
          xpadding: 14,
          bodyFontSize: 9,
          bodySpacing: 6,
          mode: 'x'
        },
        elements: {
          line: {
              borderWidth: 6,
              fill: false,
          },
          point: {
              radius: 4,
              bordeWidth: 2,
              backgroundColor: 'white',
              hoverRadius: 6,
              hoverBorderWidth: 2,                    
          }

      }
   }

  });
};

getData();
