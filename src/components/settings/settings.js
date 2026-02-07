function getSettingsComponent() {
    return `
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-800">Cài đặt</h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Settings Menu -->
                <div class="lg:col-span-1">
                    <div class="card space-y-2">
                        <button class="w-full text-left px-4 py-3 rounded-lg bg-primary-50 text-primary-600 font-medium">
                            Tài khoản
                        </button>
                        <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
                            Thông báo
                        </button>
                        <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
                            Giao diện
                        </button>
                        <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
                            Bảo mật
                        </button>
                        <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
                            Tích hợp
                        </button>
                    </div>
                </div>

                <!-- Settings Content -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Account Settings -->
                    <div class="card">
                        <h2 class="text-xl font-semibold text-gray-800 mb-6">Thông tin tài khoản</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                                <input type="text" value="Nguyễn Văn A" class="input-field">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" value="nguyenvana@example.com" class="input-field">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                                <input type="tel" value="0123456789" class="input-field">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Vị trí</label>
                                <input type="text" value="Hà Nội, Việt Nam" class="input-field">
                            </div>
                            <div class="flex justify-end">
                                <button class="btn-primary">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>

                    <!-- Notification Settings -->
                    <div class="card">
                        <h2 class="text-xl font-semibold text-gray-800 mb-6">Cài đặt thông báo</h2>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="font-medium text-gray-800">Email thông báo</h3>
                                    <p class="text-sm text-gray-600">Nhận thông báo qua email</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="font-medium text-gray-800">Thông báo deadline</h3>
                                    <p class="text-sm text-gray-600">Nhắc nhở khi sắp đến deadline</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="font-medium text-gray-800">Thông báo nhận xét</h3>
                                    <p class="text-sm text-gray-600">Thông báo khi có người nhận xét</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Theme Settings -->
                    <div class="card">
                        <h2 class="text-xl font-semibold text-gray-800 mb-6">Giao diện</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                                <select class="input-field">
                                    <option>Sáng</option>
                                    <option>Tối</option>
                                    <option>Tự động</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Ngôn ngữ</label>
                                <select class="input-field">
                                    <option>Tiếng Việt</option>
                                    <option>English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
