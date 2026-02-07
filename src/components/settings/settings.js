import settingsHtml from './settings.html?raw';
import './settings.css';

// Dữ liệu mặc định
const defaultSettings = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0987 654 321",
    location: "Hà Nội, Việt Nam",
    bio: "Lập trình viên Frontend đam mê công nghệ.",
    notifications: {
        email: true,
        deadline: true,
        message: false
    },
    language: "vi",
    theme: "light"
};

function getSettingsData() {
    const profileData = localStorage.getItem('userProfile');
    let baseData = defaultSettings;
    
    if (profileData) {
        const parsedProfile = JSON.parse(profileData);
        baseData = { ...baseData, ...parsedProfile }; // Ghi đè thông tin từ Profile sang
    }

    const storedSettings = localStorage.getItem('userSettings');
    return storedSettings ? { ...baseData, ...JSON.parse(storedSettings) } : baseData;
}

window.initSettingsPage = function() {
    const data = getSettingsData();
    
    setValue('set-name', data.name);
    setValue('set-email', data.email);
    setValue('set-phone', data.phone);
    setValue('set-location', data.location);
    setValue('set-bio', data.bio);
    setValue('set-language', data.language);

    setChecked('notify-email', data.notifications?.email);
    setChecked('notify-deadline', data.notifications?.deadline);
    setChecked('notify-msg', data.notifications?.message);
    
    highlightTheme(data.theme);
}

// Hàm chuyển Tab
window.switchTab = function(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active-tab', 'bg-primary-50', 'text-primary-700', 'border-l-4', 'border-primary-600');
        btn.classList.add('text-gray-600');
    });

    const activeBtn = document.getElementById(`btn-tab-${tabName}`);
    if (activeBtn) {
        activeBtn.classList.add('active-tab');
        activeBtn.classList.remove('text-gray-600');
    }

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    const activeContent = document.getElementById(`tab-${tabName}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
    }
}

// Hàm lưu cài đặt
window.saveSettings = function() {
    const newSettings = {
        name: getValue('set-name'),
        email: getValue('set-email'),
        phone: getValue('set-phone'),
        location: getValue('set-location'),
        bio: getValue('set-bio'),
        language: getValue('set-language'),
        notifications: {
            email: getChecked('notify-email'),
            deadline: getChecked('notify-deadline'),
            message: getChecked('notify-msg')
        },
        theme: "light"
    };

    localStorage.setItem('userSettings', JSON.stringify(newSettings));
    
    const currentProfile = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : {};
    const updatedProfile = { ...currentProfile, ...newSettings };
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));

    alert("✅ Đã lưu cài đặt hệ thống thành công!");
}

// Helper functions
function setValue(id, val) { const el = document.getElementById(id); if(el) el.value = val || ''; }
function getValue(id) { const el = document.getElementById(id); return el ? el.value : ''; }
function setChecked(id, val) { const el = document.getElementById(id); if(el) el.checked = !!val; }
function getChecked(id) { const el = document.getElementById(id); return el ? el.checked : false; }

function highlightTheme(theme) {
    // Logic highlight border cho theme (có thể bổ sung sau)
}
window.selectTheme = function(theme) {
    alert(`Đã chọn giao diện: ${theme}. (Tính năng đang phát triển)`);
}

window.getSettingsComponent = function() {
    setTimeout(() => {
        if (window.initSettingsPage) window.initSettingsPage();
    }, 0);
    return settingsHtml;
}