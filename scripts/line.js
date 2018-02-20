new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [0,5,10,15],
    datasets: [{ 
        data: [100,500,1000,1500],
        label: "Afstand",
        borderColor: "#ff9a3f",
        fill: false
      }
    ]
  },
  options: {
    legend: {
            labels: {
                fontColor: "white",
                fontSize: 12
            }
        },
    title: {
      display: false,
      text: 'Afstand afgelegd over tijd'
    }
    
  }
});