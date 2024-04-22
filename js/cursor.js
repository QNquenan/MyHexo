// var CURSOR;

// Math.lerp = (a, b, n) => (1 - n) * a + n * b;

// const getStyle = (el, attr) => {
//     try {
//         return window.getComputedStyle
//             ? window.getComputedStyle(el)[attr]
//             : el.currentStyle[attr];
//     } catch (e) { }
//     return "";
// };

// class Cursor {
//     constructor() {
//         this.pos = { curr: null, prev: null };
//         this.pt = [];
//         this.create();
//         this.init();
//         this.render();
//     }

//     move(left, top) {
//         this.cursor.style["left"] = `${left}px`;
//         this.cursor.style["top"] = `${top}px`;
//     }

//     create() {
//         if (!this.cursor) {
//             this.cursor = document.createElement("div");
//             this.cursor.id = "cursor";
//             this.cursor.classList.add("hidden");
//             document.body.append(this.cursor);
//         }

//         if (!this.bar) {
//             // 添加阅读进度滚动条
//             this.bar = document.createElement('div');
//             this.bar.id = 'bar';
//             document.body.append(this.bar);
//         }

//         var el = document.getElementsByTagName('*');
//         for (let i = 0; i < el.length; i++)
//             if (getStyle(el[i], "cursor") == "pointer")
//                 this.pt.push(el[i]);
//     }

//     refresh() {
//         this.cursor.classList.remove("hover");
//         this.cursor.classList.remove("active");
//         this.pos = { curr: null, prev: null };
//         this.pt = [];

//         this.create();
//         this.init();
//         this.render();
//     }

//     init() {
//         document.onmouseover = e => this.pt.includes(e.target) && this.cursor.classList.add("hover");
//         document.onmouseout = e => this.pt.includes(e.target) && this.cursor.classList.remove("hover");
//         document.onmousemove = e => { (this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = { x: e.clientX - 8, y: e.clientY - 8 }; this.cursor.classList.remove("hidden"); };
//         document.onmouseenter = e => this.cursor.classList.remove("hidden");
//         document.onmouseleave = e => this.cursor.classList.add("hidden");
//         document.onmousedown = e => this.cursor.classList.add("active");
//         document.onmouseup = e => this.cursor.classList.remove("active");
//     }

//     render() {
//         if (this.pos.prev) {
//             this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
//             this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
//             this.move(this.pos.prev.x, this.pos.prev.y);
//         } else {
//             this.pos.prev = this.pos.curr;
//         }
//         requestAnimationFrame(() => this.render());
//     }
// }

// (() => {
//     CURSOR = new Cursor();
//     // 需要重新获取列表时，使用 CURSOR.refresh()
// })();


var CURSOR;

class Cursor {
    constructor() {
        // 仅保留构造函数
        // 添加阅读进度滚动条
        this.bar = document.createElement('div');
        this.bar.id = 'bar';
        document.body.append(this.bar);
    }
}

(() => {
    const CURSOR = new Cursor();
    // 需要重新获取列表时，使用 CURSOR.refresh()
})();

