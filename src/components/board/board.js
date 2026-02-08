function getBoardComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Bảng Kanban</h1>
                <button class="btn-primary">+ Thêm cột mới</button>
            </div>

            <!-- Kanban Board -->
            <div class="flex space-x-4 overflow-x-auto pb-4">
                <!-- Column: To Do -->
                <div class="flex-shrink-0 w-72">
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-semibold text-gray-700">Cần làm (3)</h3>
                            <button class="text-gray-500 hover:text-gray-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800">Thiết kế logo</h4>
                                    <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Cao</span>
                                </div>
                                
                                <p class="text-sm text-gray-600 mb-3">Tạo logo mới cho dự án</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 18/12</span>
                                    <span>👤 A</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800">Viết tài liệu</h4>
                                    <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">TB</span>
                                </div>
                                <p class="text-sm text-gray-600 mb-3">Viết tài liệu hướng dẫn sử dụng</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 22/12</span>
                                    <span>👤 B</span>
                                </div>
                            </div>
                        </div>
                        <button class="w-full mt-3 text-sm text-gray-600 hover:text-gray-800 py-2">+ Thêm thẻ</button>
                    </div>
                </div>

                <!-- Column: In Progress -->
                <div class="flex-shrink-0 w-72">
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-semibold text-gray-700">Đang làm (2)</h3>
                            <button class="text-gray-500 hover:text-gray-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800">Phát triển API</h4>
                                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Cao</span>
                                </div>
                                <p class="text-sm text-gray-600 mb-3">Xây dựng REST API endpoints</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 20/12</span>
                                    <span>👤 C</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800">Test tính năng</h4>
                                    <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">TB</span>
                                </div>
                                <p class="text-sm text-gray-600 mb-3">Viết unit tests cho các components</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 25/12</span>
                                    <span>👤 A</span>
                                </div>
                            </div>
                        </div>
                        <button class="w-full mt-3 text-sm text-gray-600 hover:text-gray-800 py-2">+ Thêm thẻ</button>
                    </div>
                </div>

                <!-- Column: Review -->
                <div class="flex-shrink-0 w-72">
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-semibold text-gray-700">Đang review (1)</h3>
                            <button class="text-gray-500 hover:text-gray-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg shadow-sm cursor-move hover:shadow-md transition-shadow">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800">Code review</h4>
                                    <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">TB</span>
                                </div>
                                <p class="text-sm text-gray-600 mb-3">Review code pull request #123</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 16/12</span>
                                    <span>👤 B</span>
                                </div>
                            </div>
                        </div>
                        <button class="w-full mt-3 text-sm text-gray-600 hover:text-gray-800 py-2">+ Thêm thẻ</button>
                    </div>
                </div>

                <!-- Column: Done -->
                <div class="flex-shrink-0 w-72">
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-semibold text-gray-700">Hoàn thành (4)</h3>
                            <button class="text-gray-500 hover:text-gray-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg shadow-sm opacity-75">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800 line-through">Setup project</h4>
                                    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                                </div>
                                <p class="text-sm text-gray-600 mb-3 line-through">Khởi tạo dự án mới</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 10/12</span>
                                    <span>👤 C</span>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-sm opacity-75">
                                <div class="flex items-start justify-between mb-2">
                                    <h4 class="font-medium text-gray-800 line-through">Design mockup</h4>
                                    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">✓</span>
                                </div>
                                <p class="text-sm text-gray-600 mb-3 line-through">Thiết kế wireframe</p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>📅 12/12</span>
                                    <span>👤 A</span>
                                </div>
                            </div>
                        </div>
                        <button class="w-full mt-3 text-sm text-gray-600 hover:text-gray-800 py-2">+ Thêm thẻ</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
