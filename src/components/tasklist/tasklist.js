function getTaskListComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Danh sách công việc</h1>
                <button class="btn-primary">+ Thêm công việc</button>
            </div>

            <!-- Filter and Search -->
            <div class="card">
                <div class="flex flex-col md:flex-row gap-4">
                    <input type="text" placeholder="Tìm kiếm công việc..." class="input-field flex-1">
                    <select class="input-field">
                        <option>Tất cả trạng thái</option>
                        <option>Mới</option>
                        <option>Đang làm</option>
                        <option>Hoàn thành</option>
                    </select>
                    <select class="input-field">
                        <option>Tất cả ưu tiên</option>
                        <option>Cao</option>
                        <option>Trung bình</option>
                        <option>Thấp</option>
                    </select>
                </div>
            </div>

            <!-- Task List -->
            <div class="card">
                <div class="space-y-4">
                    <div class="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <input type="checkbox" class="w-5 h-5 mt-1 text-primary-600 rounded">
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-semibold text-gray-800">Thiết kế giao diện đăng nhập</h3>
                                <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Cao</span>
                            </div>
                            <p class="text-sm text-gray-600 mt-1">Tạo giao diện đăng nhập với validation form</p>
                            <div class="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                <span class="flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    15/12/2024
                                </span>
                                <span class="flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Nguyễn Văn A
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <input type="checkbox" class="w-5 h-5 mt-1 text-primary-600 rounded">
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-semibold text-gray-800">Viết API authentication</h3>
                                <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Trung bình</span>
                            </div>
                            <p class="text-sm text-gray-600 mt-1">Xây dựng API đăng nhập và đăng ký</p>
                            <div class="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                <span class="flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    20/12/2024
                                </span>
                                <span class="flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Trần Thị B
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <input type="checkbox" checked class="w-5 h-5 mt-1 text-primary-600 rounded">
                        <div class="flex-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-lg font-semibold text-gray-800 line-through">Setup database</h3>
                                <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Hoàn thành</span>
                            </div>
                            <p class="text-sm text-gray-600 mt-1 line-through">Cấu hình PostgreSQL và migrations</p>
                            <div class="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                <span class="flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    10/12/2024
                                </span>
                                <span class="flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    Lê Văn C
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
