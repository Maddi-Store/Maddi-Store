var colors = ['#a9b2b3','#8c7874','#a07b6c','#685444','#9f731d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
	labels: ["Mylah", "Rezq", "Fajr", "Etta", "Gello"],
	datasets: [{
	data: [2, 1, 2, 1, 1],
	backgroundColor: [
	colors[0],
	colors[1],
	colors[2],
	colors[3],
	colors[4]
	],
	borderColor: [
	colors[0],
	colors[0],
	colors[0],
	colors[0],
	colors[0]
	],
	borderWidth: 1
	}]
};

if (chLine) {
  new Chart(chLine, {
  type: 'bar',
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