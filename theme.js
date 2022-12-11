
let i = 0;

let arr = ["#45b8ac", "#ff6b6b", "#2e86de", "#f368e0", "#efc050", "#e2244d"];

function mainClr(){
    if(i == arr.length) i = 0;
    document.documentElement.style.setProperty("--main-clr", arr[i]);
    i++;
}

setInterval(mainClr, 10000);