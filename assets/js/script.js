// function pintar(){
// ele = document.getElementById("ele1")
// ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

let pintar = (elemento, color = 'green') =>{
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener('click', () => pintar(ele, 'yellow'));