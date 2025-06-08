/**
 * TinyTech Employee Directory
 * 
 * CREATIVE FEATURE: Smart Tenure Tracking & Visual Indicators
 * This feature automatically calculates and displays each employee's tenure with the company,
 * showing both time worked and visual badges. It includes:
 * - Real-time tenure calculation (years, months, days)
 * - Color-coded tenure badges (green for veterans, blue for new hires)
 * - Animated statistics showing total employees and filtered results
 * - Enhanced employee cards with hover effects and professional styling
 * 
 * This adds real value by helping HR and team members quickly identify:
 * - Senior employees who can mentor newcomers
 * - Team experience levels for project planning
 * - Recognition of long-term contributors
 */

// Employee data - hardcoded array as suggested in requirements
const employees = [
    {
        id: 1,
        name: "Lin Chang",
        title: "Marketing Assistant",
        email: "lin.chang@tinytech.com",
        startDate: "2024-02-01"
    },
    {
        id: 2,
        name: "Marcus Johnson",
        title: "Senior Developer",
        email: "marcus.johnson@tinytech.com",
        startDate: "2023-03-15"
    },
    {
        id: 3,
        name: "Sarah Williams",
        title: "Product Manager",
        email: "sarah.williams@tinytech.com",
        startDate: "2023-08-10"
    },
    {
        id: 4,
        name: "Ahmed Hassan",
        title: "UI/UX Designer",
        email: "ahmed.hassan@tinytech.com",
        startDate: "2024-01-20"
    },
    {
        id: 5,
        name: "Emily Rodriguez",
        title: "DevOps Engineer",
        email: "emily.rodriguez@tinytech.com",
        startDate: "2023-06-05"
    },
    {
        id: 6,
        name: "David Kim",
        title: "Data Analyst",
        email: "david.kim@tinytech.com",
        startDate: "2024-03-12"
    },
    {
        id: 7,
        name: "Jessica Brown",
        title: "HR Manager",
        email: "jessica.brown@tinytech.com",
        startDate: "2023-01-08"
    },
    {
        id: 8,
        name: "Carlos Mendez",
        title: "Sales Representative",
        email: "carlos.mendez@tinytech.com",
        startDate: "2023-11-22"
    },
    {
        id: 9,
        name: "Anna Kowalski",
        title: "Quality Assurance",
        email: "anna.kowalski@tinytech.com",
        startDate: "2024-04-08"
    },
    {
        id: 10,
        name: "Michael Thompson",
        title: "Technical Writer",
        email: "michael.thompson@tinytech.com",
        startDate: "2023-09-30"
    }
];

// Global variables
let filteredEmployees = [...employees];

// DOM elements
const searchBox = document.getElementById('searchBox');
const employeesGrid = document.getElementById('employeesGrid');
const noResults = document.getElementById('noResults');
const totalCount = document.getElementById('totalCount');
const filteredCount = document.getElementById('filteredCount');
const modal = document.getElementById('employeeModal');
const closeModalBtn = document.getElementById('closeModal');

// Utility functions
function calculateTenure(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;
    
    if (years > 0) {
        return `${years}y ${months}m`;
    } else if (months > 0) {
        return `${months}m ${days}d`;
    } else {
        return `${days} days`;
    }
}

function getTenureBadgeClass(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    
    if (diffMonths >= 12) return 'veteran'; // 1+ years
    if (diffMonths >= 6) return 'experienced'; // 6+ months
    return 'newcomer'; // Less than 6 months
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Render functions
function renderEmployeeCard(employee) {
    const tenure = calculateTenure(employee.startDate);
    const tenureClass = getTenureBadgeClass(employee.startDate);
    
    return `
        <div class="employee-card" onclick="showEmployeeDetails(${employee.id})">
            <div class="employee-name">${employee.name}</div>
            <div class="employee-title">${employee.title}</div>
            <div class="employee-meta">
                <span>Started: ${formatDate(employee.startDate)}</span>
                <span class="tenure-badge ${tenureClass}">${tenure}</span>
            </div>
        </div>
    `;
}

function renderEmployees() {
    if (filteredEmployees.length === 0) {
        employeesGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        employeesGrid.style.display = 'grid';
        noResults.style.display = 'none';
        employeesGrid.innerHTML = filteredEmployees.map(renderEmployeeCard).join('');
    }
    
    // Update statistics
    totalCount.textContent = employees.length;
    filteredCount.textContent = filteredEmployees.length;
}

function filterEmployees(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (term === '') {
        filteredEmployees = [...employees];
    } else {
        filteredEmployees = employees.filter(employee =>
            employee.name.toLowerCase().includes(term) ||
            employee.title.toLowerCase().includes(term)
        );
    }
    
    renderEmployees();
}

// Modal functions
function showEmployeeDetails(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) return;
    
    // Populate modal content
    document.getElementById('modalName').textContent = employee.name;
    document.getElementById('modalTitle').textContent = employee.title;
    document.getElementById('modalEmail').textContent = employee.email;
    document.getElementById('modalStartDate').textContent = formatDate(employee.startDate);
    
    // Calculate and display tenure
    const tenure = calculateTenure(employee.startDate);
    const tenureElement = document.getElementById('tenureBadge');
    tenureElement.textContent = `${tenure} with TinyTech`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function hideEmployeeDetails() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event listeners
searchBox.addEventListener('input', (e) => {
    filterEmployees(e.target.value);
});

closeModalBtn.addEventListener('click', hideEmployeeDetails);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideEmployeeDetails();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        hideEmployeeDetails();
    }
});

// Make showEmployeeDetails globally accessible for onclick handlers
window.showEmployeeDetails = showEmployeeDetails;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderEmployees();
    
    // Add some interactive feedback
    console.log(`TinyTech Employee Directory loaded with ${employees.length} employees`);
    
    // Focus search box for better UX
    searchBox.focus();
});