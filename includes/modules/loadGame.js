export function loadGame(params) {
  const screenElement = document.querySelector('div.crt');
    //CLEAN SCREEN
	screenElement.innerHTML = '';

    // Crear el elemento <div>
    var canvasContainer = document.createElement('div');
    // Asignar el ID al elemento <div>
    canvasContainer.id = 'canvasContainerID';
    // Añadir el elemento <div> al cuerpo del documento
    screenElement.appendChild(canvasContainer);

    // Crear el elemento <canvas>
    var canvas = document.createElement('canvas');
    // Asignar el ID al elemento <canvas>
    canvas.id = 'myCanvas';
    // Añadir el elemento <canvas> al cuerpo del documento
    canvasContainer.appendChild(canvas);

     // Obtener el elemento canvas
     var canvas = document.getElementById("myCanvas");
     var ctx = canvas.getContext("2d");



}