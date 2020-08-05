let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `/*你好，我叫小潘
* 接下来我要展示我的前端功底
* 下面我会创建一个 div */

#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我要将刚刚创建的 div 变成一个八卦图
* 请注意！！！
* 第一步，将刚刚创建的 div 变成一个圆*/

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/*八卦是一黑一白，
* 所以第二步我们将 div 的左边变成白色，
* 右边变成黑色*/

#div1{
    background: 
    linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*接下来，我们要展示什么是“阴阳互根” 
* 嘻嘻*/

#div1::before{
    transform: translateX(-50%);
    background: #fff;
    background: 
    radial-gradient(circle, rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 25%, 
    rgba(255,255,255,1) 25%);
}

#div1::after{
    transform: translate(-50%,100%);
    background: #000;
    background:
    radial-gradient(circle, rgba(255,255,255,1) 0%,
    rgba(255,255,255,1) 25%, 
    rgba(0,0,0,1) 25%);
}
/*结束了，谢谢！*/
`
let string2 = "";
// string = string.replace("\n", "<br>"); // 只会把第一个回车变成换行
// string = string.replace(/\n/g, "<br>"); // 正则，会把所有的回车转换成换行
let n = 0;


let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 = string2 + '<br>'
                // 如果字符串是回车，就不照搬内容到 string2 里面
        } else if (string[n] === ' ') {
            string2 = string2 + '&nbsp;'
        } else {
            string2 = string2 + string[n]
                // 如果字符串不是回车，就照搬内容到 string2 里面

        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        // 在写html的同时，把css的样式也改写，用 substring 是为了不把 HTML 的标签也打印出来
        window.scrollTo(0, 99999); // 页面滚动到最下面
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 50)
}

step();