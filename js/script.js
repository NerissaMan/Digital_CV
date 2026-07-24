const themeButton = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
    themeButton.textContent = "Light";

}

themeButton.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeButton.textContent = "Light";
        localStorage.setItem("theme","light");

    }else{

        themeButton.textContent = "Dark";
        localStorage.setItem("theme","dark");

    }

});