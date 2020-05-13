var colors = ['#a9b2b3','#8c7874','#a07b6c','#685444','#9f731d'];

/* large line chart */
var income = ['600.000', '275.000', '400.000', '200.000', '200.000'];
var products = [2, 1, 2, 1, 1];

var chPie = document.getElementById("chPie");
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
	]
	}]
};

if (chPie) {
  pieChart = new Chart(chPie, {
  type: 'pie',
  data: chartData,
  options: {
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function(tooltipItems, data) { 
          return "Products sold: " + products[tooltipItems.index] + ", Total income: Rp." + income[tooltipItems.index];
        }
      }
    }
  }
  });
}

chPie.onclick = function(e) 
{
   var slice = pieChart.getElementAtEvent(e);
   if (!slice.length) return; // return if not clicked on slice
   var label = slice[0]._model.label;
   switch (label) {
      // add case for each label/slice
      case 'Mylah':
//         alert('clicked on Feb');
         window.location.href = 'Mylah_Manager.html';
         break;
 
   }
}