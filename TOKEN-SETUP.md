# Cách tạo GitHub Token đúng cách

## Lỗi "Resource not accessible by personal access token"

Token của bạn chưa có đủ quyền. Cần tạo token mới:

### Cách 1: Classic Token (Khuyên dùng)

1. Vào: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Đặt tên: `NongTech CMS`
4. Chọn expiration: `No expiration`
5. **Chọn các quyền:**
   - ✅ `repo` - Full control of private repositories (bao gồm cả `repo:status`, `repo_deployment`, `public_repo`)
   
   Nếu không thấy `repo`, chọn:
   - ✅ `repo:status` 
   - ✅ `repo_deployment`
   - ✅ `public_repo`

6. Click **Generate token**
7. **Copy token ngay** (chỉ hiện 1 lần!)

---

### Cách 2: Fine-grained Token

1. Vào: https://github.com/settings/tokens
2. Click **Fine-grained tokens** → **Generate new token**
3. Đặt tên: `NongTech CMS`
4. **Expiration**: Chọn `No expiration`
5. **Repository access**: 
   - ✅ Chọn `Only select repositories`
   - Tìm và chọn `duyvl86/blogai`
6. **Permissions** → **Repository permissions**:
   - ✅ Contents: **Read and write**
   - ✅ Pull requests: **Read and write**
7. Click **Generate token**

---

## Sau khi có token mới

1. Vào https://blogai-d0p.pages.dev/admin/
2. Xóa token cũ (nếu có lưu)
3. Nhập token mới
4. Thử tạo/sửa bài viết

---

## Kiểm tra quyền token

Nếu vẫn lỗi, kiểm tra tại:
https://github.com/settings/tokens → Click vào token → Xem có quyền `repo` không
