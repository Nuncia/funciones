// function pintar(){
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

let pintar = function(elem, color) {
                elem.style.backgroundColor = color
            } 

ele = document.getElementById("ele1")
ele.style.backgroundColor = 'green'
ele.addEventListener("click", function(){
    pintar(ele, 'yellow');
});