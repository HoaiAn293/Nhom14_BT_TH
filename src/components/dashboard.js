function getDashboardComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
                <button class="btn-primary">Tạo công việc mới</button>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="card">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">Tổng công việc</p>
                            <p class="text-2xl font-bold text-gray-800 mt-1">24</p>
                        </div>
                        <div class="bg-blue-100 p-3 rounded-full">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">Đang thực hiện</p>
                            <p class="text-2xl font-bold text-gray-800 mt-1">8</p>
                        </div>
                        <div class="bg-yellow-100 p-3 rounded-full">
                            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">Hoàn thành</p>
                            <p class="text-2xl font-bold text-gray-800 mt-1">12</p>
                        </div>
                        <div class="bg-green-100 p-3 rounded-full">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">Quá hạn</p>
                            <p class="text-2xl font-bold text-gray-800 mt-1">4</p>
                        </div>
                        <div class="bg-red-100 p-3 rounded-full">
                            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Tasks -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="card">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Công việc gần đây</h2>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" class="w-4 h-4 text-primary-600 rounded">
                                <span class="text-gray-700">Hoàn thiện giao diện Dashboard</span>
                            </div>
                            <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Đang làm</span>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" class="w-4 h-4 text-primary-600 rounded">
                                <span class="text-gray-700">Review code component</span>
                            </div>
                            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Mới</span>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" checked class="w-4 h-4 text-primary-600 rounded">
                                <span class="text-gray-700 line-through">Setup Tailwind CSS</span>
                            </div>
                            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Hoàn thành</span>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Tiến độ dự án</h2>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-gray-600">Dự án A</span>
                                <span class="text-gray-800 font-medium">75%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full" style="width: 75%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-gray-600">Dự án B</span>
                                <span class="text-gray-800 font-medium">45%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full" style="width: 45%"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-gray-600">Dự án C</span>
                                <span class="text-gray-800 font-medium">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full" style="width: 90%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
