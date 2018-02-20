new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Brood", "Vlees", "Groenten", "Fruit"],
      datasets: [{
        label: "Stuks",
        backgroundColor: ["#ff9a3f", "#e34f43","#b22253","#790d42"],
        data: [2478,5267,734,784]
      }]
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
        text: 'Eten'
      }
    }
});