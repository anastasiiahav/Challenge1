new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Zuurstof", "Waterstof", "CO2", "Stikstof"],
      datasets: [
        {
          label: "psi",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [730,572,174,357]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'ox'
      }
    }
});