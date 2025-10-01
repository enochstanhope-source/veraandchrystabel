document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality (copied from index.html)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    // Initialize sales chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sales',
                data: [12500, 18700, 14900, 45678],
                borderColor: '#e41e31',
                backgroundColor: 'rgba(228, 30, 49, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a7b7',
                        callback: function(value) {
                            return '₦' + (value * 750).toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a7b7'
                    }
                }
            }
        }
    });

    // Handle report type selection
    document.querySelectorAll('.report-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.report-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update report title
            document.querySelector('.report-header h2').textContent = this.querySelector('span').textContent;
            // In a real application, we would load the corresponding report data here
        });
    });

    // Handle time range changes
    document.getElementById('timeRange').addEventListener('change', function() {
        // Update chart and metrics based on selected time range
        alert('Time range filter functionality will be implemented here');
    });

    // Handle export button
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        alert('Export functionality will be implemented here');
    });

    // Handle generate report button
    document.querySelector('.btn-primary').addEventListener('click', function() {
        alert('Generate report functionality will be implemented here');
    });
});
