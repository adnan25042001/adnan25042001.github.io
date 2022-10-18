
let icon = document.querySelector("#theme-icon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if(localData == "dark"){
    icon.src = "img/sun.png";
    document.body.classList.add("dark-theme");
}else if(localData == "light"){
    icon.src = "img/moon-solid-24.png";
    document.body.classList.remove("dark-theme");
}

icon.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
        localStorage.setItem("theme", "dark");
    }else{
        icon.src = "img/moon-solid-24.png";
        localStorage.setItem("theme", "light");
    }
});