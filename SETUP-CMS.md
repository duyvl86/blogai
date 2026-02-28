# Hướng dẫn cài đặt Decap CMS với GitHub Token

## Bước 1: Tạo GitHub Personal Access Token (PAT)

1. **Đăng nhập GitHub** → Vào https://github.com

2. **Vào Settings** → Click avatar góc phải → Settings
   ```
   https://github.com/settings
   ```

3. **Vào Developer settings** → Cuộn xuống cuối menu bên trái
   ```
   https://github.com/settings/apps
   ```

4. **Chọn Personal access tokens** → **Fine-grained tokens**

5. **Tạo token mới** → Click "Generate new token"

6. **Điền thông tin:**
   - **Token name**: `NongTech CMS` (hoặc tên tùy chọn)
   - **Expiration**: Chọn `No expiration` (không hết hạn)

7. **Cấp quyền Repository access:**
   - Chọn **Only select repositories**
   - Tìm và chọn repo `duyvl86/blogai`

8. **Cấp quyền Permissions:**
   - **Contents**: ✅ Read and write
   - **Pull requests**: ✅ Read and write

9. **Click "Generate token"** → Copy token ngay lập tức!
   - Token chỉ hiện 1 lần duy nhất
   - Lưu vào Notepad hoặc nơi an toàn

---

## Bước 2: Deploy Site lên Cloudflare

1. **Push code lên GitHub:**
   ```bash
   cd ../blogai
   git add .
   git commit -m "Update CMS config"
   git push origin main
   ```

2. **Cloudflare sẽ tự động deploy** 
   - Vào https://dash.cloudflare.com
   - Chọn Pages → blogai
   - Đợi deployment hoàn tất

---

## Bước 3: Sử dụng CMS

1. **Mở trang admin:**
   ```
   https://blogai-d0p.pages.dev/admin/
   ```

2. **Đăng nhập:**
   - Username: `duyvl86` (username GitHub của bạn)
   - Password/Token: Dán token vừa tạo ở Bước 1

3. **Bắt đầu viết bài!**

---

## Nếu gặp lỗi

- **Lỗi "Invalid credentials"**: Kiểm tra lại token có đúng quyền không
- **Lỗi "Network error"**: Kiểm tra repo `duyvl86/blogai` có tồn tại không
- **Lỗi 404**: Đảm bảo đã deploy thành công

---

## Lưu ý quan trọng

- **Token cần quyền repo** để đọc/ghi file markdown
- Nếu muốn bảo mật hơn, có thể tạo token với expiration (vd: 1 năm)
- Không chia sẻ token với người khác vì họ sẽ có quyền truy cập repo của bạn
