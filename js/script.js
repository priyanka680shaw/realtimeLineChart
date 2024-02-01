const myChart = document.querySelector("#mychart");

const data ={
    labels: [],
    datasets: [{
        label: 'priyanka Salary',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
}
const config = {
    type: 'line',
    data: data,
}

const lineChart = new Chart(myChart,config);
console.log(lineChart);
// lineChart.data.labels.push('august');
// lineChart.data.datasets[0].data.push(99);

//lineChart.update();

function updateChart(){
    lineChart.data.labels.push(lineChart.data.datasets[0].data.length);
    lineChart.data.datasets[0].data.push(Math.random()*100);
    lineChart.update();
    //console.log(lineChart.data.datasets[0].data.length);
}
updateChart();
setInterval(updateChart,1000);