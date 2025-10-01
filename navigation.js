// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = sidebarToggle.querySelector('i');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            // Switch between bars and X icon
            toggleIcon.classList.toggle('fa-bars');
            toggleIcon.classList.toggle('fa-times');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
                sidebar.classList.remove('active');
                // Reset to bars icon when closing via outside click
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        });
    }
});

// Logout functionality
document.addEventListener('DOMContentLoaded', function() {
    // Support multiple logout buttons/links
    const logoutBtns = document.querySelectorAll('#logoutBtn, .logout-btn, .dropdown-item.logout');
    logoutBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Clear any stored credentials or session data
            localStorage.clear();
            sessionStorage.clear();
            // Use replace to redirect to index.html and prevent going back
            window.location.replace('index.html');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect to main content on page load
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.classList.add('fade-transition');
        mainContent.style.opacity = '1';
    }


    // Setup admin profile dropdown toggle (click to show/hide)
    const adminProfile = document.querySelector('.admin-profile');
    const profileDropdown = document.querySelector('.profile-dropdown');
    if (adminProfile && profileDropdown) {
        adminProfile.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
    }

    // Setup logout handler
    const logoutLink = document.querySelector('.dropdown-item');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            logout();
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (profileDropdown) {
            profileDropdown.classList.remove('show');
        }
    });

    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.sidebar nav ul li');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Determine which page to load
            let targetPage = 'dash.html'; // Default to home
            switch(section) {
                case 'sales':
                    targetPage = 'orders.html';
                    break;
                case 'purchases':
                    targetPage = 'promotions.html';
                    break;
                case 'integrations':
                    targetPage = 'transactions.html';
                    break;
                case 'reports':
                    targetPage = 'reports.html';
                    break;
                case 'inventory':
                    targetPage = 'dash.html';
                    break;
            }

            // Fade out current content
            mainContent.style.opacity = '0';
            
            // Navigate to new page after fade out
            setTimeout(() => {
                window.location.href = targetPage;
            }, 300);
        });
    });
});
