# Tạo Cloudflare API Token

## Bước 1: Lấy Account ID

1. Vào https://dash.cloudflare.com
2. Nhìn lên thanh URL, ví dụ: `https://dash.cloudflare.com/abc123xyz`
3. Phần `abc123xyz` chính là Account ID
4. Copy lại

## Bước 2: Tạo API Token

1. Vào https://dash.cloudflare.com/profile/api-tokens
2. **KHÔNG** chọn template - click **Create Custom Token** ở bên phải
3. Điền:
   - **Name**: `GitHub Deploy`
   - **Permissions** - Click "Add permission":
     - Account: **Cloudflare Pages** → **Edit**
   - **Account Resources**: Chọn **Include** → chọn account của bạn
   - **TTL**: **Never**
4. Click **Continue** → **Create Token**
5. **Copy token ngay** (chỉ hiện 1 lần!)

## Bước 3: Thêm vào GitHub

1. Vào https://github.com/duyvl86/blogai/settings/secrets/actions
2. Click **New repository secret**:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: (paste token vừa copy)
3. Tạo thêm secret nữa:
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: (account ID từ bước 1)

## Bước 4: Kiểm tra

Vào https://github.com/duyvl86/blogai/actions
Nếu thấy workflow chạy = Thành công!
