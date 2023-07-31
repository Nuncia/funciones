// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//    
//  const ele = document.getElementById("ele1")
//  ele.addEventListener("click", pintar);    

const pintar = function (elemento, color='green'){
    elemento.style.backgroundColor = color;
}

const elem = document.getElementById('ele1');
elem.addEventListener('click', function(){
    pintar(elem, 'yellow');
})

