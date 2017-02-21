

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
