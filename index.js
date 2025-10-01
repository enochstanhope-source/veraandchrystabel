// Progress Circle Logic (restored design)
let percentage = 71;
const percentageText = document.getElementById('percentageText');
const progressCircle = document.getElementById('progressCircle');
const controls = document.querySelector('.progress-controls');

function setProgressCircle(percent) {
    percent = Math.max(0, Math.min(100, percent));
    let start = parseInt(percentageText.textContent);
    let end = percent;
    let step = start < end ? 1 : -1;
    let current = start;
    const animate = () => {
        if ((step > 0 && current > end) || (step < 0 && current < end)) return;
        percentageText.textContent = current + '%';
        // Color logic - luxury red glow on progress
        if (current < 71) {
            progressCircle.style.background = 'linear-gradient(135deg, #2a0a0a, #3b0b0b)';
            percentageText.style.color = '#fff';
            progressCircle.style.boxShadow = '0 8px 30px rgba(179,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.02)';
        } else {
            progressCircle.style.background = 'linear-gradient(135deg, #4a0a0a, #b30000)';
            percentageText.style.color = '#fff';
            progressCircle.style.boxShadow = '0 12px 40px rgba(196,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.02)';
        }
        if (current !== end) {
            current += step;
            setTimeout(animate, 15);
        }
    };
    animate();
}

function changePercentage(delta) {
    percentage = Math.max(0, Math.min(100, percentage + delta));
    setProgressCircle(percentage);
}

