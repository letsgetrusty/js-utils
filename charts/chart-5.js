const ctx5 = document.getElementById('chart-5');

var datasets5 = [{
        'label': 'C/C++',
        'color': 'red',
        'value': 6.00
    },
    {
        'label': 'C#',
        'color': 'blue',
        'value': 12.02
    },
    {
        'label': 'JavaScript',
        'color': 'green',
        'value': 45.55
    },
    {
        'label': 'Swift',
        'color': 'orange',
        'value': 5.23
    },
    {
        'label': 'Java',
        'color': 'purple',
        'value': 26.52
    },
    {
        'label': 'Kotlin',
        'color': 'yellow',
        'value': 3.25
    },
    {
        'label': 'Python',
        'color': 'grey',
        'value': 5.51
    },
    {
        'label': 'Go',
        'color': 'grey',
        'value': 3.51
    },
    {
        'label': 'Ruby',
        'color': 'grey',
        'value': 1.51
    },
    {
        'label': 'PHP',
        'color': 'grey',
        'value': 1.91
    },
    {
        'label': 'Rust',
        'color': 'grey',
        'value': 1.01
    }
];

datasets5 = datasets5.sort((a, b) => b.value - a.value);
var labels5 = datasets5.map(data => data.label);
var colors5 = datasets5.map(data => data.color);
var values5 = datasets5.map(data => data.value);

new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: labels5,
        datasets: [
            {
                label: 'market share %',
                data: values5,
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