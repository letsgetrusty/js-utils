const ctx = document.getElementById('chart-1');

var datasets = [{
        'label': 'AI/ML',
        'color': 'red',
        'value': 12.00
    },
    {
        'label': 'Backend',
        'color': 'blue',
        'value': 19.02
    },
    {
        'label': 'Embedded/low-level',
        'color': 'green',
        'value': 45.55
    },
    {
        'label': 'Finance',
        'color': 'orange',
        'value': 5.23
    },
    {
        'label': 'Blockchain/Web3',
        'color': 'purple',
        'value': 26.52
    },
    {
        'label': 'Desktop/mobile',
        'color': 'yellow',
        'value': 3.25
    },
    {
        'label': 'Other',
        'color': 'grey',
        'value': 1.51
    }
];

datasets = datasets.sort((a, b) => b.value - a.value);
var labels = datasets.map(data => data.label);
var colors = datasets.map(data => data.color);
var values = datasets.map(data => data.value);

var percentFormatter = (value, ctx) => {
    let sum = 0;
    let dataArr = ctx.chart.data.datasets[0].data;
    dataArr.map(data => {
        sum += data;
    });
    let percentage = (value*100 / sum).toFixed(2)+"%";
    return percentage;
};

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'market share %',
                data: values,
                borderWidth: 1
           }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'left'
            },
            title: {
                display: true
            },
            datalabels: {
                formatter: percentFormatter
            }
        }
    }
});