let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好,我叫小新
 *接下来我演示一下我的前端功底
 *首先我要准备一个div
 */
#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}
/*接下来把div变成一个八卦图
 *注意看好了
 *首先把div变成一个圆
 */
#div1{
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
/*八卦是阴阳形成的
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*现在加上两个神秘的小球*/
#div1::before{
    width:50%;
    height:50%;
    border-radius:50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:black;
    border:none;
    background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
#div1::after{
    width:50%;
    height:50%;
    border-radius:50%;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%);
}
/*八卦图做好了
 *现在让他动起来
*/
#div1{
    animation:div1 5s 1s infinite  linear;
}
@keyframes div1 {
  0%{
    transform:rotate(0deg) ;
  }
  100%{
    transform:rotate(-360deg);
  }
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] == "\n") {
      string2 += "<br>";
    } else if (string[n] == " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0,99999)
    html.scrollTo(0,99999)
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 50);
};
step();
