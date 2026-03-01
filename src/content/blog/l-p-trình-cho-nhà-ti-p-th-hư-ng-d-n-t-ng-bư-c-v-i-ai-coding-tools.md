---
title: "Lập trình cho nhà tiếp thị: Hướng dẫn từng bước với AI Coding Tools"
description: ""
date: 2026-03-01 12:00
author: "Admin"
image: "/images/blog-placeholder.jpg"
category: "ai"
tags: [""]
featured: false
---

# Lập trình cho nhà tiếp thị: Hướng dẫn từng bước với AI Coding Tools

Hướng dẫn từng bước biến người không biết gì về kỹ thuật thành người có thể xây và vận hành sản phẩm bằng AI coding tools.

## Lập Trình cho nhà tiếp thị

Hướng dẫn từng bước để từ người không biết code trở thành pro với các công cụ AI agent.

#### Cài đặt Claude Code

```bash
$ npm install -g @anthropic-ai/claude-code
> Đang cài đặt...
✓ Cài đặt thành công

$ claude
> Chào mừng bạn đến với Claude Code!

Tạo landing page cho SaaS của tôi

✓ Đã tạo project Next.js
✓ Cài đặt dependencies
✓ Xây dựng homepage với hero section
✓ Thêm bảng giá
✓ Deploy lên Vercel

✓ 🚀 Website đã sẵn sàng!
```

## Không cần kinh nghiệm terminal

Claude Code sẽ chạy lệnh cho bạn. Bạn chỉ cần mô tả những gì bạn muốn xây dựng.

## Sự khác biệt quan trọng

**ChatGPT chỉ cho bạn lời khuyên. Công cụ Agentic làm thay bạn.**

#### ChatGPT

Bạn: Tạo form liên hệ

ChatGPT: Đây là cách tạo form liên hệ...

```jsx
function ContactForm() {
  return ...
}
```

Bạn phải tự copy, tạo file, paste, sửa import, style... Bạn là middleware giữa AI và project.

#### Claude Code

Bạn: Tạo form liên hệ với name, email, message

Claude Code:

✓ Đọc project structure

✓ Tạo file ContactForm.tsx

✓ Thêm validation

✓ Cập nhật trang

✓ Chạy thử

Bạn chỉ cần xem kết quả và phê duyệt.

## Agent giỏi những gì?

Agent xuất sắc trong những công việc mà con người thấy tẻ nhạt, dễ sai sót, hoặc quá tải.

| Loại công việc | Ví dụ cụ thể | Agent làm được |
| --- | --- | --- |
| Big Data | Quét file log, phân tích dữ liệu lớn | Không mệt mỏi, không mất context |
| Task Chains | Chuỗi thao tác phức tạp | Thực hiện tuần tự chính xác |
| Multi-File | Sửa nhiều file cùng lúc | Đảm bảo nhất quán |
| Cross-Project | Liên kết nhiều project | Hiểu mối liên hệ giữa các phần |
| Grunt Work | Viết boilerplate, refactor | Làm nhanh, không than vãn |

### Thay đổi tư duy

Ngừng nghĩ "tôi có thể xây dựng gì?". Hãy nghĩ "tôi có thể ủy thác gì?". **Bạn là đạo diễn. Agent là người thực hiện.**

## Bạn có thể xây dựng gì?

Những dự án marketing thực tế chỉ cách một prompt.

#### Landing Page

"Tạo landing page đẹp với

3 tiêu đề khác nhau

để thử A/B test xem tiêu đề nào khách hàng click nhiều hơn.

Những phần cần có:

✓ Phần đầu trang nổi bật (Hero section - hình lớn + tiêu đề chính)

✓ Phần chứng minh uy tín (Social proof - đánh giá, logo khách hàng, số liệu thật)

✓ Các nút kêu gọi hành động (CTA buttons - “Đăng ký ngay”, “Thử miễn phí”, “Mua ngay”…)

✓ Thiết kế responsive (đẹp mượt trên điện thoại, máy tính bảng và máy tính)"

