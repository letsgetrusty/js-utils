const ctx4 = document.getElementById('chart-4');

var datasets4 = [{
        'label': 'Junior',
        'color': 'red',
        'value': 15.43
    },
    {
        'label': 'Mid-level',
        'color': 'blue',
        'value': 29.02
    },
    {
        'label': 'Senior',
        'color': 'green',
        'value': 49.54
    },
    {
        'label': 'Unspecified',
        'color': 'orange',
        'value': 6.01
    }
];

var labels4 = datasets4.map(data => data.label);
var colors4 = datasets4.map(data => data.color);
var values4 = datasets4.map(data => data.value);

new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: labels4,
        datasets: [
            {
                label: 'relative %',
                data: values4,
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