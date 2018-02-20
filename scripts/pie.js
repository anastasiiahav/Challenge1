new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Brood", "Vlees", "Groenten", "Fruit"],
      datasets: [{
        label: "Stuks",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
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