function updateBars() {
    // Fixed values for the dashboard metrics (Books & Stationery)
    const fixed = [
        { id: 'salesBar', value: 41, trend: 52.0 },
        { id: 'stockBar', value: 98, trend: 70.0 },
        { id: 'ordersBar', value: 13, trend: 63.0 },
        { id: 'growthBar', value: 9, trend: 48.0 }
    ];

    fixed.forEach(item => {
        const bar = document.getElementById(item.id);
        if (!bar) return;
        const barInfo = bar.parentElement.nextElementSibling;
        const barValue = barInfo.querySelector('.bar-value');
        const barTrend = barInfo.querySelector('.bar-trend');

        // Set height and value
        bar.style.height = item.value + '%';
        barValue.textContent = item.value + '%';

        // Set trend (always positive as provided)
        barTrend.className = 'bar-trend positive';
        barTrend.innerHTML = `\n            <i class="fas fa-arrow-up"></i>\n            <span>${item.trend.toFixed(1)}%</span>\n        `;

        // Apply consistent red gradient
        if (item.value < 40) {
            bar.style.background = 'linear-gradient(to top, rgba(179,0,0,0.85), rgba(255,43,43,0.6))';
        } else {
            bar.style.background = 'linear-gradient(to top, rgba(255,43,43,0.95), rgba(179,0,0,0.9))';
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    setProgressCircle(percentage);
    // Simulate random button presses, then keep pressing
    let actions = [];
    for (let i = 0; i < 3; i++) {
        actions.push(Math.random() > 0.5 ? 10 : -10);
    }
    let idx = 0;
    function nextAction() {
        if (idx < actions.length) {
            changePercentage(actions[idx]);
            idx++;
            setTimeout(nextAction, 500);
        } else {
            // Hide the buttons after animation
            if (controls) controls.style.display = 'none';
            // Set the dashboard bars to the fixed, book-related values once
            updateBars();
        }
    }
    setTimeout(nextAction, 700);
});
// Set Chart.js default options for dark theme
// --- Counter Logic Start ---
const counters = [
    {
        id: 'packed-count',
        value: 228,
        start: 228,
        max: 600,
        minDelay: 4000,
        maxDelay: 8000
    },
    {
        id: 'shipped-count',
        value: 6,
        start: 6,
        max: 60,
        minDelay: 4000,
        maxDelay: 7000
    },
    {
        id: 'delivered-count',
        value: 10,
        start: 10,
        max: 500,
        minDelay: 5000,
        maxDelay: 8000
    },
    {
        id: 'invoiced-count',
        value: 474,
        start: 474,
        max: 900,
        minDelay: 5000,
        maxDelay: 7000
    }
];


function updateCounter(counter) {
    const prevValue = counter.value;
    counter.value++;
    if (counter.value > counter.max) {
        counter.value = counter.start;
    }
    const el = document.getElementById(counter.id);
    if (el) {
        el.textContent = counter.value;
        // Show green plus if value increased
        if (counter.value > prevValue) {
            const plus = document.createElement('span');
            plus.className = 'counter-plus';
            plus.textContent = '+1';
            el.parentNode.appendChild(plus);
            setTimeout(() => {
                plus.remove();
            }, 1000);
        }
    }
    const delay = Math.floor(Math.random() * (counter.maxDelay - counter.minDelay + 1)) + counter.minDelay;
    setTimeout(() => updateCounter(counter), delay);
}

window.addEventListener('DOMContentLoaded', () => {
    counters.forEach(counter => {
        setTimeout(() => updateCounter(counter), Math.floor(Math.random() * (counter.maxDelay - counter.minDelay + 1)) + counter.minDelay);
    });
});
// --- Counter Logic End ---
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Inter', sans-serif";

// Dashboard Configuration
const config = {
    animations: {
        duration: 1000,
        easing: 'easeOutQuart'
    },
    charts: {
        colors: {
            primary: '#38bdf8',
            secondary: '#94a3b8',
            accent: '#1e293b'
        }
    }
};

// Initialize the sales chart
// Slider functionality
function initSliders() {
    const sliders = document.querySelectorAll('.slider');
    
    // Initialize each slider independently
    sliders.forEach((slider, index) => {
        const slides = slider.querySelectorAll('.slide');
        let currentSlide = 0;
        let isTransitioning = false;
        
        // Show first slide
        slides[0].style.opacity = '1';
        slides[0].classList.add('active');
        
        function nextSlide() {
            if (isTransitioning) return;
            isTransitioning = true;

            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            
            // Calculate next slide index
            const nextIndex = (currentSlide + 1) % slides.length;
            
            // Add entering class to next slide
            slides[nextIndex].classList.add('entering');
            slides[nextIndex].style.opacity = '1';
            
            // After animation completes
            setTimeout(() => {
                slides[currentSlide].style.opacity = '0';
                slides[nextIndex].classList.remove('entering');
                slides[nextIndex].classList.add('active');
                currentSlide = nextIndex;
                isTransitioning = false;
                
                // Set random delay for next transition (between 8 and 12 seconds)
                const randomDelay = Math.random() * (12000 - 8000) + 8000;
                setTimeout(nextSlide, randomDelay);
            }, 1500); // Match this with CSS transition duration
        }
        
        // Start each slider with a different initial delay
        const initialDelay = index === 0 ? 0 : Math.random() * 4000 + 2000; // 2-6 seconds delay for second slider
        setTimeout(() => {
            nextSlide();
        }, initialDelay);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sliders
    initSliders();
    const canvas = document.getElementById('salesChart');
    if (!canvas) {
        console.error('Sales chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2d context');
        return;
    }
    
    // Generate realistic data
    const dates = Array.from({length: 30}, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    });

    const generateData = (base, variance) => {
        return Array.from({length: 30}, () => base + (Math.random() - 0.5) * variance);
    };

    const currentPeriodData = generateData(1600000, 800000);
    const previousPeriodData = generateData(1400000, 800000);

    // Create gradient for the area
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(179, 0, 0, 0.24)');
    gradient.addColorStop(1, 'rgba(179, 0, 0, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Current Period',
                    data: currentPeriodData,
                    borderColor: '#ff2b2b',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    backgroundColor: gradient,
                    pointBackgroundColor: '#ff2b2b',
                    pointBorderColor: '#0b0b0b',
                    pointBorderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                },
                {
                    label: 'Previous Period',
                    data: previousPeriodData,
                    borderColor: '#bdb6b6',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 11
                        },
                        maxRotation: 0,
                        padding: 10
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    position: 'right',
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 11
                        },
                        callback: (value) => {
                            return '₦' + (value / 1000000).toFixed(1) + 'M';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#e2e8f0',
                    bodyColor: '#e2e8f0',
                    bodyFont: {
                        size: 13
                    },
                    padding: 12,
                    borderColor: 'rgba(148, 163, 184, 0.2)',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: (context) => {
                            return '₦' + (context.raw / 1000000).toFixed(2) + 'M';
                        }
                    }
                }
            }
        }
    });
});

