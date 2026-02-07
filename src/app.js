// Component navigation
function showComponent(componentName) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active', 'bg-primary-50', 'text-primary-600');
    });
    
    // Find and activate the clicked nav item
    const navButtons = document.querySelectorAll('.nav-item');
    navButtons.forEach((btn, index) => {
        const componentNames = ['dashboard', 'tasklist', 'board', 'calendar', 'settings', 'profile', 'notifications'];
        if (componentNames[index] === componentName) {
            btn.classList.add('active', 'bg-primary-50', 'text-primary-600');
        }
    });
    
    // Load component
    const container = document.getElementById('component-container');
    
    switch(componentName) {
        case 'dashboard':
            container.innerHTML = getDashboardComponent();
            break;
        case 'tasklist':
            container.innerHTML = getTaskListComponent();
            break;
        case 'board':
            container.innerHTML = getBoardComponent();
            break;
        case 'calendar':
            container.innerHTML = getCalendarComponent();
            break;
        case 'settings':
            container.innerHTML = getSettingsComponent();
            break;
        case 'profile':
            container.innerHTML = getProfileComponent();
            break;
        case 'notifications':
            container.innerHTML = getNotificationsComponent();
            break;
        default:
            container.innerHTML = getDashboardComponent();
    }
}

// Initialize with dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Set first nav item as active
    const firstNavItem = document.querySelector('.nav-item');
    if (firstNavItem) {
        firstNavItem.classList.add('active', 'bg-primary-50', 'text-primary-600');
    }
    showComponent('dashboard');
});
