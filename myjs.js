const theme = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const className = e.currentTarget.classList;

    if(className.contains("btn1")){
        theme.style.setProperty("--theme-color",'#3498db');
    }
    else if(className.contains("btn2")){
        theme.style.setProperty("--theme-color","#ff1756");
    }
    else if(className.contains("btn3")){
        theme.style.setProperty("--theme-color","#1cb65d");
    }
    else if(className.contains("btn4")){
        theme.style.setProperty("--theme-color","#8e44ad");
    }
    else if(className.contains("btn5")){
        theme.style.setProperty("--theme-color","#f4b932");
    }
    })    
})