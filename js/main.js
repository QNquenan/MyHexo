/* 禁用f12与按键防抖 start */
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
// document.addEventListener("copy", function () {
//     debounce(function () {
//         btf.snackbarShow('<h3>复制成功啦🌞</h3><p>若要转载最好保留原文链接哦，给你一个大大的赞！👍</p>')
//     }, 300);
// })

document.addEventListener("keydown", function (event) {
    // 检查是否按下了 "Ctrl" 键并且同时按下了 "C" 键
    if (event.ctrlKey && event.key === 'c') {
        // debounce(function () {
        //     btf.snackbarShow('复制成功啦🌞若要转载最好保留原文链接!');
        // }, 300);
        Snackbar.show({
            text: '复制成功啦🌞若要转载最好保留原文链接!',
            pos: 'top-right',
            actionText: '版权声明',
            actionTextColor: '#FF8599',
            onActionClick: function () {
                location.assign('/privacy');
            }
        })
    }
});



// f12提醒但不禁用
document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
        // debounce(function () {
        //     btf.snackbarShow('<h3>你被发现了哦🍟</h3><p>扒源记住要遵循GPL协议吖！😘</p>');
        // }, 300);
        Snackbar.show({
            text: '开发者模式已打开🍟记住要遵循GPL协议吖!',
            pos: 'top-right',
            showAction: false
        })
    }
};
/* 禁用f12与按键防抖 end */

/* 控制台输出 */
var now1 = new Date();

function createtime1() {
    var grt = new Date("01/26/2024 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    console.log(`欢迎来到:\n%c鹊楠の小窝:%c https://quenan.love%c\n小站已经苟活 %c${dnum} %c 天啦~`, "border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#FF8599;margin:10px 0", "border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;", "", "color:#4976f5", "")

    // setTimeout(
    //     console.log.bind(
    //         console,
    //         "color:rgb(255,133,153)",
    //         "",
    //         "color:rgb(255,133,153)",
    //         "color:rgb(255,133,153)",
    //         "",
    //         "color:rgb(255,133,153)",
    //         ""
    //     )
    // );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「小傻瓜」`, `Photo captured: `, ` 😜 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，我的朋友", "color:white; background-color:#23c682", ""));

    setTimeout(console.log.bind(console, "%c W23-12 %c 你已打开控制台", "color:white; background-color:#4f90d9", ""));
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };

/* 控制台输出 */

/* 图表 */

function switchPostChart() {
    // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
    let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4C4948' : 'rgba(255,255,255,0.7)'
    if (document.getElementById('posts-chart') && postsOption) {
        try {
            let postsOptionNew = postsOption
            postsOptionNew.title.textStyle.color = color
            postsOptionNew.xAxis.nameTextStyle.color = color
            postsOptionNew.yAxis.nameTextStyle.color = color
            postsOptionNew.xAxis.axisLabel.color = color
            postsOptionNew.yAxis.axisLabel.color = color
            postsOptionNew.xAxis.axisLine.lineStyle.color = color
            postsOptionNew.yAxis.axisLine.lineStyle.color = color
            postsOptionNew.series[0].markLine.data[0].label.color = color
            postsChart.setOption(postsOptionNew)
        } catch (error) {
            console.log(error)
        }
    }
    if (document.getElementById('tags-chart') && tagsOption) {
        try {
            let tagsOptionNew = tagsOption
            tagsOptionNew.title.textStyle.color = color
            tagsOptionNew.xAxis.nameTextStyle.color = color
            tagsOptionNew.yAxis.nameTextStyle.color = color
            tagsOptionNew.xAxis.axisLabel.color = color
            tagsOptionNew.yAxis.axisLabel.color = color
            tagsOptionNew.xAxis.axisLine.lineStyle.color = color
            tagsOptionNew.yAxis.axisLine.lineStyle.color = color
            tagsOptionNew.series[0].markLine.data[0].label.color = color
            tagsChart.setOption(tagsOptionNew)
        } catch (error) {
            console.log(error)
        }
    }
    if (document.getElementById('categories-chart') && categoriesOption) {
        try {
            let categoriesOptionNew = categoriesOption
            categoriesOptionNew.title.textStyle.color = color
            categoriesOptionNew.legend.textStyle.color = color
            if (!categoryParentFlag) { categoriesOptionNew.series[0].label.color = color }
            categoriesChart.setOption(categoriesOptionNew)
        } catch (error) {
            console.log(error)
        }
    }
}
document.querySelector("#rightside-config-hide .icon-V").addEventListener("click", function () { setTimeout(switchPostChart, 100) })

/* 图表 end */

/* 说说 */

var percentFlag = false; // 节流阀
function essayScroll() {
    let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
    const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
    result <= 99 || (result = 99);

    if (
        !percentFlag &&
        waterfallResult + 100 >= document.documentElement.clientHeight &&
        document.querySelector("#waterfall")
    ) {
        // console.info(waterfallResult, document.documentElement.clientHeight);
        setTimeout(() => {
            waterfall("#waterfall");
        }, 500);
    } else {
        setTimeout(() => {
            document.querySelector("#waterfall") && waterfall("#waterfall");
        }, 500);
    }

    const r = window.scrollY + document.documentElement.clientHeight;

    let p = document.getElementById("post-comment") || document.getElementById("footer");

    (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
    return e.split(n).join(t);
}
var anzhiyu = {
    diffDate: function (d, more = false) {
        const dateNow = new Date();
        const datePost = new Date(d);
        const dateDiff = dateNow.getTime() - datePost.getTime();
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;

        let result;
        if (more) {
            const monthCount = dateDiff / month + 1;
            const dayCount = dateDiff / day + 1;
            const hourCount = dateDiff / hour + 1;
            const minuteCount = dateDiff / minute + 1;

            if (monthCount >= 1) {
                result = datePost.toLocaleDateString().replace(/\//g, "-");
            } else if (dayCount >= 1) {
                result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
            } else if (hourCount >= 1) {
                result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
            } else if (minuteCount >= 1) {
                result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
            } else {
                result = GLOBAL_CONFIG.date_suffix.just;
            }
        } else {
            result = parseInt(dateDiff / day);
        }
        return result;
    },
    changeTimeInEssay: function () {
        document.querySelector("#bber") &&
            document.querySelectorAll("#bber time").forEach(function (e) {
                var t = e,
                    datetime = t.getAttribute("datetime");
                (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
            });
    },
    reflashEssayWaterFall: function () {
        document.querySelector("#waterfall") &&
            setTimeout(function () {
                waterfall("#waterfall");
                document.getElementById("waterfall").classList.add("show");
            }, 500);
    },
    commentText: function (e) {
        if (e == "undefined" || e == "null") e = "好棒！";
        var n = document.getElementsByClassName("el-textarea__inner")[0],
            t = document.createEvent("HTMLEvents");
        if (!n) return;
        t.initEvent("input", !0, !0);
        var o = replaceAll(e, "\n", "\n> ");
        (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
        var i = document.querySelector("#post-comment").offsetTop;
        window.scrollTo(0, i - 80),
            n.focus(),
            n.setSelectionRange(-1, -1),
            document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
    },
};

anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();

/* 说说 end */

let tianliGPT_postSelector = '\#post \#article-container';
let tianliGPT_key = 'd77829c42c9a86d67fb9';
