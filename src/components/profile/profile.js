import profileHtml from './profile.html?raw';
import './profile.css';

window.toggleEditProfile = function() {
    const modal = document.getElementById('edit-profile-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    if (!modal) return;

    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('open');
        }, 10);
    } else {
        modal.classList.remove('open');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

window.saveProfile = function() {
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const role = document.getElementById('input-role').value;
    const names = name.trim().split(' ');
    const avatarText = names.length > 1 
        ? names[names.length - 2][0] + names[names.length - 1][0] 
        : name.slice(0, 2);

    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-email').innerText = email;
    document.getElementById('profile-role').innerText = role;
    document.getElementById('avatar-text').innerText = avatarText.toUpperCase();

    toggleEditProfile();
    
    setTimeout(() => {
        alert(`✅ Đã cập nhật hồ sơ thành công!\n- Tên: ${name}\n- Vai trò: ${role}`);
    }, 350);
}

window.getProfileComponent = function() {
    return profileHtml;
}