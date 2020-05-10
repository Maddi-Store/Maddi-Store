var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chMonthFeb = document.getElementById("chMonthFeb");
var chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
		   "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
		   "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  datasets: [{
    data: [5, 3, 1, 1, 4, 2, 0, 1, 3, 2, 
		   4, 1, 3, 2, 0, 2, 4, 5, 1, 2,
		   0, 3, 4, 1, 5, 2, 7, 4, 0],
    backgroundColor: colors[3],
    borderColor: colors[0],
    borderWidth: 1,
    pointBackgroundColor: colors[0]
  }]
};

if (chMonthFeb) {
  var ChartFeb = new Chart(chMonthFeb, {
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

chMonthFeb.onclick = function(e) 
{
   var slice = ChartFeb.getElementAtEvent(e);
   if (!slice.length) return; // return if not clicked on slice
   var label = slice[0]._model.label;
   switch (label) {
      // add case for each label/slice
      case '27':
//         alert('clicked on Feb');
         window.location.href = 'report_daily.html';
         break;
 
   }
}