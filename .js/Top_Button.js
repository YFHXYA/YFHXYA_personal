let totop = document.querySelector('.totop')
totop.style.display = 'none'
// ҳ��������ڼ����¼�
window.onscroll = function () {
    // ��ȡ�������ȥ�ĸ߶�
    let high = document.documentElement.scrollTop || document.body.scrollTop
    if (high >= 1000) {
        totop.style.display = 'block'
    } else {
        totop.style.display = 'none'
    }
}
// ������ض��������ԼӶ���ʹ�������ص�����
totop.addEventListener('click', () => {


    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0




})
