var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
		   "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
		   "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  datasets: [{
    data: [5, 4, 4, 1, 4, 2, 4, 1, 3, 2, 
		   4, 7, 3, 2, 0, 6, 4, 5, 1, 6,
		   0, 3, 4, 7, 5, 2, 7, 4, 0],
    backgroundColor: colors[3],
    borderColor: colors[0],
    borderWidth: 4,
    pointBackgroundColor: colors[0]
  }]
};

if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      yAxes: [{
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