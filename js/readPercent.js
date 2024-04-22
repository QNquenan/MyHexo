window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    var a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up"),
        upi = document.querySelector("#go-up i"),// 获取按钮
        upNub = document.querySelector(".scroll-percent")

    if (result <= 95) {
        upi.style.display = 'none'
        upNub.style.display = 'block'
        upNub.innerHTML = result;
    } else {
        upNub.style.display = 'none'
        upi.style.display = 'block'
    }

}