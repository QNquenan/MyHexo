document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);
//响应pjax
function tonav() {
    // document.getElementById("name-container").setAttribute("style", "display:none");

    var position = $(window).scrollTop();

    $(window).scroll(function () {

        var scroll = $(window).scrollTop();

        if (scroll > position) {
            document.getElementById("name-container").setAttribute("style", "top: 0 !important;");
            // document.getElementById("name-container").classList.add('titleShow');
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "top: -60px !important");

        } else {
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
            document.getElementById("name-container").setAttribute("style", "");
            // document.getElementById("name-container").classList.remove('titleShow');
        }

        position = scroll;

    });
    function scrollToTop() {
        document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
        document.getElementById("name-container").setAttribute("style", "");
        btf.scrollToDest(0, 500);
    }
    //修复没有弄右键菜单的童鞋无法回顶部的问题
    document.getElementById("page-name").innerText = document.title.split(" | 鹊楠の小窝")[0];
    document.getElementById("page-name").addEventListener('click', scrollToTop);
}


document.addEventListener('DOMContentLoaded', function () {
    // 获取页面中需要操作的元素
    const linkElement = document.querySelector('.not-home-page');

    // 如果没有找到具有类名 .not-home-page 的元素，则不执行后续操作
    if (!linkElement) {
        return;
    }

    window.addEventListener('scroll', function () {
        // 获取当前页面滚动的垂直距离
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 如果滚动距离大于某个值（例如100像素），则添加样式
        if (scrollTop > 56) {
            linkElement.classList.add('nav-fixed');
        } else {
            // 否则移除样式
            linkElement.classList.remove('nav-fixed', 'nav-visible');
        }
    });
});


