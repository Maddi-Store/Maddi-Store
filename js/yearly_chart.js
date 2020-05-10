var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine2019 = document.getElementById("chLine2019");
var chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    data: [59, 44, 43, 31, 24, 42, 44, 43, 34, 29, 45, 77],
    backgroundColor: colors[3],
    borderColor: colors[0],
    borderWidth: 1,
    pointBackgroundColor: colors[0]
  }]
};

if (chLine2019) {
  new Chart(chLine2019, {
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

var chLine2020 = document.getElementById("chLine2020");
var chartData2020 = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [{
    data: [59, 70, 64, 57],
    backgroundColor: colors[3],
    borderColor: colors[0],
    borderWidth: 1,
    pointBackgroundColor: colors[0]
  }]
};

if (chLine2020) {
  var lineChart2020 = new Chart(chLine2020, {
  type: 'bar',
  data: chartData2020,
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

chLine2020.onclick = function(e) 
{
   var slice = lineChart2020.getElementAtEvent(e);
   if (!slice.length) return; // return if not clicked on slice
   var label = slice[0]._model.label;
   switch (label) {
      // add case for each label/slice
      case 'Feb':
//         alert('clicked on Feb');
         window.location.href = 'report_monthly.html';
         break;
 
   }
}