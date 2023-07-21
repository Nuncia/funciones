// variables
let color = '';
let colorear = '';

let elem1 = document.querySelector('#div_1');
let elem2 = document.querySelector('#div_2');
let elem3 = document.querySelector('#div_3');
let elem4 = document.querySelector('#div_4');
let texto1 = document.querySelector('#texto_1');
let texto2 = document.querySelector('#texto_2');


let cambiarColor = (elemento) =>  {
                    elemento.style.backgroundColor = 'black';
                }      

elem1.addEventListener('click', function() {
    cambiarColor(elem1);
});
elem2.addEventListener('click', function(){
    cambiarColor(elem2);
});
elem3.addEventListener('click', function () {
    cambiarColor(elem3);
});
elem4.addEventListener('click', function () {
    cambiarColor(elem4);
});

function changeColor(event){
    let elem = document.querySelector('#key');
    let evento = event.key.toLowerCase();
    if(evento === 'a' || evento === 's' || evento === 'd'){
        if(event.key === 'a'){
            color = 'pink';
        }
        else if(event.key === 's'){
            color = 'orange';
        }
        else if(event.key === 'd'){
            color = 'skyblue';
        }

        if(color != ''){
            elem.style.backgroundColor = color;
            texto1.textContent = `Se asigno el color ${color} a la letra ${event.key}`; 
        }
    }
}

document.addEventListener('keydown', changeColor);

function changeColorB(event){
    let elem =  document.getElementById('padre');
    let evento = event.key.toLowerCase();

   if(evento === 'q' || evento === 'w' || evento === 'e'){
    const nuevoElem = document.createElement('div');
    nuevoElem.setAttribute('id', 'key');
    nuevoElem.style.height = '200px';
    nuevoElem.style.width = '200px';
    nuevoElem.style.borderColor = 'black';
    nuevoElem.style.borderWidth = '1px';
    nuevoElem.style.boxSizing = 'border-box';
    nuevoElem.style.margin = '5px';
    if(evento === 'q'){
        colorear = 'yellow';
    }
    else if(evento === 'w'){
        colorear = 'blue';
    }
    else if(evento === 'e'){
        colorear = 'brown';
    }
    
    if(colorear != ''){
        nuevoElem.style.backgroundColor = colorear;
        elem.appendChild(nuevoElem);
        texto2.textContent = `Se asigno el color ${colorear} a la letra ${event.key}`; 
    }
   }
}

document.addEventListener('keydown', changeColorB);
