const ctx1 = document.getElementById('chart-1');

var datasets1 = [{
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

datasets1 = datasets1.sort((a, b) => b.value - a.value);
var labels1 = datasets1.map(data => data.label);
var colors1 = datasets1.map(data => data.color);
var values1 = datasets1.map(data => data.value);

new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [
            {
                label: 'market share %',
                data: values1,
                borderWidth: 3
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