const ctx2 = document.getElementById('chart-2');

var datasets2 = [{
        'label': 'Remote',
        'color': 'red',
        'value': 45.43
    },
    {
        'label': 'Hybrid',
        'color': 'blue',
        'value': 29.02
    },
    {
        'label': 'On-site',
        'color': 'green',
        'value': 25.55
    }
];

var labels2 = datasets2.map(data => data.label);
var colors2 = datasets2.map(data => data.color);
var values2 = datasets2.map(data => data.value);

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [
            {
                label: 'relative %',
                data: values2,
                borderWidth: 3
           }
        ]
    },
    options: {
		indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true
            }
        }
    }
});