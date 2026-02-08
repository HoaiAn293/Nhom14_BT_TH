// Calendar state
let calendarState = {
    currentDate: new Date(2026, 1, 8), // February 8, 2026
    events: [
        { id: 1, title: 'Họp nhóm', date: '2026-02-11', startTime: '09:00', endTime: '10:00', color: 'blue', description: 'Họp nhóm bàn về tiến độ dự án' },
        { id: 2, title: 'Deadline', date: '2026-02-15', startTime: '09:00', endTime: '17:00', color: 'red', description: 'Deadline nộp dự án' },
        { id: 3, title: 'Demo', date: '2026-02-15', startTime: '14:00', endTime: '15:00', color: 'green', description: 'Demo sản phẩm cho khách hàng' },
        { id: 4, title: 'Code Review', date: '2026-02-20', startTime: '10:00', endTime: '11:00', color: 'purple', description: 'Review code với team' }
    ],
    nextId: 5
};

function getMonthDays(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
}

function formatDate(date) {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
}

function formatDisplayDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

function getEventsForDate(dateStr) {
    return calendarState.events.filter(e => e.date === dateStr);
}

function renderCalendarGrid() {
    const { daysInMonth, startingDayOfWeek, year, month } = getMonthDays(calendarState.currentDate);
    let html = '';
    
    // Empty cells before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        html += '<div class="aspect-square p-2 border border-gray-100 bg-gray-50 rounded-lg"></div>';
    }
    
    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = formatDate(date);
        const events = getEventsForDate(dateStr);
        const isToday = formatDate(new Date()) === dateStr;
        
        let dayHtml = `<div class="aspect-square p-2 border rounded-lg cursor-pointer hover:shadow-md transition-shadow ${
            isToday ? 'border-primary-300 bg-primary-50' : 'border-gray-200 hover:bg-gray-50'
        }" onclick="selectCalendarDate('${dateStr}')">`;
        
        dayHtml += `<div class="text-sm font-semibold ${isToday ? 'text-primary-700' : 'text-gray-700'}">${day}</div>`;
        
        if (events.length > 0) {
            dayHtml += '<div class="mt-1 space-y-0.5">';
            events.slice(0, 2).forEach(event => {
                const colorClasses = {
                    'blue': 'bg-blue-500',
                    'red': 'bg-red-500',
                    'green': 'bg-green-500',
                    'purple': 'bg-purple-500',
                    'yellow': 'bg-yellow-500'
                };
                dayHtml += `<div class="text-xs ${colorClasses[event.color] || 'bg-blue-500'} text-white px-1 py-0.5 rounded truncate">${event.title}</div>`;
            });
            if (events.length > 2) {
                dayHtml += `<div class="text-xs text-gray-500">+${events.length - 2} more</div>`;
            }
            dayHtml += '</div>';
        }
        
        dayHtml += '</div>';
        html += dayHtml;
    }
    
    return html;
}

