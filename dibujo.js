var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarLinea2(color, xinicial2, yinicial2, xfinal2, yfinal2)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial2, yinicial2);
  lienzo.lineTo(xfinal2, yfinal2);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var x = parseInt(texto.value);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var xi, yf, xf2, yi2;
  var espacio = ancho / lineas;

  for (l = 0;l < lineas; l++)
  {
      yi = espacio*l;
      xf = espacio * (l+1);
      yi2 = 300 - (espacio*(l+1))
      xf2 = 300 - (espacio*(l+1));
      dibujarLinea(colorcito,0,yi,xf,300);
      dibujarLinea2(colorcito,300,yi2,xf2,0);
     console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1, 1,1,299);
  dibujarLinea(colorcito, 1, 299,299,299);
  dibujarLinea2(colorcito,299,1,299,299);
}
