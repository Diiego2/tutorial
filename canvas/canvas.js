function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    //agregar color
    lienzo.fillStyle="#000099";
    lienzo.strokeStyle="#990000";
    lienzo.globalAlpha= 0.5;
    
 lienzo.fillRect(110,110,100,100);
 lienzo.strokeRect(100,100,120,120);   
 lienzo.clearRect(120,120,80,80);
}

window.addEventListener("load", iniciar, false);
////////////////
function iniciarr(){
    var elementoo = document.getElementById('lienzoo');
    lienzoo = elementoo.getContext('2d');
    //con el metodo createlinearGradient
    //creamos el ojeto para aplicar un gradiante al lienzo2
var gradiente= lienzoo.createLinearGradient(0,0,10,100);
    gradiente.addColorStop(0.5, '#0000ff');
    gradiente.addColorStop(1, '#000000');
    
    lienzoo.fillStyle=gradiente;   
    lienzoo.fillRect(10,10,100,100);
    lienzoo.fillRect(150,10,200,100);
    
}

window.addEventListener("load", iniciarr, false);

