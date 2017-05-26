let $ = function(id) {
    return document.getElementById(id);
};
// let context_mid_t = document.querySelectorAll('div.context_mid_t');
// console.log(context_mid_t[0]);

// context_mid_t.onmouseover = function(this) {
//     this.style.top = '240px';
//     alert('nihao');
// }

// context_mid_t.onmouseover = function (){
//     context_mid_t.style.top = '240px';
// }

//nextElementSibling获取下一个节点

// function ups(i) {
//     context_mid_t.childNodes[3].style.top = i + 'px';
// }
// context_mid_t.onmouseover = function() {
//     ups(140);
// }
// context_mid_t.onmouseout = function() {
//     ups(200);
// }


let context_mid_t = document.getElementsByClassName('context_mid_t');
for (let i = 0; i < 3; i++) {
    context_mid_t[i].onmouseover = function(e) {
        e.currentTarget.childNodes[3].style.top = '140px';
    };
    context_mid_t[i].onmouseout = function(e) {
        e.currentTarget.childNodes[3].style.top = '200px';
    };
};

//监听滚动条事件
window.onscroll = function() {
    let navs = $('navs');
    let maiden_context = $('maiden_context');
    if (scroll().top >= navs.offsetHeight) {
        navs.style.position = 'fixed';
        maiden_context.style.marginTop = '110px';
    }else {
        navs.style.position = 'relative';
        maiden_context.style.marginTop = '30px';
    };
};

function scroll() {
    return {
        top: window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop || 0,
        left: window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft || 0
    };
};

//获取有二级菜单的li标签文档id对象
let navs_ws = $('navs_ws');
// navs_ws.onmouseover = function() {
//     // nextElementSibling获取当前元素的后一个兄弟元素
//     navs_ws.nextElementSibling.style.display = 'inline-block';
// };
navs_ws.addEventListener('mouseover', function(e) {
    navs_ws.nextElementSibling.style.display = 'inline-block';
});


navs_ws.onmouseout = function() {
    // nextElementSibling获取当前元素的后一个兄弟元素
    navs_ws.nextElementSibling.style.display = 'none';
    navs_ws.nextElementSibling.onmouseover = function() {
        navs_ws.nextElementSibling.style.display = 'inline-block';
    };
    navs_ws.nextElementSibling.onmouseout =  function() {
        navs_ws.nextElementSibling.style.display = 'none';
    };
};


let r_navs = $('r_navs').children;
let r_context = $('r_context').children;
for (let i = 0; i < r_navs.length; i++) {
    r_navs[i].onmouseover = function() {
        r_navs[i].className = 'active';
        r_context[i].style.left = '15px';
        for (let y = 0; y < r_context.length; y++) {
            if (i==y) {
                    continue;
            }else {
                    r_context[y].style.left = '380px';
                    r_navs[y].className = ' ';
            };
        };
    };
};

let l_navs = $('l_navs').children;
let ul_banner = $('ul_banner');
for (let i = 0; i < l_navs.length; i++) {
    l_navs[i].onmouseover = function() {
        ul_banner.style.left = -790*i + 'px';
        for (let y = 0; y < l_navs.length; y++) {
            if (i==y) {
                l_navs[y].className = 'n';
            }else {
                l_navs[y].className = ' ';
            };
        };
    };
};

// 监控所有A标签渐变
// let atags = document.getElementsByTagName('a');
// for (let i = 0; i < atags.length; i++) {
//     let opacity_value = document.defaultView.getComputedStyle(atags[i], null).opacity;
//     atags[i].onmouseover = function() {
//         atags[i].style.opacity = opacity_value*0.6;
//     };
//     atags[i].onmouseout = function(){
//         atags[i].style.opacity = opacity_value;
//     }
// }
