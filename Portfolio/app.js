let btn = document.getElementById("btn");
let btndark = document.getElementById("btndark");
let icon = document.getElementById("icon");

btn.onclick = function(){
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        icon.src="images/sun.png";
        btndark.innerHTML="Light";
    }
    else{
        icon.src="images/moon.png";
        btndark.innerHTML="Dark";
    }
}