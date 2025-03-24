// Inicjalizacja wykresu najpopularniejszych kierunków
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('destinationsChart').getContext('2d');
    const destinationsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Grecja', 'Włochy', 'Hiszpania', 'Turcja', 'Chorwacja', 'Egipt', 'Tajlandia'],
            datasets: [{
                label: 'Popularność kierunków (%))',
                data: [25, 22, 18, 12, 10, 8, 5],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(199, 199, 199, 0.7)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(199, 199, 199, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                text: 'Najpopularniejsze kierunki w 2025 roku'
                }
            }
        }
    });
});
