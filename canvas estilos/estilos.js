function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    //comenzamos a realizar los trazos 
    lienzo.beginPath();
    //establecemos un color al primer trazo
    lienzo.strokeStyle = 'red';
    //aplicamos el estilo en line 'linewidth'
    lienzo.lineWidth = 7;
    //posicionamos el lapiz
    lienzo.moveTo(40, 20);
    //realizamos el traso a la posicion indicada
    lienzo.lineTo(40, 195);
    //especificamos que solo es el contorno
    lienzo.stroke();
    
      //conmenzamo el siguiente trazo
    lienzo.beginPath();
    lienzo.strokeStyle = 'blue';
    lienzo.lineCap = 'butt';
    lienzo.moveTo(80, 20);
    lienzo.lineTo(80,195);
    lienzo.stroke();
    
        //conmenzamo el siguiente trazo
    lienzo.beginPath();
    lienzo.strokeStyle = 'lime';
    lienzo.lineCap = 'round';
    lienzo.moveTo(120, 20);
    lienzo.lineTo(120,195);
    lienzo.stroke();
    
        //conmenzamo el siguiente trazo
    lienzo.beginPath();
    lienzo.strokeStyle = 'yellow';
    lienzo.lineCap = 'square';
    lienzo.moveTo(160, 20);
    lienzo.lineTo(160,195);
    lienzo.stroke();
    
         //conmenzamo el siguiente trazo
    lienzo.beginPath();
    lienzo.strokeStyle = 'purple';
    lienzo.lineCap = 'bevel';
    lienzo.moveTo(200, 90);
    lienzo.lineTo(230, 10);
    lienzo.lineTo(260, 90);
    lienzo.stroke();
    
           //conmenzamo el siguiente trazo
    lienzo.beginPath();
    lienzo.strokeStyle = 'aqua';
    lienzo.lineCap = 'round';
    lienzo.moveTo(200, 180);
    lienzo.lineTo(230, 100);
    lienzo.lineTo(260, 180);
    lienzo.stroke();
    
           //conmenzamo el siguiente trazo
    lienzo.beginPath();
    lienzo.strokeStyle = 'silver';
    lienzo.lineCap = 'miter';
    lienzo.miterLimit = 2 ;
    lienzo.moveTo(200, 270);
    lienzo.lineTo(230, 190);
    lienzo.lineTo(260, 270);
    lienzo.stroke();
  
}

window.addEventListener("load", iniciar, false);
//////

function inicia() {
    var elementoO = document.getElementById('lien');
    lien = elementoO.getContext('2d');
    //comenzamos a realizar los trazos 
    
    lien.font = 'bold  24px verdana, sans-serif';
    lien.textAlign = 'start';
    lien.textBaseline = 'bottom';
    
    var txt ='mi mensaje';
    
    lien.fillText('ancho:' + lien.measureText(txt).width,5,30);
    lien.fillText(txt,5,70);
    
      lien.fillText('MI MENSAJE', 100, 124);
    lien.strokeText('MENSAJE STROKE', 150, 180, 600);
  
    
}
window.addEventListener("load", inicia, false);

////// sombras 


function inicio() {
    var elemen = document.getElementById('lie');
    lie = elemen.getContext('2d');
    //comenzamos a realizar los trazos 
    
 lie.shadowColor='rgba(0,0,0,0.5)';
    lie.shadowOffsetX=4;
    lie.shadowOffsety=4;
    lie.shadowBlur=1;
    
    lie.font='bold 24px verdana, sans-serif';
     lie.textAlign='start';
    lie.textBaseline='bottom';
    //lie.translate(50,10);
    lie.rotate(Math.PI/290*45);
    lie.fillText('mi mensaje',100, 124);
   
  
    
}
window.addEventListener("load", inicio, false);
