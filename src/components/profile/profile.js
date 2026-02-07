function getProfileComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Hồ sơ</h1>
                <button class="btn-primary">Chỉnh sửa hồ sơ</button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Profile Card -->
                <div class="lg:col-span-1">
                    <div class="card text-center">
                        <div class="flex justify-center mb-4">
                            <div class="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center">
                                <span class="text-4xl font-bold text-primary-600">NA</span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-1">Nguyễn Văn A</h2>
                        <p class="text-gray-600 mb-4">nguyenvana@example.com</p>
                        <div class="flex justify-center space-x-2 mb-6">
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Developer</span>
                            <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Active</span>
                        </div>
                        <div class="space-y-2 text-sm text-gray-600">
                            <div class="flex items-center justify-center space-x-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Hà Nội, Việt Nam</span>
                            </div>
                            <div class="flex items-center justify-center space-x-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span>Tham gia: 01/01/2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Profile Details -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Statistics -->
                    <div class="card">
                        <h2 class="text-xl font-semibold text-gray-800 mb-4">Thống kê</h2>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <p class="text-2xl font-bold text-gray-800">24</p>
                                <p class="text-sm text-gray-600">Công việc</p>
                            </div>
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <p class="text-2xl font-bold text-gray-800">12</p>
                                <p class="text-sm text-gray-600">Hoàn thành</p>
                            </div>
                            <div class="text-center p-4 bg-gray-50 rounded-lg">
                                <p class="text-2xl font-bold text-gray-800">3</p>
                                <p class="text-sm text-gray-600">Dự án</p>
                            </div>
                        </div>
                    </div>

                    <!-- Activity -->
                    <div class="card">
                        <h2 class="text-xl font-semibold text-gray-800 mb-4">Hoạt động gần đây</h2>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <p class="text-gray-800">Đã hoàn thành công việc "Setup Tailwind CSS"</p>
                                    <p class="text-sm text-gray-500">2 giờ trước</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <p class="text-gray-800">Đã tạo công việc mới "Thiết kế giao diện"</p>
                                    <p class="text-sm text-gray-500">5 giờ trước</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                </div>
                                <div class="flex-1">
                                    <p class="text-gray-800">Đã cập nhật công việc "Phát triển API"</p>
                                    <p class="text-sm text-gray-500">1 ngày trước</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Skills -->
                    <div class="card">
                        <h2 class="text-xl font-semibold text-gray-800 mb-4">Kỹ năng</h2>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">React</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