#### Trang bảng giá

"Tạo trang bảng giá đẹp, có nút chuyển đổi giữa

thanh toán theo tháng và theo năm

.

Những phần cần có:

✓ 3 gói giá khác nhau (gói cơ bản - gói phổ biến - gói cao cấp)

✓ Bảng so sánh chi tiết tất cả tính năng giữa các gói

✓ Hiệu ứng chuyển động mượt mà khi bấm nút tháng/năm

✓ Sẵn sàng kết nối với Stripe (cổng thanh toán online)"

#### Trang so sánh

"Tạo trang so sánh sản phẩm của mình với đối thủ cạnh tranh.

Những phần cần có:

✓ Bảng so sánh tính năng (feature matrix) rõ ràng

✓ Phần “Tại sao nên chọn chúng tôi” (lợi ích nổi bật)

✓ Tối ưu SEO để Google dễ tìm thấy"

#### Câu chuyện thành công

"Tạo trang case study (câu chuyện thành công của khách hàng) kèm số liệu cụ thể.

Những phần cần có:

✓ Phần kết quả rõ ràng (số liệu trước - sau)

✓ Hình ảnh so sánh Trước / Sau

✓ Lời chứng thực thật từ khách hàng (client quote)

✓ Nút tải xuống tài liệu (Download CTA)"

## Công cụ CLI thân thiện với bạn

Claude có thể sử dụng các công cụ này. Chỉ cần nói "deploy lên Vercel" hoặc "tích hợp Stripe".

| Công cụ | Mô tả | Lệnh ví dụ |
| --- | --- | --- |
| **Vercel** | Deploy trong vài giây | `vercel --prod` |
| **Stripe** | Test payment locally | `stripe listen` |
| **Resend** | Gửi transactional email | `resend emails:send` |
| **Supabase** | Database & auth | `supabase db push` |
| **PostHog** | Analytics & experiments | `posthog-cli` |
| **GitHub CLI** | GitHub từ terminal | `gh repo create` |

> **Mẹo**
>
> Chọn một thứ bạn muốn có. Nói Claude xây dựng. Cứ như vậy.

## Cơ bản về Terminal

Terminal là nơi bạn chạy lệnh. Claude Code cũng dùng nó. Đây là những lệnh bạn sẽ thấy.

#### Di chuyển

cd folder-name

- Vào thư mục

cd ..

- Lên một cấp

cd ~

- Về thư mục home

ls

- Liệt kê file

pwd

- Xem vị trí hiện tại

#### File

mkdir new-folder

- Tạo thư mục

touch file.txt

- Tạo file

rm file.txt

- Xóa file

rm -r folder

- Xóa thư mục

cat file.txt

- Xem nội dung file

#### Packages

npm install

- Cài dependencies

npm run dev

- Chạy dev server

npm run build

- Build production

pnpm install

- Cài bằng pnpm

#### Git

git status

- Xem trạng thái

git add .

- Stage changes

git commit -m "msg"

- Commit

git push

- Push lên GitHub

> **Lưu ý**
>
> Bạn không cần nhớ những lệnh này. Claude Code chạy chúng cho bạn. Nhưng biết chúng làm gì giúp bạn hiểu agent đang làm gì.

## Cài đặt Node.js

Trước khi cài Claude Code, bạn cần Node.js. Đây là runtime để chạy JavaScript tools.

##### Step 1: Bước 1: Tải Node.js

Truy cập nodejs.org và tải phiên bản LTS

```text
👉 Truy cập: https://nodejs.org
👉 Click nút LTS màu xanh lá
👉 Cài đặt như app bình thường
```

##### Step 2: Bước 2: Kiểm tra

Mở terminal và kiểm tra version

```bash
$ node --version
v20.11.0
$ npm --version
10.2.4
✓ Node.js đã sẵn sàng!
```

##### Step 3: Bước 3: Cài Claude Code

Cài đặt Claude Code toàn cục

```bash
$ npm install -g @anthropic-ai/claude-code
> Đang cài đặt...
✓ Claude Code đã sẵn sàng!
```

