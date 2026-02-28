# Deploy OAuth Worker lên Cloudflare

## Cách 1: Deploy qua Cloudflare Dashboard (Khuyên dùng)

### Bước 1: Vào Cloudflare Dashboard
1. Đăng nhập https://dash.cloudflare.com
2. Chọn **Workers & Pages** ở menu bên trái

### Bước 2: Tạo Worker mới
1. Click **Create application**
2. Chọn **Create Worker**
3. Đặt tên: `cms-oauth`
4. Click **Deploy**

### Bước 3: Edit Worker
1. Sau khi deploy, click **Edit code**
2. Xóa hết code mặc định
3. Copy nội dung từ file `oauth-server/worker.js` (xem bên dưới)

### Bước 4: Thêm Environment Variables
1. Click **Settings** → **Variables**
2. Thêm các biến:
   - `GITHUB_CLIENT_ID`: (từ GitHub OAuth App)
   - `GITHUB_CLIENT_SECRET`: (từ GitHub OAuth App)
3. Click **Save**

### Bước 5: Deploy lại
1. Click **Save and Deploy**

---

## Nội dung worker.js:

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // OAuth callback
    if (url.pathname === '/oauth' || url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }

      try {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code: code
          })
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;
        
        if (!accessToken) {
          return new Response('Failed to get token', { status: 400 });
        }

        return Response.redirect(`https://blogai-d0p.pages.dev/admin/?token=${accessToken}`, 302);
        
      } catch (error) {
        return new Response('Error: ' + error.message, { status: 500 });
      }
    }

    // Auth redirect
    if (url.pathname === '/auth') {
      const redirectUri = `https://cms-oauth.${url.hostname}/oauth`;
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo&allow_signup=true`;
      
      return Response.redirect(authUrl, 302);
    }

    return new Response('OAuth Server Running', { headers: { 'Content-Type': 'text/html' } });
  }
};
```

---

## Cách 2: Deploy qua Wrangler (nếu đã có API Token)

```bash
# Tạo API Token tại:
# https://dash.cloudflare.com/profile/api-tokens

# Deploy worker
cd oauth-server
npx wrangler deploy worker.js
```

---

## Sau khi deploy thành công

1. Đảm bảo Worker chạy tại: `https://cms-oauth.duynguyendev.workers.dev`
2. Kiểm tra: `https://cms-oauth.duynguyendev.workers.dev/auth` - sẽ redirect sang GitHub login
