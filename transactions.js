document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality (copied from index.html)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    // Sample transactions data
    const transactions = [
        { id: '#TRX-001', date: '2025-09-05', description: 'Sale Payment', type: 'income', amount: '+₦9,260' },
        { id: '#TRX-002', date: '2025-09-05', description: 'Supplier Payment', type: 'expense', amount: '-₦4,260' },
        { id: '#TRX-003', date: '2025-09-04', description: 'Online Order', type: 'income', amount: '+₦6,680' },
        { id: '#TRX-004', date: '2025-09-04', description: 'Utility Bill', type: 'expense', amount: '-₦1,760' },
        { id: '#TRX-005', date: '2025-09-05', description: 'Bulk Purchase - Peak Milk', type: 'income', amount: '+₦12,450' },
        { id: '#TRX-006', date: '2025-09-05', description: 'Staff Salary Payment', type: 'expense', amount: '-₦8,500' },
        { id: '#TRX-007', date: '2025-09-05', description: 'POS Transaction', type: 'income', amount: '+₦5,680' },
        { id: '#TRX-008', date: '2025-09-05', description: 'Electricity Bill', type: 'expense', amount: '-₦2,350' },
        { id: '#TRX-009', date: '2025-09-05', description: 'Wholesale Order - Indomie', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-010', date: '2025-09-05', description: 'Generator Maintenance', type: 'expense', amount: '-₦1,450' },
        { id: '#TRX-011', date: '2025-09-04', description: 'Bulk Sale - Beverages', type: 'income', amount: '+₦15,680' },
        { id: '#TRX-012', date: '2025-09-04', description: 'Security Service Fee', type: 'expense', amount: '-₦2,500' },
        { id: '#TRX-013', date: '2025-09-04', description: 'Corporate Order', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-014', date: '2025-09-04', description: 'Store Rent Payment', type: 'expense', amount: '-₦12,000' },
        { id: '#TRX-015', date: '2025-09-04', description: 'Online Sales - Groceries', type: 'income', amount: '+₦7,895' },
        { id: '#TRX-016', date: '2025-09-04', description: 'Internet Service Bill', type: 'expense', amount: '-₦750' },
        { id: '#TRX-017', date: '2025-09-03', description: 'Bulk Order - Rice', type: 'income', amount: '+₦45,670' },
        { id: '#TRX-018', date: '2025-09-03', description: 'Equipment Purchase', type: 'expense', amount: '-₦23,450' },
        { id: '#TRX-019', date: '2025-09-03', description: 'Walk-in Sales', type: 'income', amount: '+₦4,567' },
        { id: '#TRX-020', date: '2025-09-03', description: 'Insurance Premium', type: 'expense', amount: '-₦4,500' },
        { id: '#TRX-021', date: '2025-09-03', description: 'Wholesale - Palm Oil', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-022', date: '2025-09-03', description: 'Vehicle Maintenance', type: 'expense', amount: '-₦1,800' },
        { id: '#TRX-023', date: '2025-09-03', description: 'Corporate Sales', type: 'income', amount: '+₦18,900' },
        { id: '#TRX-024', date: '2025-09-03', description: 'Cleaning Service', type: 'expense', amount: '-₦950' },
        { id: '#TRX-025', date: '2025-09-02', description: 'Bulk Sale - Drinks', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-026', date: '2025-09-02', description: 'Office Supplies', type: 'expense', amount: '-₦1,450' },
        { id: '#TRX-027', date: '2025-09-02', description: 'Online Order - Household', type: 'income', amount: '+₦6,789' },
        { id: '#TRX-028', date: '2025-09-02', description: 'Air Conditioning Repair', type: 'expense', amount: '-₦2,500' },
        { id: '#TRX-029', date: '2025-09-02', description: 'Wholesale - Flour', type: 'income', amount: '+₦12,340' },
        { id: '#TRX-030', date: '2025-09-02', description: 'Marketing Expense', type: 'expense', amount: '-₦3,500' },
        { id: '#TRX-031', date: '2025-09-02', description: 'Retail Sales', type: 'income', amount: '+₦8,900' },
        { id: '#TRX-032', date: '2025-09-02', description: 'Water Supply Bill', type: 'expense', amount: '-₦850' },
        { id: '#TRX-033', date: '2025-09-01', description: 'Bulk Purchase - Sugar', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-034', date: '2025-09-01', description: 'Staff Training', type: 'expense', amount: '-₦4,500' },
        { id: '#TRX-035', date: '2025-09-01', description: 'POS Sales', type: 'income', amount: '+₦5,678' },
        { id: '#TRX-036', date: '2025-09-01', description: 'Security Equipment', type: 'expense', amount: '-₦7,800' },
        { id: '#TRX-037', date: '2025-09-01', description: 'Corporate Order - Snacks', type: 'income', amount: '+₦18,900' },
        { id: '#TRX-038', date: '2025-09-01', description: 'Software Subscription', type: 'expense', amount: '-₦2,500' },
        { id: '#TRX-039', date: '2025-09-01', description: 'Wholesale - Groundnut Oil', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-040', date: '2025-09-01', description: 'Packaging Materials', type: 'expense', amount: '-₦1,750' },
        { id: '#TRX-041', date: '2025-08-31', description: 'Bulk Sale - Toiletries', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-042', date: '2025-08-31', description: 'Transport Logistics', type: 'expense', amount: '-₦4,500' },
        { id: '#TRX-043', date: '2025-08-31', description: 'Online Sales - Electronics', type: 'income', amount: '+₦45,670' },
        { id: '#TRX-044', date: '2025-08-31', description: 'Store Renovation', type: 'expense', amount: '-₦15,000' },
        { id: '#TRX-045', date: '2025-08-31', description: 'Walk-in Purchase', type: 'income', amount: '+₦3,456' },
        { id: '#TRX-046', date: '2025-08-31', description: 'Employee Benefits', type: 'expense', amount: '-₦6,500' },
        { id: '#TRX-047', date: '2025-08-31', description: 'Wholesale - Seasonings', type: 'income', amount: '+₦12,340' },
        { id: '#TRX-048', date: '2025-08-31', description: 'Equipment Maintenance', type: 'expense', amount: '-₦2,800' },
        { id: '#TRX-049', date: '2025-08-30', description: 'Bulk Order - Detergents', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-050', date: '2025-08-30', description: 'Advertisement Cost', type: 'expense', amount: '-₦4,500' },
        { id: '#TRX-051', date: '2025-08-30', description: 'Corporate Sales - Drinks', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-052', date: '2025-08-30', description: 'POS Machine Rental', type: 'expense', amount: '-₦750' },
        { id: '#TRX-053', date: '2025-08-30', description: 'Online Order - Provisions', type: 'income', amount: '+₦8,900' },
        { id: '#TRX-054', date: '2025-08-30', description: 'Waste Management', type: 'expense', amount: '-₦1,200' },
        { id: '#TRX-055', date: '2025-08-30', description: 'Bulk Sale - Cereals', type: 'income', amount: '+₦16,780' },
        { id: '#TRX-056', date: '2025-08-30', description: 'Pest Control Service', type: 'expense', amount: '-₦1,800' },
        { id: '#TRX-057', date: '2025-08-29', description: 'Wholesale - Milk Products', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-058', date: '2025-08-29', description: 'Staff Uniform', type: 'expense', amount: '-₦3,500' },
        { id: '#TRX-059', date: '2025-08-29', description: 'POS Transaction', type: 'income', amount: '+₦4,567' },
        { id: '#TRX-060', date: '2025-08-29', description: 'Building Insurance', type: 'expense', amount: '-₦7,500' },
        { id: '#TRX-061', date: '2025-08-29', description: 'Corporate Order - Office Supplies', type: 'income', amount: '+₦12,340' },
        { id: '#TRX-062', date: '2025-08-29', description: 'Security Guards Payment', type: 'expense', amount: '-₦2,800' },
        { id: '#TRX-063', date: '2025-08-29', description: 'Bulk Purchase - Frozen Foods', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-064', date: '2025-08-29', description: 'Vehicle Fuel', type: 'expense', amount: '-₦1,800' },
        { id: '#TRX-065', date: '2025-08-28', description: 'Wholesale - Confectionery', type: 'income', amount: '+₦15,670' },
        { id: '#TRX-066', date: '2025-08-28', description: 'Bank Charges', type: 'expense', amount: '-₦450' },
        { id: '#TRX-067', date: '2025-08-28', description: 'Online Sales - Home Appliances', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-068', date: '2025-08-28', description: 'Generator Fuel', type: 'expense', amount: '-₦2,500' },
        { id: '#TRX-069', date: '2025-08-28', description: 'Walk-in Sales', type: 'income', amount: '+₦6,789' },
        { id: '#TRX-070', date: '2025-08-28', description: 'Phone Bills', type: 'expense', amount: '-₦850' },
        { id: '#TRX-071', date: '2025-08-28', description: 'Bulk Order - Toiletries', type: 'income', amount: '+₦18,900' },
        { id: '#TRX-072', date: '2025-08-28', description: 'Equipment Repair', type: 'expense', amount: '-₦1,500' },
        { id: '#TRX-073', date: '2025-08-27', description: 'Corporate Sales - Beverages', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-074', date: '2025-08-27', description: 'Office Stationery', type: 'expense', amount: '-₦750' },
        { id: '#TRX-075', date: '2025-08-27', description: 'POS Sales', type: 'income', amount: '+₦4,567' },
        { id: '#TRX-076', date: '2025-08-27', description: 'Air Fresheners', type: 'expense', amount: '-₦450' },
        { id: '#TRX-077', date: '2025-08-27', description: 'Wholesale - Cleaning Products', type: 'income', amount: '+₦12,340' },
        { id: '#TRX-078', date: '2025-08-27', description: 'Staff Welfare', type: 'expense', amount: '-₦3,500' },
        { id: '#TRX-079', date: '2025-08-27', description: 'Online Order - Kitchen Items', type: 'income', amount: '+₦8,900' },
        { id: '#TRX-080', date: '2025-08-27', description: 'Maintenance Tools', type: 'expense', amount: '-₦1,800' },
        { id: '#TRX-081', date: '2025-08-26', description: 'Bulk Sale - Personal Care', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-082', date: '2025-08-26', description: 'Loading Workers', type: 'expense', amount: '-₦950' },
        { id: '#TRX-083', date: '2025-08-26', description: 'Corporate Order - Drinks', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-084', date: '2025-08-26', description: 'Light Bulbs Replacement', type: 'expense', amount: '-₦450' },
        { id: '#TRX-085', date: '2025-08-26', description: 'Walk-in Purchase', type: 'income', amount: '+₦5,678' },
        { id: '#TRX-086', date: '2025-08-26', description: 'Trash Disposal', type: 'expense', amount: '-₦350' },
        { id: '#TRX-087', date: '2025-08-26', description: 'Wholesale - Baby Products', type: 'income', amount: '+₦16,780' },
        { id: '#TRX-088', date: '2025-08-26', description: 'First Aid Supplies', type: 'expense', amount: '-₦750' },
        { id: '#TRX-089', date: '2025-08-25', description: 'Online Sales - Electronics', type: 'income', amount: '+₦45,670' },
        { id: '#TRX-090', date: '2025-08-25', description: 'Fire Extinguisher Refill', type: 'expense', amount: '-₦1,500' },
        { id: '#TRX-091', date: '2025-08-25', description: 'POS Transaction', type: 'income', amount: '+₦7,895' },
        { id: '#TRX-092', date: '2025-08-25', description: 'Shelf Labels', type: 'expense', amount: '-₦450' },
        { id: '#TRX-093', date: '2025-08-25', description: 'Bulk Purchase - Seasonings', type: 'income', amount: '+₦12,340' },
        { id: '#TRX-094', date: '2025-08-25', description: 'Shopping Bags', type: 'expense', amount: '-₦1,800' },
        { id: '#TRX-095', date: '2025-08-25', description: 'Corporate Sales', type: 'income', amount: '+₦23,450' },
        { id: '#TRX-096', date: '2025-08-25', description: 'Price Tags', type: 'expense', amount: '-₦350' },
        { id: '#TRX-097', date: '2025-08-24', description: 'Wholesale - Beverages', type: 'income', amount: '+₦34,560' },
        { id: '#TRX-098', date: '2025-08-24', description: 'Store Decoration', type: 'expense', amount: '-₦2,500' },
        { id: '#TRX-099', date: '2025-08-24', description: 'Online Order', type: 'income', amount: '+₦6,789' },
        { id: '#TRX-100', date: '2025-08-24', description: 'Cash Register Paper', type: 'expense', amount: '-₦250' },
        { id: '#TRX-101', date: '2025-08-24', description: 'Bulk Sale - Household Items', type: 'income', amount: '+₦18,900' },
        { id: '#TRX-102', date: '2025-08-24', description: 'Receipt Printer Ink', type: 'expense', amount: '-₦450' },
        { id: '#TRX-103', date: '2025-08-24', description: 'Walk-in Sales', type: 'income', amount: '+₦4,567' },
        { id: '#TRX-104', date: '2025-08-24', description: 'Store Supplies', type: 'expense', amount: '-₦850' },
    ];

    // Create and populate the transactions table
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                ${transactions.map(tx => `
                    <tr>
                        <td>${tx.id}</td>
                        <td>${tx.date}</td>
                        <td>${tx.description}</td>
                        <td>
                            <div class="transaction-type type-${tx.type}">
                                <i class="fas fa-arrow-${tx.type === 'income' ? 'down' : 'up'}"></i>
                                ${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                            </div>
                        </td>
                        <td style="color: ${tx.type === 'income' ? '#ff2b2b' : '#b30000'}">${tx.amount}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.querySelector('.transactions-table').innerHTML = tableHTML;

    // Create transaction history chart
    const ctx = document.getElementById('transactionChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                label: 'Income',
                data: [1500, 2300, 1800, 2800, 1600, 2100, 2500],
                borderColor: '#ff2b2b',
                tension: 0.4
            }, {
                label: 'Expenses',
                data: [1200, 1800, 1400, 1900, 1300, 1600, 2000],
                borderColor: '#b30000',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
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

    // Handle date filter changes
    document.getElementById('dateFilter').addEventListener('change', function() {
        // Update chart and table data based on selected date range
        alert('Date filter functionality will be implemented here');
    });
});
