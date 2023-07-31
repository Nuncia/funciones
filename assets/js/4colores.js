let elem1 = document.getElementById('div_1');
const elem2 = document.getElementById('div_2');
const elem3 = document.getElementById('div_3');
const elem4 = document.getElementById('div_4');

let cambiarColor = function(elemento){
    elemento.style.background = 'black';
}

elem1.addEventListener('click', function(){
    cambiarColor(elem1)
});
elem2.addEventListener('click', function(){
    cambiarColor(elem2);
});
elem3.addEventListener('click', function(){
    cambiarColor(elem3);
});
elem4.addEventListener('click', function(){
    cambiarColor(elem4);
});



let color = '';
let colorear = '';
let coloreare = '';

function changeColorA(event){
    let elementoColor = document.getElementById('key');
    let texto = document.getElementById('texto_1');
    let letra = event.key.toLowerCase();
    
    if(letra === 'a' || letra === 's' || letra === 'd'){
        if(letra  === 's'){
            color = 'orange';
            coloreare = 'Naranjo';
        } 
        else if(letra === 'a'){
            color = 'pink';
            coloreare = 'Rosado';
        }
        else if(letra === 'd'){
        color = 'skyblue';
        coloreare = 'Celeste';
    }
    elementoColor.style.backgroundColor = color;
    texto.textContent = `Se asigno el color ${coloreare} a la letra ${event.key}`;
}
}
function changeColorB(event){
    let color= '';
    let colorear = '';
    let padre = document.querySelector('#padre');
    let key1 = document.querySelector('#key1');
    let letra = event.key.toLowerCase();
    let texto = document.querySelector('#texto_2');

    if(letra === 'q' || letra === 'w' || letra === 'e'){
        if(letra === 'q'){
            color = 'yellow';
            colorear = 'Amarillo';
        }
        else if(letra === 'w'){
            color = 'blue';
            colorear = 'Azul';
        }
        else{
            color = 'brown';
            colorear = 'Café';
        }

        if(document.querySelector('#key1') === null){
            console.log('key1' ,key1);
            let nuvoElemento = document.createElement('div');
            nuvoElemento.setAttribute('id','key1');
            nuvoElemento.style.height = '200px';
            nuvoElemento.style.width =  '200px';
            nuvoElemento.style.border =  '1px solid black';
            nuvoElemento.style.margin = '5px';
            nuvoElemento.style.marginLeft = 'auto';
            nuvoElemento.style.marginRight = 'auto';
            nuvoElemento.style.backgroundColor = color;
            padre.appendChild(nuvoElemento);
        }
        else{
            key1.style.backgroundColor = color;
        }
        texto.textContent = `Se asigno el color ${colorear} a la letra ${event.key}`
    }
    
    
    
    
}

document.addEventListener('keydown', changeColorA);
document.addEventListener('keydown', changeColorB);