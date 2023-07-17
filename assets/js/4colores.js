// variable guarda color
let color;

 let cambiarColor = (elemento) =>  {
                    elemento.style.backgroundColor = 'black';
                }      

document.querySelector('#div__1').addEventListener('click', function() {
    cambiarColor(this);
});
document.querySelector('#div__2').addEventListener('click', function(){
    cambiarColor(this);
});
document.querySelector('#div__3').addEventListener('click', function () {
    cambiarColor(this);
});
document.querySelector('#div__4').addEventListener('click', function () {
    cambiarColor(this);
});

document.querySelector('body').addEventListener('keydown', function(event){
    let elem = document.querySelector('#key');
    if(event.key === 'a'){
        elem.style.backgroundColor = 'pink';
    }
    else if(event.key === 's'){
        color = 'orange'
        elem.style.backgroundColor = color;
    }
    else if(event.key === 'd'){
        color = 'skyblue';
        elem.style.backgroundColor = color;
    }
});

document.querySelector('body').addEventListener('keydown', (event) => {
    let elem = document.getElementById('key1');
    console.log('entro')
    console.log(color);
    if(event.key === 'a'){
        color = 'purple';
        elem.style.backgroundColor = color; 
    }
    else if(event.key === 's'){
        color = 'grey';
        elem.style.backgroundColor = color;
    }
    else if(event.key === 'd'){
        color = 'pink'
        elem.style.backgroundColor = color;
    }
});
document.addEventListener('keydown', (event) => {
    let elem = document.getElementById('key2');
    if(event.key === 'q'){
        color = 'skyblue';
        elem.style.backgroundColor = color;
    }
    else if(event.key === 'w'){
        color = 'orange';
        elem.style.backgroundColor = color;
    }
    else if( event.key === 'e'){
        color = 'brown'
        elem.style.backgroundColor = color;
    }
});