## Bắt đầu trong 5 bước

Từ zero đến project đầu tiên. Không cần kiến thức coding.

- [ ] **Mở Terminal** - Mac: Cmd+Space, gõ 'Terminal'. Windows: tìm 'Command Prompt'
- [ ] **Cài Node.js** - Tải từ nodejs.org, phiên bản LTS
- [ ] **Cài Claude Code** - Chạy: `npm install -g @anthropic-ai/claude-code`
- [ ] **Tạo project** - Vào thư mục, chạy: `claude`
- [ ] **Mô tả ý tưởng** - Nói Claude bạn muốn xây gì

## Code thực chất là gì?

Code chỉ là **file text trong thư mục**. Một "project" là thư mục với quy tắc về cách các file hoạt động cùng nhau.

#### Cấu trúc Project

- [DIR] my-project
  - [DIR] src
    - [FILE] page.tsx - Trang chủ
    - [FILE] layout.tsx - Wrapper cho tất cả trang
    - [DIR] components
      - [FILE] ContactForm.tsx
  - [FILE] package.json - Cấu hình project
  - [FILE] .env.local - Secrets (không commit)

Click để khám phá. Đây là tất cả một project: **các file text được tổ chức**.

## Software Stack

Phần mềm hiện đại có nhiều lớp. Đây là vị trí của bạn.

| Lớp | Ví dụ | Vai trò |
| --- | --- | --- |
| 1. AI Providers | OpenAI, Anthropic, Google | Bộ não. Bạn không tương tác trực tiếp. |
| 2. Agentic Tools | Claude Code, Cursor, Copilot | **Bạn ở đây**. Agent gọi AI và thực thi. |
| 3. Frameworks | Next.js, Rails, Django | Cấu trúc sẵn. Agent viết code trong đó. |
| 4. Source Control | Git, GitHub | Theo dõi mọi thay đổi. Safety net. |
| 5. Hosting | Vercel, Heroku, Railway | Chạy code để thế giới truy cập. |

> **Vị trí của bạn**
>
> Là nhà tiếp thị, bạn làm việc ở **lớp 2**. Agentic tool xử lý mọi thứ khác.

## Chạy Local & Ports

`localhost` nghĩa là máy tính của bạn. `port` như số căn hộ: app nào để kết nối.

| Port | Dùng cho |
| --- | --- |
| `:3000` | Next.js, React |
| `:3001` | App thứ hai |
| `:5173` | Vite |
| `:5432` | PostgreSQL |
| `:6379` | Redis |

> **Port đã được sử dụng?**
>
> Nếu thấy "port 3000 is already in use", dừng server khác hoặc chạy port khác: `npm run dev -- --port 3001`

## Environment Variables & API Keys

Secrets như password và API keys được lưu riêng, không trong code. **Không bao giờ commit lên GitHub.**

#### .env.local

```bash
# File này bị git ignore - secrets giữ ở local

$ DATABASE_URL=postgresql://...
$ STRIPE_SECRET_KEY=sk_live_...
$ NEXTAUTH_SECRET=your-secret-key

👉 Thêm .env.local vào .gitignore
👉 Không bao giờ commit file này!
```

> **Cảnh báo nghiêm trọng**
>
> Nếu vô tình push API key lên GitHub, coi như đã bị lộ. **Rotate (tạo lại) key ngay lập tức.** Claude Code sẽ cảnh báo nếu bạn cố commit .env files.

## Context & Tokens

AI models có "context window" - giới hạn bao nhiêu chúng nhớ trong một cuộc trò chuyện.

#### Context Window Demo

```text
Context: 9,830 / 200,000 tokens

📄 Writing src/components/ContactForm.tsx +2,341
📄 Updating src/app/page.tsx +1,902
Bạn: Nút thành màu xanh +8
📄 Reading src/components/ContactForm.tsx +2,341
📄 Updating button styles +847
Bạn: Thêm form validation +9
📄 Reading src/components/ContactForm.tsx +2,892

✓ ✅ Còn nhiều chỗ! Tiếp tục chat!
```

