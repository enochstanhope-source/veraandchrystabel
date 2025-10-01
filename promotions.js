document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality (copied from index.html)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    // Sample promotions data
    const promotions = [
        {
            title: 'Summer Sale',
            dateRange: 'Sep 1 - Sep 30, 2025',
            status: 'Active',
            redemptions: 123,
            revenue: '₦34,258'
        },
        {
            title: 'Back to School',
            dateRange: 'Sep 15 - Oct 15, 2025',
            status: 'Scheduled',
            redemptions: 0,
            revenue: '₦0'
        },
        {
            title: 'Weekend Flash Sale',
            dateRange: 'Sep 8 - Sep 10, 2025',
            status: 'Active',
            redemptions: 56,
            revenue: '₦9,259'
        }
    ];

    // Populate promotion cards
    const cardsHTML = promotions.map(promo => `
        <div class="promotion-card">
            <span class="promotion-status status-${promo.status.toLowerCase()}">${promo.status}</span>
            <h3 class="promotion-title">${promo.title}</h3>
            <div class="promotion-dates">${promo.dateRange}</div>
            <div class="promotion-stats">
                <div class="stat-item">
                    <div class="stat-value">${promo.redemptions}</div>
                    <div class="stat-label">Redemptions</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${promo.revenue}</div>
                    <div class="stat-label">Revenue</div>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelector('.promotions-cards').innerHTML = cardsHTML;

    // Create analytics chart
    const ctx = document.getElementById('promotionChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Redemptions',
                data: [250, 450, 850, 1234],
                borderColor: '#e41e31',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#a0a7b7'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a7b7'
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

    // Handle create promotion button click
    document.querySelector('.btn-primary').addEventListener('click', function() {
        alert('Create promotion functionality will be implemented here');
    });
});