function selectCalendarDate(dateStr) {
    const events = getEventsForDate(dateStr);
    const container = document.getElementById('component-container');
    const existingModal = document.getElementById('calendar-modal');
    if (existingModal) existingModal.remove();
    
    const date = new Date(dateStr);
    const displayDate = formatDisplayDate(dateStr);
    const modalHtml = `
        <div id="calendar-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h3 class="text-2xl font-bold mb-4">Sự kiện ngày ${displayDate}</h3>
                <div class="space-y-3 max-h-60 overflow-y-auto mb-6">
                    ${events.length === 0 ? '<p class="text-gray-500 text-center py-4">Không có sự kiện nào trong ngày này</p>' : events.map(event => `
                        <div class="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                            <div class="flex-1">
                                <h4 class="font-semibold">${event.title}</h4>
                                <p class="text-sm text-gray-600">${event.startTime} - ${event.endTime}</p>
                                <p class="text-sm text-gray-500">${event.description}</p>
                            </div>
                            <div class="flex space-x-2">
                                <button onclick="editEvent(${event.id})" class="text-blue-600 hover:text-blue-700">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button onclick="deleteEvent(${event.id})" class="text-red-600 hover:text-red-700">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button onclick="openAddEventModal('${dateStr}')" class="btn-primary w-full mb-2">+ Thêm sự kiện</button>
                <button onclick="document.getElementById('calendar-modal').remove()" class="btn-secondary w-full">Đóng</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openAddEventModal(dateStr = '') {
    const existingModal = document.getElementById('event-modal');
    if (existingModal) existingModal.remove();
    
    const modalHtml = `
        <div id="event-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h3 class="text-2xl font-bold mb-6">Thêm sự kiện mới</h3>
                <form onsubmit="saveEvent(event, '${dateStr}')">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Tiêu đề sự kiện</label>
                            <input type="text" id="eventTitle" class="input-field" placeholder="Nhập tiêu đề" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Ngày (MM/DD/YYYY)</label>
                            <input type="date" id="eventDate" class="input-field" value="${dateStr}" required>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-2">Giờ bắt đầu</label>
                                <input type="time" id="eventStartTime" class="input-field" required>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">Giờ kết thúc</label>
                                <input type="time" id="eventEndTime" class="input-field" required>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Mô tả</label>
                            <textarea id="eventDescription" class="input-field" rows="3" placeholder="Nhập mô tả chi tiết"></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Màu sắc</label>
                            <select id="eventColor" class="input-field">
                                <option value="blue">Xanh (Blue)</option>
                                <option value="red">Đỏ (Red)</option>
                                <option value="green">Xanh lá (Green)</option>
                                <option value="purple">Tím (Purple)</option>
                                <option value="yellow">Vàng (Yellow)</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex space-x-2 mt-6">
                        <button type="submit" class="btn-primary flex-1">Lưu sự kiện</button>
                        <button type="button" onclick="document.getElementById('event-modal').remove()" class="btn-secondary flex-1">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function saveEvent(e, defaultDate) {
    e.preventDefault();
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const startTime = document.getElementById('eventStartTime').value;
    const endTime = document.getElementById('eventEndTime').value;
    const description = document.getElementById('eventDescription').value;
    const color = document.getElementById('eventColor').value;
    
    const newEvent = {
        id: calendarState.nextId++,
        title,
        date,
        startTime,
        endTime,
        description,
        color
    };
    
    calendarState.events.push(newEvent);
    document.getElementById('event-modal').remove();
    showComponent('calendar');
}

function editEvent(eventId) {
    const event = calendarState.events.find(e => e.id === eventId);
    if (!event) return;
    
    const existingModal = document.getElementById('event-modal');
    if (existingModal) existingModal.remove();
    
    const modalHtml = `
        <div id="event-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h3 class="text-2xl font-bold mb-6">Chỉnh sửa sự kiện</h3>
                <form onsubmit="updateEvent(event, ${eventId})">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Tiêu đề sự kiện</label>
                            <input type="text" id="eventTitle" class="input-field" value="${event.title}" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Ngày (MM/DD/YYYY)</label>
                            <input type="date" id="eventDate" class="input-field" value="${event.date}" required>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold mb-2">Giờ bắt đầu</label>
                                <input type="time" id="eventStartTime" class="input-field" value="${event.startTime}" required>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">Giờ kết thúc</label>
                                <input type="time" id="eventEndTime" class="input-field" value="${event.endTime}" required>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Mô tả</label>
                            <textarea id="eventDescription" class="input-field" rows="3">${event.description}</textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Màu sắc</label>
                            <select id="eventColor" class="input-field">
                                <option value="blue" ${event.color === 'blue' ? 'selected' : ''}>Xanh (Blue)</option>
                                <option value="red" ${event.color === 'red' ? 'selected' : ''}>Đỏ (Red)</option>
                                <option value="green" ${event.color === 'green' ? 'selected' : ''}>Xanh lá (Green)</option>
                                <option value="purple" ${event.color === 'purple' ? 'selected' : ''}>Tím (Purple)</option>
                                <option value="yellow" ${event.color === 'yellow' ? 'selected' : ''}>Vàng (Yellow)</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex space-x-2 mt-6">
                        <button type="submit" class="btn-primary flex-1">Cập nhật</button>
                        <button type="button" onclick="document.getElementById('event-modal').remove()" class="btn-secondary flex-1">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function updateEvent(e, eventId) {
    e.preventDefault();
    const event = calendarState.events.find(ev => ev.id === eventId);
    if (!event) return;
    
    event.title = document.getElementById('eventTitle').value;
    event.date = document.getElementById('eventDate').value;
    event.startTime = document.getElementById('eventStartTime').value;
    event.endTime = document.getElementById('eventEndTime').value;
    event.description = document.getElementById('eventDescription').value;
    event.color = document.getElementById('eventColor').value;
    
    document.getElementById('event-modal').remove();
    showComponent('calendar');
}

function deleteEvent(eventId) {
    if (confirm('Bạn chắc chắn muốn xóa sự kiện này?')) {
        calendarState.events = calendarState.events.filter(e => e.id !== eventId);
        showComponent('calendar');
    }
}

function goToMonth(offset) {
    calendarState.currentDate.setMonth(calendarState.currentDate.getMonth() + offset);
    showComponent('calendar');
}

function goToToday() {
    calendarState.currentDate = new Date();
    showComponent('calendar');
}

function getCalendarComponent() {
    const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    const monthLabel = `${monthNames[calendarState.currentDate.getMonth()]}, ${calendarState.currentDate.getFullYear()}`;
    
    const upcomingEvents = calendarState.events
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
    
    const colorClasses = {
        'blue': 'bg-blue-50 border-blue-500',
        'red': 'bg-red-50 border-red-500',
        'green': 'bg-green-50 border-green-500',
        'purple': 'bg-purple-50 border-purple-500',
        'yellow': 'bg-yellow-50 border-yellow-500'
    };
    
    const colorBadges = {
        'blue': 'bg-blue-500',
        'red': 'bg-red-500',
        'green': 'bg-green-500',
        'purple': 'bg-purple-500',
        'yellow': 'bg-yellow-500'
    };
    
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Lịch</h1>
                <div class="flex space-x-2">
                    <button onclick="goToToday()" class="btn-secondary">📅 Hôm nay</button>
                    <button onclick="openAddEventModal()" class="btn-primary">+ Thêm sự kiện</button>
                </div>
            </div>

            <!-- Calendar View -->
            <div class="card">
                <div class="flex items-center justify-between mb-6">
                    <button onclick="goToMonth(-1)" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <h2 class="text-xl font-semibold text-gray-800 min-w-48 text-center">${monthLabel}</h2>
                    <button onclick="goToMonth(1)" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                <!-- Calendar Grid -->
                <div class="grid grid-cols-7 gap-2">
                    <!-- Day Headers -->
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">CN</div>
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">T2</div>
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">T3</div>
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">T4</div>
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">T5</div>
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">T6</div>
                    <div class="text-center text-sm font-semibold text-gray-600 py-2">T7</div>

                    <!-- Calendar Days -->
                    ${renderCalendarGrid()}
                </div>
            </div>

            <!-- Upcoming Events -->
            <div class="card">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">📅 Sự kiện sắp tới</h2>
                <div class="space-y-3">
                    ${upcomingEvents.length === 0 ? '<p class="text-gray-500 text-center py-4">Không có sự kiện nào</p>' : upcomingEvents.map(event => `
                        <div class="flex items-center space-x-4 p-4 rounded-lg border-l-4 transition-shadow hover:shadow-md ${colorClasses[event.color] || 'bg-blue-50 border-blue-500'}">
                            <div class="flex-shrink-0">
                                <div class="min-w-[3rem] h-12 px-2 ${colorBadges[event.color] || 'bg-blue-500'} rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                                    ${formatDisplayDate(event.date)}
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-800">${event.title}</h3>
                                <p class="text-sm text-gray-600">${event.startTime} - ${event.endTime}</p>
                                <p class="text-xs text-gray-500">${event.description}</p>
                            </div>
                            <div class="flex space-x-2">
                                <button onclick="editEvent(${event.id})" class="text-blue-600 hover:text-blue-700 transition-colors" title="Chỉnh sửa">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                </button>
                                <button onclick="deleteEvent(${event.id})" class="text-red-600 hover:text-red-700 transition-colors" title="Xóa">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
