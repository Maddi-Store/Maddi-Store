var colors = ['#a9b2b3','#8c7874','#a07b6c','#685444','#9f731d'];

/* large line chart */
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
         window.location.href = 'Mylah.html';
         break;
 
   }
}