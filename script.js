// names for toggle and list
const toggle = document.querySelector("#toggle");
const getColorList = document.querySelector("#colorlist");

// names for colors in list 
const home = document.querySelector("#home");
const red = document.querySelector("#red");
const orange = document.querySelector("#orange");
const purple = document.querySelector("#purple");
const green = document.querySelector("#green");


// functions menu
toggle.addEventListener("mouseenter", function() {
    getColorList.style.transform = "translateX(0px)";
});

toggle.addEventListener("mouseleave", function() {
    getColorList.style.transform = "translateX(-325px)";
});

getColorList.addEventListener("mouseover", function() {
    getColorList.style.transform = "translateX(0px)";
});

getColorList.addEventListener("mouseleave", function() {
    getColorList.style.transform = "translateX(-325px)";
});

// Changing background color by click 
home.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(222, 208, 190)";

});

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgba(204, 126, 102, 0.898)"; 
});

orange.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(237, 193, 110)";
});

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(153, 91, 153)"; 
});

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(125, 171, 125)";
});