### Token là gì?

Token là đoạn text, khoảng 4 ký tự hoặc 3/4 từ. "Xin chào" = 2 tokens. Mọi thứ bạn gửi VÀ nhận đều tính vào giới hạn.

### Mẹo quản lý context

- Chia task lớn thành các cuộc trò chuyện riêng
- Nếu Claude quên, nhắc lại
- File code dài tốn nhiều token, nên reference bằng tên thay vì paste

## File Markdown

Markdown (.md) là cách đơn giản để format text. Dùng cho README, docs, và notes.

#### Cú pháp

```markdown
# Heading 1
## Heading 2
**bold**
*italic*
[Link](url)
- Item 1
- Item 2
`code`
```js
console.log("hello")
```
```

#### Kết quả

Heading 1

Heading 2

bold

italic

Link

• Item 1

• Item 2

code

```js
console.log("hello")
```

### Tại sao dùng Markdown?

Nội dung đọc như văn bản thường nhưng sẽ hiển thị đẹp mắt trên GitHub, các trình soạn thảo và trang tài liệu.
Nếu bạn đã sử dụng Notion hoặc Slack, bạn đã từng viết markdown 😄

## Agent hoạt động như thế nào?

Bạn mô tả điều muốn làm. Agent đọc code, lập kế hoạch, và thực thi.

##### Step 1: Bạn mô tả

Rõ ràng, cụ thể

```text
Bạn: Thêm form liên hệ với name, email, message
```

##### Step 2: Agent phân tích

Đọc project, hiểu structure

```text
📁 Đọc project structure
📄 Tìm component phù hợp
📝 Lập kế hoạch implementation
```

##### Step 3: Agent thực thi

Viết code, kiểm tra lỗi

```text
✓ Tạo ContactForm.tsx
✓ Thêm validation
✓ Cập nhật trang chủ
✓ Chạy thử
```

##### Step 4: Bạn review

Xem thay đổi, phê duyệt

```text
✓ Phê duyệt và deploy!
```

| Công việc của bạn | Công việc của Agent |
| --- | --- |
| Communication rõ ràng | Đọc docs |
| Review thay đổi | Viết code |
| Định hướng | Kiểm tra lỗi |

## Chế độ Agent

Kiểm soát mức độ tự chủ của agent. Bắt đầu an toàn, tăng tốc khi quen.

#### Default Mode

Bạn phê duyệt từng thay đổi file

✅ An toàn cho người mới

✅ Thấy mọi thay đổi

✅ Dễ từ chối lỗi

❌ Workflow chậm hơn

❌ Click nhiều

💡 Tuyệt vời cho người mới. Bạn sẽ học bằng cách review.

#### Auto-Accept

Tự động chấp nhận thay đổi

✅ Nhanh hơn

✅ Ít gián đoạn

❌ Cần review sau

💡 Phù hợp khi đã quen.

#### Plan Mode

Agent tạo kế hoạch trước

✅ Thấy toàn bộ trước khi làm

✅ Phù hợp task lớn

💡 Dùng cho refactor, feature lớn.

#### YOLO Mode

Tự do tối đa

⚠️ Chỉ dùng khi hiểu rõ

⚠️ Có thể tạo nhiều thay đổi

💡 Dùng cho prototype nhanh.

> **Quá trình phát triển**
>
> Default → Auto-accept → Plan mode cho task lớn. Hầu hết developer dùng auto-accept với plan mode thỉnh thoảng.

## Vòng lặp Iteration

Bạn không cần làm đúng ngay lần đầu. Mô tả → Xây dựng → Review → Tinh chỉnh.

##### Step 1: Iteration 1

Thay đổi headline

```text
Bạn: Đổi headline thành 'Tăng tốc với AI'
✓ Đã cập nhật Hero.tsx
```

##### Step 2: Iteration 2

Thêm CTA

```text
Bạn: Thêm nút CTA màu xanh
✓ Đã thêm button component
✓ Đã cập nhật styles
```

