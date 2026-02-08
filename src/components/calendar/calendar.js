function getCalendarComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Lịch</h1>
                <div class="flex space-x-2">
                    <button class="btn-secondary">Hôm nay</button>
                    <button class="btn-primary">+ Thêm sự kiện</button>
                </div>
            </div>

            <!-- Calendar View -->
            <div class="card">
                <div class="flex items-center justify-between mb-6">
                    <button class="p-2 hover:bg-gray-100 rounded-lg">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <h2 class="text-xl font-semibold text-gray-800">Tháng 12, 2024</h2>
                    <button class="p-2 hover:bg-gray-100 rounded-lg">
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
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">1</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">2</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">3</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">4</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">5</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">6</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">7</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">8</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">9</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">10</div>
                    </div>
                    <div class="aspect-square p-2 border border-primary-200 bg-primary-50 rounded-lg cursor-pointer">
                        <div class="text-sm font-semibold text-primary-700">11</div>
                        <div class="mt-1 space-y-1">
                            <div class="text-xs bg-blue-500 text-white px-1 py-0.5 rounded truncate">Họp nhóm</div>
                        </div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">12</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">13</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">14</div>
                    </div>
                    <div class="aspect-square p-2 border border-primary-200 bg-primary-50 rounded-lg cursor-pointer">
                        <div class="text-sm font-semibold text-primary-700">15</div>
                        <div class="mt-1 space-y-1">
                            <div class="text-xs bg-red-500 text-white px-1 py-0.5 rounded truncate">Deadline</div>
                            <div class="text-xs bg-green-500 text-white px-1 py-0.5 rounded truncate">Demo</div>
                        </div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">16</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">17</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">18</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">19</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">20</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">21</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">22</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">23</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">24</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">25</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">26</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">27</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">28</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">29</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">30</div>
                    </div>
                    <div class="aspect-square p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm text-gray-400">31</div>
                    </div>
                </div>
            </div>

            <!-- Upcoming Events -->
            <div class="card">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Sự kiện sắp tới</h2>
                <div class="space-y-3">
                    <div class="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-semibold">15</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-semibold text-gray-800">Deadline dự án</h3>
                            <p class="text-sm text-gray-600">09:00 - 17:00</p>
                        </div>
                        <button class="text-gray-400 hover:text-gray-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center space-x-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-semibold">15</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-semibold text-gray-800">Demo sản phẩm</h3>
                            <p class="text-sm text-gray-600">14:00 - 15:00</p>
                        </div>
                        <button class="text-gray-400 hover:text-gray-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
