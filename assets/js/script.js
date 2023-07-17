// function pintar(){
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

let pintar = function(elem, color = 'yellow') {
                elem.style.backgroundColor = color
            } 

let ele = document.getElementById("ele1")
ele.style.backgroundColor = 'green'
ele.addEventListener("click", function(){
    pintar(ele);
});