##### Step 3: Iteration 3

Responsive

```text
Bạn: Làm cho mobile
✓ Đã thêm responsive classes
✓ Hoàn thành!
```

**Pattern:** Mô tả → Agent xây → Review → Tinh chỉnh → Lặp lại

## Git & GitHub

Safety net của bạn. Mọi thay đổi được theo dõi, không gì bị mất.

#### Git vs GitHub

Git

(máy tính)

• Theo dõi mọi thay đổi

• Tạo save points (commits)

• Hoạt động offline

GitHub

(internet)

• Lưu code online

• Cho phép collaboration

• Kết nối deployment

#### Các câu lệnh cơ bản

git status

- Xem trạng thái

git add .

- Stage tất cả

git commit -m "msg"

- Commit

git push

- Push lên GitHub

git pull

- Pull từ GitHub

git checkout .

- Hoàn tác thay đổi

## Học bằng cách hỏi

Bạn không cần nhớ cú pháp. Hỏi "tại sao" và xây dựng trực giác theo thời gian.

#### Ví dụ: Hiểu Stripe Webhooks

```text
Bạn: Tại sao cần webhook thay vì check sau checkout?

Claude: Người dùng có thể đóng browser
trước khi site nhận success callback.
Webhooks đảm bảo Stripe báo trực tiếp
cho bạn về payment.

✓ 💡 Hiểu rõ hơn!
```

### Cách hỏi hiệu quả

- **Yêu cầu giải thích:** "Giải thích từng bước khi làm"
- **Hỏi tại sao:** "Tại sao dùng cách này thay vì X?"
- **Xem diff:** "Cho tôi xem bạn đã thay đổi gì"

> **Quá trình học**
>
> Tuần 1: "Cái này làm gì?" → Tuần 8: "Tôi biết chúng ta cần gì" → Tuần 12: "Thử cách này xem"

## Debug

Lỗi là bình thường. Copy và hỏi agent "Điều này nghĩa là gì?"

##### Step 1: Lỗi phổ biến

Cannot read properties of undefined

```text
❌ Cannot read properties of undefined

Nghĩa là: Truy cập thứ không tồn tại
Fix: Thêm optional chaining: users?.map(...)
```

##### Step 2: Debug Loop

3 bước đơn giản

```text
1️⃣ Copy error (full message)
2️⃣ Paste cho agent: "Chuyện gì xảy ra?"
3️⃣ Review fix rồi apply
```

##### Step 3: Hoàn tác

Nếu fix làm tệ hơn

```bash
$ git checkout .
✓ Quay lại trạng thái trước
```

## Testing & TDD

Test là code kiểm tra code của bạn. Viết test trước, rồi viết code.

#### Red

Viết test thất bại trước

```js
test("validates email", () => {
  expect(isValid("a@b.com")).toBe(true);
});
```

❌ FAIL: isValid is not defined

#### Green

Viết code để test pass

```js
function isValid(email) {
  return email.includes("@");
}
```

✅ PASS

#### Refactor

Cải thiện code

```js
function isValid(email) {
  return /^[^\s@]+@[^\s@]+$/.test(email);
}
```

✅ Vẫn pass, code tốt hơn

| Không có test | Có test |
| --- | --- |
| Thay đổi → Check thủ công → Miss bug → Deploy → User tìm thấy lúc 2am | Thay đổi → npm test → Bắt bug → Fix → Deploy tự tin |

## Mở rộng Agent

Cho AI thêm quyền lực. Như xây dựng đội ngũ chuyên gia.

#### MCPs

Kết nối bên ngoài

- Stripe - Kiểm tra thanh toán và gói đăng ký
- PostHog - Truy vấn dữ liệu phân tích
- Browser - Thu thập dữ liệu từ trang web đối thủ
- Slack - Gửi thông báo

Hỏi: "Kết nối Stripe để kiểm tra doanh thu từ đăng ký"

#### Skills

Thêm chuyên môn sâu về lĩnh vực

Cài skill cho Claude:

