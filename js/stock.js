var colors = ['#aab0af','#a39290','#ae8573','#796552','#724338','#a4771e', '#8d8e89'];

var stock = document.getElementById("stock");
var stockData = {
  labels: ["Mylah", "Rezq", "fajr", "Etta", "Mané", "Gello", "Dala"],
  datasets: [{
    data: [6, 7, 4, 8, 5, 10, 6],
    backgroundColor: colors,
    borderColor: colors[0],
    borderWidth: 1,
    pointBackgroundColor: colors[0]
  }]
};

if (stock) {
  new Chart(stock, {
  type: 'horizontalBar',
  data: stockData,
  options: {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}
