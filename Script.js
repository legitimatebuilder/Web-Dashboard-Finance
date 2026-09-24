// Bar Chart //
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spet', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Millions',
            data: [12, 19, 3, 5, 21, 3, 32, 19, 3, 15, 21, 3],
            borderWidth: 1,
            backgroundColor: '#d82f5a'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});