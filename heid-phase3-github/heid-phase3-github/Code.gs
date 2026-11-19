/**
 * Nhận xác nhận phạm vi Phase 3 từ các trang phòng ban (GitHub Pages)
 * và ghi vào sheet "XacNhan" của Google Sheet chứa script này.
 * Mỗi lần gửi: một dòng cho mỗi báo cáo, kèm phòng, người xác nhận, thời gian.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName('XacNhan') || ss.insertSheet('XacNhan');
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Thời gian', 'Phòng', 'Người xác nhận', 'Chức danh', 'Mã BC', 'Báo cáo', 'Kết quả', 'Ghi chú']);
      sh.setFrozenRows(1);
    }
    var t = new Date();
    var rows = (d.baocao || []).map(function (b) {
      return [t, d.phong, d.nguoi, d.chucdanh || '', b.ma, b.ten, b.dongy ? 'Đồng ý' : 'Chưa đồng ý', d.ghichu || ''];
    });
    if (rows.length) sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('HEID Phase 3 · nhận xác nhận đang hoạt động');
}
