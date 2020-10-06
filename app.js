let climaLista = document.querySelector('#Clima');
var dataDetalle=[];
let tablaHTML = '';

fetch('https://ws.smn.gob.ar/map_items/weather')
.then(response => response.json())
.then(data => {
    climaLista.innerHTML = ''
  for(i = 0; i < data.length; i++) {
  dataDetalle = data;
  climaLista.innerHTML += `
  <tr>
  <td>${dataDetalle[i].name}</td>
  <td>${dataDetalle[i].province}</td>
  <td>${dataDetalle[i].weather.temp}</td>
  <td><button type=\"button\" class=\"btn btn-info\" onclick=\"mostrarMsj(\`${i}\`)\"> Detalle </button></td>
  </tr>
  `
}
});

// Get the modal
var modal = document.getElementById("myModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function mostrarMsj(i){
  msgHTML = `<div class = \"modal-content\"> <div class = \"modal-header\">
  <h2> ${dataDetalle[i].name} </h2>
  </div> <div class = \"modal-body\"> 
  <p> En la mañana: ${dataDetalle[i].forecast.forecast[0].morning.description} </p>
  <p> En la tarde: ${dataDetalle[i].forecast.forecast[0].afternoon.description} </p>
  </div> <div class = \"modal-footer\">
  <h2> La humedad es de: ${dataDetalle[i].weather.humidity}</h2> 
  </div> </div>
  `;
  document.getElementById("myModal").innerHTML = msgHTML;
  modal.style.display = "block";
}