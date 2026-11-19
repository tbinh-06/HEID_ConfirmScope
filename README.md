# HEID Phase 3 · Trang xác nhận phạm vi theo phòng ban

## Cài nơi nhận xác nhận (làm 1 lần)
1. Tạo một Google Sheet mới, ví dụ "HEID Phase 3 – Xác nhận phạm vi".
2. Trong Sheet: Tiện ích mở rộng → Apps Script, xóa code mẫu, dán toàn bộ `Code.gs`, lưu.
3. Triển khai → Tùy chọn triển khai mới → Loại: Ứng dụng web.
   - Thực thi với tư cách: Tôi
   - Người có quyền truy cập: Bất kỳ ai
4. Bấm Triển khai, cấp quyền, sao chép URL Ứng dụng web (đuôi `/exec`).
5. Mở `config.js`, dán URL vào `window.HEID_ENDPOINT = '...'`.

## Đưa lên GitHub Pages
Đẩy cả thư mục (6 file html + config.js) lên repo, bật Pages. Trang chính là `index.html`, mỗi phòng một trang:
`kinh-doanh.html`, `marketing.html`, `ban-pt-ctnd.html`, `tong-hop.html`, `thiet-ke-my-thuat.html`.

## Xem kết quả
Mỗi lần phòng bấm "Gửi xác nhận", sheet `XacNhan` thêm một dòng cho mỗi báo cáo:
thời gian · phòng · người xác nhận · chức danh · mã BC · báo cáo · Đồng ý/Chưa đồng ý · ghi chú.
Phòng gửi lại nhiều lần thì lấy dòng mới nhất.
