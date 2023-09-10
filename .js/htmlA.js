//禁止页面选择以及鼠标右键
document.oncontextmenu = function () { return false; };
document.onselectstart = function () { return false; };
var threshold = 250; // 打开控制台的宽或高阈值
// 每秒检查一次
setInterval(function () {
    if (window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold) {
        // 如果打开控制台，关闭页面
        if (navigator.userAgent.indexOf('MSIE') > 0) { // close IE
            if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
                window.opener = null;
                window.close();
            } else {
                window.open('', '_top');
                window.top.close();
            }
        } else { // close chrome;It is effective when it is only one.
            window.opener = null;
            window.open('', '_self');
            window.close();
        }
    }
}, 1000);