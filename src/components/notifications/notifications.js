function getNotificationsComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Thông báo</h1>
                <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">Đánh dấu tất cả là đã đọc</button>
            </div>

            <!-- Notification Tabs -->
            <div class="card">
                <div class="flex border-b border-gray-200">
                    <button class="px-4 py-3 font-medium text-primary-600 border-b-2 border-primary-600">Tất cả</button>
                    <button class="px-4 py-3 font-medium text-gray-600 hover:text-gray-800">Chưa đọc</button>
                    <button class="px-4 py-3 font-medium text-gray-600 hover:text-gray-800">Đề cập</button>
                </div>
            </div>

            <!-- Notifications List -->
            <div class="space-y-4">
                <!-- Unread Notification 1 -->
                <div class="card border-l-4 border-blue-500 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-4 p-4">
                        <div class="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold text-gray-800">Trần Thị B vừa giao công việc cho bạn</p>
                                    <p class="text-sm text-gray-600 mt-1">Viết API authentication - Deadline: 25/12/2024</p>
                                </div>
                                <span class="w-2 h-2 bg-blue-600 rounded-full mt-1 flex-shrink-0"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-2">2 phút trước</p>
                        </div>
                    </div>
                </div>

                <!-- Unread Notification 2 -->
                <div class="card border-l-4 border-green-500 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-4 p-4">
                        <div class="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold text-gray-800">Công việc Setup database đã được hoàn thành</p>
                                    <p class="text-sm text-gray-600 mt-1">Được hoàn thành bởi Lê Văn C</p>
                                </div>
                                <span class="w-2 h-2 bg-blue-600 rounded-full mt-1 flex-shrink-0"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-2">15 phút trước</p>
                        </div>
                    </div>
                </div>

                <!-- Unread Notification 3 -->
                <div class="card border-l-4 border-purple-500 bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-4 p-4">
                        <div class="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold text-gray-800">Nguyễn Văn A đã bình luận trên Thiết kế giao diện đăng nhập</p>
                                    <p class="text-sm text-gray-600 mt-1">"Có thể thêm dark mode không?"</p>
                                </div>
                                <span class="w-2 h-2 bg-blue-600 rounded-full mt-1 flex-shrink-0"></span>
                            </div>
                            <p class="text-xs text-gray-500 mt-2">30 phút trước</p>
                        </div>
                    </div>
                </div>

                <!-- Read Notification 1 -->
                <div class="card border-l-4 border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-4 p-4">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-medium text-gray-700">Dự án "Web Dashboard" được tạo thành công</p>
                                    <p class="text-sm text-gray-500 mt-1">Bạn có thể bắt đầu thêm các công việc ngay bây giờ</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2">2 hôm trước</p>
                        </div>
                    </div>
                </div>

                <!-- Read Notification 2 -->
                <div class="card border-l-4 border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-4 p-4">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4a2 2 0 100-4m0 4a2 2 0 110-4"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-medium text-gray-700">Cập nhật hệ thống: Phiên bản mới 2.5.0</p>
                                    <p class="text-sm text-gray-500 mt-1">Xem các tính năng mới và cải thiện</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2">3 hôm trước</p>
                        </div>
                    </div>
                </div>

                <!-- Read Notification 3 -->
                <div class="card border-l-4 border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="flex items-start space-x-4 p-4">
                        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-medium text-gray-700">Nhóm của bạn sắp vượt quá giới hạn thành viên</p>
                                    <p class="text-sm text-gray-500 mt-1">Bạn hiện có 9/10 thành viên</p>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-2">5 hôm trước</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
