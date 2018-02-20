new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Zuurstof", "Waterstof", "CO2", "Stikstof"],
      datasets: [
        {
          label: "psi",
          backgroundColor: ["#ff9a3f", "#e34f43","#b22253","#790d42"],
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