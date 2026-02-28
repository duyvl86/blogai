# Tạo Cloudflare Token - Cách khác

## Cách 1: Dùng Global API Key

1. Vào https://dash.cloudflare.com/profile/api-tokens
2. Nhìn xuống dưới cùng, sẽ thấy **API Keys**
3. Click **View** bên cạnh **Global API Key**
4. Nhập password xác nhận
5. **Copy API Key**

## Cách 2: Kiểm tra quyền

Nếu không thấy gì, có thể bạn chưa đăng nhập đúng tài khoản:
- Đảm bảo đăng nhập đúng email
- Thử đăng nhập lại

## Sau khi có API Key

Thêm vào GitHub secrets:
- `CLOUDFLARE_API_TOKEN` = API Key (không phải token)

---

## Cách đơn giản nhất - Deploy thủ công

Sau khi tạo/sửa bài trong CMS:
1. Vào https://dash.cloudflare.com → Pages → blogai
2. Click **Retry deployment** (nút màu vàng)

Site sẽ được deploy trong ~1-2 phút.
