document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality (copied from index.html)
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }
    // Sample orders data
    const orders = [
        { id: '#ORD-001', customer: 'John Doe', date: '2025-09-05', total: '₦117,000', status: 'Pending' },
        { id: '#ORD-002', customer: 'Jane Smith', date: '2025-09-05', total: '₦175,875', status: 'Completed' },
        { id: '#ORD-003', customer: 'Mike Johnson', date: '2025-09-04', total: '₦58,687', status: 'Cancelled' },
        { id: '#ORD-004', customer: 'Sarah Williams', date: '2025-09-04', total: '₦324,000', status: 'Pending' },
        { id: '#ORD-005', customer: 'Chioma Okonkwo', date: '2025-09-05', total: '₦243,500', status: 'Completed' },
        { id: '#ORD-006', customer: 'Oluwaseun Adeleke', date: '2025-09-05', total: '₦178,900', status: 'Pending' },
        { id: '#ORD-007', customer: 'Aminu Ibrahim', date: '2025-09-05', total: '₦456,750', status: 'Completed' },
        { id: '#ORD-008', customer: 'Ngozi Okafor', date: '2025-09-05', total: '₦89,250', status: 'Pending' },
        { id: '#ORD-009', customer: 'Babajide Ogunleye', date: '2025-09-05', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-010', customer: 'Aisha Mohammed', date: '2025-09-04', total: '₦234,600', status: 'Completed' },
        { id: '#ORD-011', customer: 'Chinedu Eze', date: '2025-09-04', total: '₦345,900', status: 'Pending' },
        { id: '#ORD-012', customer: 'Folake Adeyemi', date: '2025-09-04', total: '₦123,450', status: 'Cancelled' },
        { id: '#ORD-013', customer: 'Obinna Nnamdi', date: '2025-09-04', total: '₦789,000', status: 'Completed' },
        { id: '#ORD-014', customer: 'Yetunde Bankole', date: '2025-09-04', total: '₦445,500', status: 'Pending' },
        { id: '#ORD-015', customer: 'Mohammed Sani', date: '2025-09-04', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-016', customer: 'Ada Okoro', date: '2025-09-03', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-017', customer: 'Tunde Bakare', date: '2025-09-03', total: '₦123,400', status: 'Pending' },
        { id: '#ORD-018', customer: 'Zainab Usman', date: '2025-09-03', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-019', customer: 'Emeka Okafor', date: '2025-09-03', total: '₦678,900', status: 'Cancelled' },
        { id: '#ORD-020', customer: 'Bisi Adebayo', date: '2025-09-03', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-021', customer: 'Uche Nwosu', date: '2025-09-03', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-022', customer: 'Fatima Ibrahim', date: '2025-09-03', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-023', customer: 'Olayinka Adelaja', date: '2025-09-03', total: '₦123,400', status: 'Completed' },
        { id: '#ORD-024', customer: 'Chinua Achebe', date: '2025-09-02', total: '₦890,000', status: 'Pending' },
        { id: '#ORD-025', customer: 'Azeezat Musa', date: '2025-09-02', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-026', customer: 'Oluwafemi Ajayi', date: '2025-09-02', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-027', customer: 'Chioma Onyeka', date: '2025-09-02', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-028', customer: 'Babatunde Fashola', date: '2025-09-02', total: '₦789,000', status: 'Pending' },
        { id: '#ORD-029', customer: 'Amina Bello', date: '2025-09-02', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-030', customer: 'Chidi Aneke', date: '2025-09-02', total: '₦445,600', status: 'Completed' },
        { id: '#ORD-031', customer: 'Funke Akindele', date: '2025-09-01', total: '₦678,900', status: 'Pending' },
        { id: '#ORD-032', customer: 'Ibrahim Musa', date: '2025-09-01', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-033', customer: 'Adanna Okeke', date: '2025-09-01', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-034', customer: 'Segun Obasanjo', date: '2025-09-01', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-035', customer: 'Halima Abubakar', date: '2025-09-01', total: '₦123,400', status: 'Pending' },
        { id: '#ORD-036', customer: 'Olumide Oworu', date: '2025-09-01', total: '₦890,000', status: 'Completed' },
        { id: '#ORD-037', customer: 'Blessing Okagbare', date: '2025-09-01', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-038', customer: 'Yakubu Gowon', date: '2025-09-01', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-039', customer: 'Chidinma Ekile', date: '2025-09-01', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-040', customer: 'Taiwo Ajayi', date: '2025-09-01', total: '₦678,900', status: 'Cancelled' },
        { id: '#ORD-041', customer: 'Kehinde Ajayi', date: '2025-08-31', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-042', customer: 'Nnamdi Azikiwe', date: '2025-08-31', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-043', customer: 'Toyin Aimakhu', date: '2025-08-31', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-044', customer: 'Suleiman Abba', date: '2025-08-31', total: '₦123,400', status: 'Completed' },
        { id: '#ORD-045', customer: 'Chiamaka Adebayo', date: '2025-08-31', total: '₦890,000', status: 'Pending' },
        { id: '#ORD-046', customer: 'Yusuf Buhari', date: '2025-08-31', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-047', customer: 'Obiageli Ezekwesili', date: '2025-08-31', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-048', customer: 'Femi Otedola', date: '2025-08-31', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-049', customer: 'Aisha Buhari', date: '2025-08-30', total: '₦789,000', status: 'Pending' },
        { id: '#ORD-050', customer: 'Chuka Okonjo', date: '2025-08-30', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-051', customer: 'Bola Tinubu', date: '2025-08-30', total: '₦445,600', status: 'Completed' },
        { id: '#ORD-052', customer: 'Chimamanda Adichie', date: '2025-08-30', total: '₦678,900', status: 'Pending' },
        { id: '#ORD-053', customer: 'Aliko Dangote', date: '2025-08-30', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-054', customer: 'Ngozi Okonjo-Iweala', date: '2025-08-30', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-055', customer: 'Omotola Jalade', date: '2025-08-30', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-056', customer: 'Shehu Shagari', date: '2025-08-30', total: '₦123,400', status: 'Pending' },
        { id: '#ORD-057', customer: 'Genevieve Nnaji', date: '2025-08-29', total: '₦890,000', status: 'Completed' },
        { id: '#ORD-058', customer: 'Goodluck Jonathan', date: '2025-08-29', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-059', customer: 'Davido Adeleke', date: '2025-08-29', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-060', customer: 'Tiwa Savage', date: '2025-08-29', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-061', customer: 'Wizkid Balogun', date: '2025-08-29', total: '₦678,900', status: 'Cancelled' },
        { id: '#ORD-062', customer: 'Burna Boy Damini', date: '2025-08-29', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-063', customer: 'Yemi Alade', date: '2025-08-29', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-064', customer: 'Don Jazzy', date: '2025-08-29', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-065', customer: 'Olamide Baddo', date: '2025-08-28', total: '₦123,400', status: 'Completed' },
        { id: '#ORD-066', customer: 'Phyno Fino', date: '2025-08-28', total: '₦890,000', status: 'Pending' },
        { id: '#ORD-067', customer: 'Mercy Johnson', date: '2025-08-28', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-068', customer: 'Jim Iyke', date: '2025-08-28', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-069', customer: 'Rita Dominic', date: '2025-08-28', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-070', customer: 'RMD Mofe-Damijo', date: '2025-08-28', total: '₦789,000', status: 'Pending' },
        { id: '#ORD-071', customer: 'Kate Henshaw', date: '2025-08-28', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-072', customer: 'Ini Edo', date: '2025-08-28', total: '₦445,600', status: 'Completed' },
        { id: '#ORD-073', customer: 'Ramsey Nouah', date: '2025-08-27', total: '₦678,900', status: 'Pending' },
        { id: '#ORD-074', customer: 'Desmond Elliot', date: '2025-08-27', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-075', customer: 'Patience Ozokwor', date: '2025-08-27', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-076', customer: 'Pete Edochie', date: '2025-08-27', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-077', customer: 'Joke Silva', date: '2025-08-27', total: '₦123,400', status: 'Pending' },
        { id: '#ORD-078', customer: 'Olu Jacobs', date: '2025-08-27', total: '₦890,000', status: 'Completed' },
        { id: '#ORD-079', customer: 'Aki Ikedieze', date: '2025-08-27', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-080', customer: 'Pawpaw Osita', date: '2025-08-27', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-081', customer: 'Uche Jombo', date: '2025-08-26', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-082', customer: 'Stella Damasus', date: '2025-08-26', total: '₦678,900', status: 'Cancelled' },
        { id: '#ORD-083', customer: 'Kanayo O. Kanayo', date: '2025-08-26', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-084', customer: 'Nkem Owoh', date: '2025-08-26', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-085', customer: 'Zack Orji', date: '2025-08-26', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-086', customer: 'Segun Arinze', date: '2025-08-26', total: '₦123,400', status: 'Completed' },
        { id: '#ORD-087', customer: 'Clarion Chukwura', date: '2025-08-26', total: '₦890,000', status: 'Pending' },
        { id: '#ORD-088', customer: 'Stephanie Okereke', date: '2025-08-26', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-089', customer: 'Mike Ezuruonye', date: '2025-08-25', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-090', customer: 'Osita Iheme', date: '2025-08-25', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-091', customer: 'Funke Akindele', date: '2025-08-25', total: '₦789,000', status: 'Pending' },
        { id: '#ORD-092', customer: 'Toyin Abraham', date: '2025-08-25', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-093', customer: 'Mercy Aigbe', date: '2025-08-25', total: '₦445,600', status: 'Completed' },
        { id: '#ORD-094', customer: 'Odunlade Adekola', date: '2025-08-25', total: '₦678,900', status: 'Pending' },
        { id: '#ORD-095', customer: 'Femi Adebayo', date: '2025-08-25', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-096', customer: 'Biodun Okeowo', date: '2025-08-25', total: '₦567,800', status: 'Cancelled' },
        { id: '#ORD-097', customer: 'Mide Martins', date: '2025-08-24', total: '₦345,600', status: 'Completed' },
        { id: '#ORD-098', customer: 'Dayo Amusa', date: '2025-08-24', total: '₦123,400', status: 'Pending' },
        { id: '#ORD-099', customer: 'Faithia Balogun', date: '2025-08-24', total: '₦890,000', status: 'Completed' },
        { id: '#ORD-100', customer: 'Lateef Adedimeji', date: '2025-08-24', total: '₦234,500', status: 'Completed' },
        { id: '#ORD-101', customer: 'Bukunmi Oluwasina', date: '2025-08-24', total: '₦445,600', status: 'Pending' },
        { id: '#ORD-102', customer: 'Adesua Etomi', date: '2025-08-24', total: '₦567,800', status: 'Completed' },
        { id: '#ORD-103', customer: 'Banky Wellington', date: '2025-08-24', total: '₦678,900', status: 'Cancelled' },
        { id: '#ORD-104', customer: 'Sola Sobowale', date: '2025-08-24', total: '₦234,500', status: 'Completed' },
    ];

    // Create and populate the orders table
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${orders.map(order => `
                    <tr>
                        <td>${order.id}</td>
                        <td>${order.customer}</td>
                        <td>${order.date}</td>
                        <td>${order.total}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.querySelector('.orders-table').innerHTML = tableHTML;

    // Handle new order button click
    document.querySelector('.btn-primary').addEventListener('click', function() {
        alert('Create new order functionality will be implemented here');
    });
});
