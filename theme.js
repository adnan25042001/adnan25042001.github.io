
let arr = ["#e2244d", "#45b8ac", "#ff6b6b", "#2e86de", "#f368e0", "#efc050"];

let i = +localStorage.getItem("i") || 0;
if(i >= arr.length) i = 0;
document.documentElement.style.setProperty("--main-clr", arr[i]);
i = i + 1;

function mainClr(){
    if(i >= arr.length) i = 0;
    localStorage.setItem("i",i);
    document.documentElement.style.setProperty("--main-clr", arr[i]);
    i = i + 1;
}

setInterval(mainClr, 5000);