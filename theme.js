
let icon = document.querySelector("#theme-icon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme");

if(localData == "dark"){
    icon.src = "img/sun.png";
    document.body.classList.remove("light-theme");
}else if(localData == "light"){
    icon.src = "img/moon-solid-24.png";
    document.body.classList.add("light-theme");
}

icon.addEventListener("click",() => {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "img/moon-solid-24.png";
        localStorage.setItem("theme", "light");
    }else{
        icon.src = "img/sun.png";
        localStorage.setItem("theme", "dark");
    }
});