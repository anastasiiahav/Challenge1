new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Water"],
      datasets: [
        {
          label: "Liters",
          backgroundColor: ["#3e95cd"],
          data: [99]
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
        text: 'Water'
      }
    }
});