// Simulated data for the dashboard
const dashboardData = {
    stats: {
        toBePacked: 228,
        toBeShipped: 6,
        toBeDelivered: 10,
        toBeInvoiced: 474
    },
    productDetails: {
        itemGroups: 12,
        allItems: 120,
        activeItems: 71 // percentage
    },
    topSelling: [
        { name: "To Kill a Mockingbird", quantity: 24, unit: "copies", trend: "+12%" },
        { name: "Eloquent JavaScript", quantity: 20, unit: "copies", trend: "+8%" }
    ]
};

// Utility functions
const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const value = start + (end - start) * easeOutQuart(progress);
        element.textContent = Math.round(value);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Initialize Charts
function initializeCharts() {
    const ctx = document.querySelector('.chart-container').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'Inactive'],
            datasets: [{
                data: [dashboardData.productDetails.activeItems, 100 - dashboardData.productDetails.activeItems],
                backgroundColor: [config.charts.colors.primary, config.charts.colors.secondary],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '75%',
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: config.animations.duration,
                easing: config.animations.easing
            }
        }
    });
}

// Sidebar Toggle
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');
    
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}

// Initialize Dropdown Menus
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const content = dropdown.querySelector('.dropdown-content');
        
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
        
        document.addEventListener('click', () => {
            content.style.display = 'none';
        });
    });
}

// Initialize Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('nav ul li');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('nav ul li.active').classList.remove('active');
            item.classList.add('active');
            
            // Simulate page loading
            const section = item.dataset.section;
            document.querySelector('.breadcrumb span:last-child').textContent = 
                section.charAt(0).toUpperCase() + section.slice(1);
        });
    });
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        // Implement search functionality here
        console.log('Searching for:', query);
    });
}

// Initialize Stats Cards
function initializeStats() {
    const stats = document.querySelectorAll('.stat-card h3');
    
    stats.forEach((stat, index) => {
        const value = Object.values(dashboardData.stats)[index];
        animateValue(stat, 0, value, config.animations.duration);
    });
}

// Initialize Product Details
function initializeProductDetails() {
    document.querySelector('.detail-item:nth-child(1) h3').textContent = 
        dashboardData.productDetails.itemGroups;
    document.querySelector('.detail-item:nth-child(2) h3').textContent = 
        dashboardData.productDetails.allItems;
}

// Initialize Top Selling Items
function initializeTopSelling() {
    const items = document.querySelectorAll('.item');
    
    dashboardData.topSelling.forEach((item, index) => {
        const itemElement = items[index];
        const quantityElement = itemElement.querySelector('p');
        quantityElement.innerHTML = `
            ${item.quantity} ${item.unit}
            <span class="trend positive">${item.trend}</span>
        `;
    });
}

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    initializeDropdowns();
    initializeNavigation();
    initializeSearch();
    initializeStats();
    initializeCharts();
    initializeProductDetails();
    initializeTopSelling();
    
    // Add smooth hover effects
    document.querySelectorAll('.stat-card, .item').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.transform = `
                perspective(1000px)
                rotateX(${(y - rect.height / 2) / 20}deg)
                rotateY(${-(x - rect.width / 2) / 20}deg)
                translateY(-5px)
            `;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
});
