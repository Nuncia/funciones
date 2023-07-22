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

function changeColorA(event){
    let elem = document.querySelector('#key');
    let evento = event.key.toLowerCase();
    let colorEspa = '';
    if(evento === 'a' || evento === 's' || evento === 'd'){
        if(event.key === 'a'){
            color = 'pink';
            colorEspa = 'Rosado';
        }
        else if(event.key === 's'){
            color = 'orange';
            colorEspa = 'Naranjo';
        }
        else if(event.key === 'd'){
            color = 'skyblue';
            colorEspa = 'Celeste';
        }

        if(color != ''){
            elem.style.backgroundColor = color;
            texto1.textContent = `Se asigno el color ${colorEspa} a la letra ${event.key}`; 
        }
    }
}

function changeColorB(event){
    let elem =  document.getElementById('padre');
    let elementoKey1 = document.querySelector('#key1');
    let evento = event.key.toLowerCase(); 
    let nuevoElem = document.createElement('div');
    let colorEspanyol = '';

    if(evento === 'q' || evento === 'w' || evento === 'e'){
        if(evento === 'q'){
            colorear = 'yellow';
            colorEspanyol = 'Amarillo';
        }
        else if(evento === 'w'){
            colorear = 'blue';
            colorEspanyol = 'Azul';
        }
        else if(evento === 'e'){
            colorear = 'brown';
            colorEspanyol = 'Café'
        }

        if(document.querySelector('#key1') === null){
           
            nuevoElem.setAttribute('id', 'key1');
            nuevoElem.style.height = '200px';
            nuevoElem.style.width = '200px';
            nuevoElem.style.borderColor = 'black';
            nuevoElem.style.borderWidth = '1px';
            nuevoElem.style.boxSizing = 'border-box';
            nuevoElem.style.margin = '5px';
            nuevoElem.style.backgroundColor = colorear;
            elem.appendChild(nuevoElem);
            texto2.textContent = `Se asigno el color ${colorEspanyol} a la letra ${event.key}`;
             
        }
        else{
            elementoKey1.style.backgroundColor = colorear;
             elem.appendChild(nuevoElem);
        texto2.textContent = `Se asigno el color ${colorEspanyol} a la letra ${event.key}`;
        }
    }    
}

document.addEventListener('keydown', changeColorA);
document.addEventListener('keydown', changeColorB);
