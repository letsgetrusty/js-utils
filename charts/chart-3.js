const ctx3 = document.getElementById('chart-3');

var datasets3 = [{
        'label': 'North America',
        'color': 'red',
        'value': 61.30
    },
    {
        'label': 'Latin America',
        'color': 'blue',
        'value': 3.02
    },
    {
        'label': 'Western Europe',
        'color': 'green',
        'value': 25.49
    },
    {
        'label': 'Eastern Europe',
        'color': 'orange',
        'value': 3.23
    },
    {
        'label': 'Asia',
        'color': 'purple',
        'value': 1.4
    }
];

datasets3 = datasets3.sort((a, b) => b.value - a.value);
var labels3 = datasets3.map(data => data.label);
var colors3 = datasets3.map(data => data.color);
var values3 = datasets3.map(data => data.value);

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: labels3,
        datasets: [
            {
                label: 'market share %',
                data: values3,
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
            }
        }
    }
});