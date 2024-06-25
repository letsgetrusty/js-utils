const ctx = document.getElementById('chart-1');

const datasets = [{
        'label': 'AI/ML',
        'color': 'red',
        'value': 12
    },
    {
        'label': 'Backend',
        'color': 'blue',
        'value': 19
    },
    {
        'label': 'Embedded/low-level',
        'color': 'green',
        'value': 3
    },
    {
        'label': 'Finance',
        'color': 'orange',
        'value': 5
    },
    {
        'label': 'Blockchain/Web3',
        'color': 'purple',
        'value': 2
    },
    {
        'label': 'Desktop/mobile',
        'color': 'yellow',
        'value': 3
    }
];

var labels = datasets.map(data => data.label);
var colors = datasets.map(data => data.color);
var values = datasets.map(data => data.value);

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'market share',
                data: values,
                borderWidth: 1
           }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true
            },
        }
    }
});