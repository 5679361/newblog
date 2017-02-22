

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
    }
    context_mid_t[i].onmouseout = function(e) {
        e.currentTarget.childNodes[3].style.top = '200px';
    }
}

//监听滚动条事件
window.onscroll = function() {
    let navs = document.getElementById('navs');
    let maiden_context = document.getElementById('maiden_context');
    if (scroll().top >= navs.offsetHeight*2) {
        navs.style.position = 'fixed';
        maiden_context.style.marginTop = '110px';
    }else {
        navs.style.position = 'relative';
        maiden_context.style.marginTop = '30px';
    }
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
}
