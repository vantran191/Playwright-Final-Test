// tests/updateFullName.spec.ts
import { test } from '../fixture/page-fixture';
import profileData from '../data/profile-data.json';

test.describe('Update Full Name', () => {

    // Bước 1: Login trước khi chạy test UI
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateTo();
        await loginPage.login(profileData.username, profileData.password);
    });

    // BƯỚC CLEAN UP: Chạy sau khi test xong để khôi phục tên cũ qua API
    test.afterEach(async ({ request, page }) => {
        // Lấy token từ localStorage hoặc cookies nếu API yêu cầu Bearer Token
        const token = process.env.TOKEN;

        // Gửi API Request để reset lại họ tên ban đầu
        await request.patch('https://testing.platformforge.dev/api/profile', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: {
                "name": profileData.originalName // Reset về tên cũ gốc
            }
        });
    });

    // BÀI TẬP: Update Full name trên giao diện (UI)
    test('Update Full name successfully', async ({ homePage, profilePage }) => {
        
        // Điều hướng sang trang cá nhân
        await homePage.goToProfile();

        // Tiến hành điền và lưu tên mới từ file JSON
        await profilePage.updateFullName(profileData.newName);

        // Kiểm tra thông báo cập nhật thành công hiển thị
        await profilePage.verifyUpdateSuccess();
    });

});
