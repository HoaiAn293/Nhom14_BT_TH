function getNotificationsComponent() {
  return `
        <div class="space-y-6">
            <!-- Header with Stats -->
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">Thông báo</h1>
                    <p class="text-sm text-gray-500 mt-1">Bạn có <span class="font-semibold text-primary-600">5 thông báo chưa đọc</span></p>
                </div>
                <div class="flex gap-3">
                    <button onclick="markAllAsRead()" class="text-sm text-primary-600 hover:text-primary-700 font-medium px-4 py-2 rounded-lg hover:bg-primary-50">
                        ✓ Đánh dấu tất cả
                    </button>
                    <button onclick="clearAllNotifications()" class="text-sm text-red-600 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50">
                        🗑 Xóa hết
                    </button>
                </div>
            </div>

            <!-- Notification Filter Tabs -->
            <div class="card border-b border-gray-200">
                <div class="flex flex-wrap gap-2 p-4 border-b border-gray-100">
                    <button onclick="filterNotifications('all')" class="filter-tab active px-4 py-2 rounded-full bg-primary-100 text-primary-600 font-medium text-sm transition-all" data-filter="all">
                        Tất cả
                    </button>
                    <button onclick="filterNotifications('unread')" class="filter-tab px-4 py-2 rounded-full hover:bg-gray-100 text-gray-600 font-medium text-sm transition-all" data-filter="unread">
                        Chưa đọc (5)
                    </button>
                    <button onclick="filterNotifications('mentions')" class="filter-tab px-4 py-2 rounded-full hover:bg-gray-100 text-gray-600 font-medium text-sm transition-all" data-filter="mentions">
                        Đề cập
                    </button>
                    <button onclick="filterNotifications('tasks')" class="filter-tab px-4 py-2 rounded-full hover:bg-gray-100 text-gray-600 font-medium text-sm transition-all" data-filter="tasks">
                        Công việc
                    </button>
                </div>
            </div>

            <!-- Empty State (Hidden by default) -->
            <div id="empty-state" class="hidden text-center py-12">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <p class="text-gray-500 text-lg">Không có thông báo</p>
            </div>

            <!-- Notifications List -->
            <div id="notifications-list" class="space-y-3">
                <!-- Unread Notification 1 - Task Assignment -->
                <div class="notification-item card border-l-4 border-blue-500 bg-blue-50 hover:shadow-md transition-all cursor-pointer group" data-type="tasks" data-read="false">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-300">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-semibold text-gray-800 group-hover:text-blue-700">Trần Thị B vừa giao công việc cho bạn</p>
                                    <p class="text-sm text-gray-600 mt-1">Viết API authentication - Deadline: 25/12/2024</p>
                                </div>
                                <span class="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0 unread-dot"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">2 phút trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); markAsRead(this)" class="p-2 hover:bg-blue-100 rounded-lg" title="Đánh dấu đã đọc">
                                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </button>
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg" title="Xóa">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Unread Notification 2 - Task Complete -->
                <div class="notification-item card border-l-4 border-green-500 bg-green-50 hover:shadow-md transition-all cursor-pointer group" data-type="tasks" data-read="false">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-300">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-semibold text-gray-800 group-hover:text-green-700">Công việc Setup database đã được hoàn thành</p>
                                    <p class="text-sm text-gray-600 mt-1">Được hoàn thành bởi Lê Văn C</p>
                                </div>
                                <span class="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0 unread-dot"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">15 phút trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); markAsRead(this)" class="p-2 hover:bg-green-100 rounded-lg">
                                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </button>
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Unread Notification 3 - Mention -->
                <div class="notification-item card border-l-4 border-purple-500 bg-purple-50 hover:shadow-md transition-all cursor-pointer group" data-type="mentions" data-read="false">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-300">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-semibold text-gray-800 group-hover:text-purple-700">Nguyễn Văn A đã bình luận trên Thiết kế giao diện đăng nhập</p>
                                    <p class="text-sm text-gray-600 mt-1 italic">"Có thể thêm dark mode không?"</p>
                                </div>
                                <span class="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0 unread-dot"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">30 phút trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); markAsRead(this)" class="p-2 hover:bg-purple-100 rounded-lg">
                                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </button>
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Unread Notification 4 -->
                <div class="notification-item card border-l-4 border-orange-500 bg-orange-50 hover:shadow-md transition-all cursor-pointer group" data-type="mentions" data-read="false">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-300">
                            <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-semibold text-gray-800 group-hover:text-orange-700">Nhóm của bạn sắp vượt quá giới hạn thành viên</p>
                                    <p class="text-sm text-gray-600 mt-1">Bạn hiện có 9/10 thành viên - Nâng cấp ngay</p>
                                </div>
                                <span class="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0 unread-dot"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">1 giờ trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); markAsRead(this)" class="p-2 hover:bg-orange-100 rounded-lg">
                                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </button>
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Unread Notification 5 -->
                <div class="notification-item card border-l-4 border-indigo-500 bg-indigo-50 hover:shadow-md transition-all cursor-pointer group" data-type="tasks" data-read="false">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-300">
                            <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4a2 2 0 100-4m0 4a2 2 0 110-4"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-semibold text-gray-800 group-hover:text-indigo-700">Admin đã cập nhật dự án</p>
                                    <p class="text-sm text-gray-600 mt-1">Thiết lập quyền hạn mới cho nhóm của bạn</p>
                                </div>
                                <span class="w-3 h-3 bg-blue-600 rounded-full mt-1.5 flex-shrink-0 unread-dot"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">2 giờ trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); markAsRead(this)" class="p-2 hover:bg-indigo-100 rounded-lg">
                                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </button>
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Read Notification 1 -->
                <div class="notification-item card border-l-4 border-gray-300 opacity-75 hover:opacity-100 hover:shadow-md transition-all cursor-pointer group" data-type="all" data-read="true">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-medium text-gray-700">Dự án "Web Dashboard" được tạo thành công</p>
                                    <p class="text-sm text-gray-500 mt-1">Bạn có thể bắt đầu thêm các công việc ngay bây giờ</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">2 hôm trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Read Notification 2 -->
                <div class="notification-item card border-l-4 border-gray-300 opacity-75 hover:opacity-100 hover:shadow-md transition-all cursor-pointer group" data-type="all" data-read="true">
                    <div class="flex items-start space-x-3 p-4">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex-1">
                                    <p class="font-medium text-gray-700">Cập nhật hệ thống: Phiên bản mới 2.5.0</p>
                                    <p class="text-sm text-gray-500 mt-1">Xem các tính năng mới và cải thiện hiệu suất</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-3">3 hôm trước</p>
                        </div>
                        <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); deleteNotification(this)" class="p-2 hover:bg-red-100 rounded-lg">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-10px);
                }
            }

            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(10px);
                }
            }
            
            .notification-item {
                animation: slideIn 0.3s ease-out;
            }
            
            .notification-item.removing {
                animation: slideOut 0.3s ease-out forwards;
            }
        </style>

        <script>
            function filterNotifications(type) {
                document.querySelectorAll('.filter-tab').forEach(tab => {
                    tab.classList.remove('active', 'bg-primary-100', 'text-primary-600');
                    tab.classList.add('hover:bg-gray-100', 'text-gray-600');
                });
                event.target.classList.add('active', 'bg-primary-100', 'text-primary-600');
                event.target.classList.remove('hover:bg-gray-100', 'text-gray-600');

                const items = document.querySelectorAll('.notification-item');
                items.forEach(item => {
                    if (type === 'all') {
                        item.style.display = 'block';
                    } else if (type === 'unread') {
                        item.style.display = item.dataset.read === 'false' ? 'block' : 'none';
                    } else {
                        item.style.display = item.dataset.type === type ? 'block' : 'none';
                    }
                });
            }

            function markAsRead(button) {
                const notifItem = button.closest('.notification-item');
                notifItem.dataset.read = 'true';
                notifItem.classList.remove('bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-orange-50', 'bg-indigo-50');
                notifItem.classList.add('opacity-75');
                const dot = notifItem.querySelector('.unread-dot');
                if (dot) dot.remove();
                showToast('✓ Đánh dấu là đã đọc', 'success');
            }

            function deleteNotification(button) {
                const notifItem = button.closest('.notification-item');
                notifItem.classList.add('removing');
                setTimeout(() => {
                    notifItem.remove();
                    showToast('🗑 Đã xóa thông báo', 'info');
                }, 300);
            }

            function markAllAsRead() {
                const unreadItems = document.querySelectorAll('.notification-item[data-read="false"]');
                unreadItems.forEach(item => {
                    item.dataset.read = 'true';
                    item.classList.remove('bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-orange-50', 'bg-indigo-50');
                    item.classList.add('opacity-75');
                    const dots = item.querySelectorAll('.unread-dot');
                    dots.forEach(dot => dot.remove());
                });
                showToast('✓ Đã đánh dấu tất cả', 'success');
            }

            function clearAllNotifications() {
                if (confirm('Bạn có chắc chắn muốn xóa tất cả thông báo?')) {
                    const items = document.querySelectorAll('.notification-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('removing');
                            setTimeout(() => item.remove(), 300);
                        }, index * 50);
                    });
                    setTimeout(() => {
                        showToast('🗑 Đã xóa tất cả thông báo', 'info');
                    }, items.length * 50 + 300);
                }
            }

            function showToast(message, type = 'info') {
                const toast = document.createElement('div');
                toast.className = 'fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium z-50';
                
                if (type === 'success') {
                    toast.classList.add('bg-green-500');
                } else if (type === 'error') {
                    toast.classList.add('bg-red-500');
                } else {
                    toast.classList.add('bg-blue-500');
                }
                
                toast.textContent = message;
                toast.style.animation = 'fadeIn 0.3s ease-out';
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.style.animation = 'fadeOut 0.3s ease-out forwards';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            }
        </script>
    `;
}