npx skills add owner/skill-name

Skills phổ biến:

• vercel-react-best-practices

• web-design-guidelines

• shadcn-ui

👉 Vào trang: skills.sh

#### NPM Packages

Thư viện sẵn có

Hỏi: "Package tốt nhất để gửi email?"

Agent sẽ gợi ý và cài đặt:

• Resend - Transactional email

• Nodemailer - SMTP

• SendGrid - Email API

## Tech Stack

AI tools hoạt động tốt nhất với ngôn ngữ phổ biến. Bắt đầu với Next.js trừ khi có lý do khác.

| Next.js (Khuyến nghị) | Chi tiết |
| --- | --- |
| Ngôn ngữ | TypeScript |
| Deploy | Vercel, Netlify |
| Dùng bởi | Notion, TikTok, Nike |
| Điểm mạnh | Chạy mọi nơi, ecosystem khổng lồ, AI support tốt nhất |
| Phù hợp cho | Marketing sites, SaaS apps, E-commerce, Dashboards |
| AI Support | Xuất sắc. Hầu hết code online là JS/TS. |

> **Không chắc?**
>
> Hỏi Claude: "Tôi muốn xây [project của bạn]. Nên dùng tech stack nào?"

## Học qua việc khám phá

Clone các template Vercel open source để xem project thực được xây như thế nào. Sửa, phá, hỏi Claude giải thích.

| Template | Mô tả | Học được |
| --- | --- | --- |
| Portfolio Starter | Portfolio và blog đơn giản | Markdown content, RSS, SEO, Dark mode |
| Blog Starter | Blog tĩnh với Next.js | Static generation, Tailwind, TypeScript |
| AI Chatbot | Chatbot đầy đủ tính năng | AI SDK, Streaming, Auth, Database |

#### Clone và khám phá

```bash
$ git clone https://github.com/vercel/nextjs-portfolio-starter
$ cd nextjs-portfolio-starter
$ npm install && npm run dev

✓ 🚀 Server chạy tại http://localhost:3000

👉 Sau đó hỏi Claude: "Giải thích project này được tổ chức thế nào?"
```

## Thử ngay

Bạn vừa học mọi thứ cần thiết để bắt đầu xây dựng.

#### Thử Interactive

```text
👋 Chào mừng! Thử các lệnh:
   help    - Xem hướng dẫn
   install - Cài Claude Code
   create  - Tạo project mới
   deploy  - Triển khi dự án
```

##### `help`

```bash
$ help
Các lệnh có sẵn:
  help    - Hiển thị hướng dẫn
  install - Cài đặt Claude Code
  create  - Tạo project Next.js
  deploy  - Deploy lên Vercel
```

##### `install`

```bash
$ install
> Đang cài đặt @anthropic-ai/claude-code...
✓ Cài đặt thành công!
```

##### `create`

```bash
$ create
> Tạo project Next.js...
✓ Đã tạo my-app
✓ Cài dependencies
✓ Sẵn sàng! Chạy: cd my-app && npm run dev
```

##### `deploy`

```bash
$ deploy
> Deploy lên Vercel...
✓ Build thành công
✓ 🚀 Live tại: https://my-app.vercel.app
```

## Tham gia cộng đồng

Học từ người khác đang xây dựng với AI. Nhận giúp đỡ khi bị kẹt. Chia sẻ những gì bạn tạo ra.

Cộng đồng đang chuyển mình thành builder với sự trợ giúp của AI.

---

## Tóm tắt

- [x] Agentic AI làm thay bạn, không chỉ cho lời khuyên
- [x] Bạn là đạo diễn, agent là người thực hiện
- [x] Bắt đầu với Next.js + Claude Code
- [x] Học qua việc làm, không cần nhớ cú pháp
- [x] Lặp lại là chìa khóa: Mô tả → Xây dựng → Đánh giá → Tinh chỉnh

> **Sẵn sàng bắt đầu?**
>
> Cài Claude Code ngay hôm nay và xây dựng project đầu tiên của bạn. Chỉ cần một prompt...