import profileHtml from './profile.html?raw';
import './profile.css';

const defaultProfile = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    role: "Developer",
    phone: "0987 654 321",
    avatarText: "NA"
};

function getProfileData() {
    const storedData = localStorage.getItem('userProfile');
    return storedData ? JSON.parse(storedData) : defaultProfile;
}

function renderProfileHTML() {
    const data = getProfileData();
    let html = profileHtml;
    return html;
}

window.initProfilePage = function() {
    const data = getProfileData();
    
    updateUI(data);

    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const inputRole = document.getElementById('input-role');
    const inputPhone = document.getElementById('input-phone');

    if (inputName) inputName.value = data.name;
    if (inputEmail) inputEmail.value = data.email;
    if (inputRole) inputRole.value = data.role;
    if (inputPhone) inputPhone.value = data.phone;
}

function updateUI(data) {
    const elName = document.getElementById('profile-name');
    const elEmail = document.getElementById('profile-email');
    const elRole = document.getElementById('profile-role');
    const elAvatar = document.getElementById('avatar-text');
    
    if (elName) elName.innerText = data.name;
    if (elEmail) elEmail.innerText = data.email;
    if (elRole) elRole.innerText = data.role;
    if (elAvatar) elAvatar.innerText = data.avatarText;
}

window.toggleEditProfile = function() {
    const modal = document.getElementById('edit-profile-modal');
    if (!modal) return;

    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('open'), 10);
        
        const data = getProfileData();
        document.getElementById('input-name').value = data.name;
        document.getElementById('input-email').value = data.email;
        document.getElementById('input-role').value = data.role;
        document.getElementById('input-phone').value = data.phone || '';

    } else {
        modal.classList.remove('open');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

window.saveProfile = function() {
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const role = document.getElementById('input-role').value;
    const phone = document.getElementById('input-phone').value;

    const names = name.trim().split(' ');
    const avatarText = names.length > 1 
        ? names[names.length - 2][0] + names[names.length - 1][0] 
        : name.slice(0, 2);

    const newData = {
        name,
        email,
        role,
        phone,
        avatarText: avatarText.toUpperCase()
    };

    localStorage.setItem('userProfile', JSON.stringify(newData));

    updateUI(newData);

    toggleEditProfile();
    setTimeout(() => {
        alert('✅ Đã lưu thông tin thành công!');
    }, 350);
}

window.getProfileComponent = function() {
    setTimeout(() => {
        if (window.initProfilePage) window.initProfilePage();
    }, 0);

    return profileHtml;
}