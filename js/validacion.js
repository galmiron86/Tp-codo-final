

function validarFormulario() {

    var nombre = document.getElementById("nombre").value.trim();
    var dni = document.getElementById("dni").value.trim();
    var direccion = document.getElementById("direccion").value.trim();

    if(nombre==="" || dni==="" || direccion===""){
      alert("Por favor, completar todos los campos vacíos del formulario.")
      return false
    }
  
    var nombreTest = /^[a-zA-Z]+$/.test(nombre) 

    if(nombreTest === false){
      alert("Por favor,ingrese un nombre con letras del alfabeto.")
      return false
    }

    if(dni.length!==8){
      alert("Por favor,ingrese dni con ocho números.")
      return false
    }

    if(isNaN(dni)){
      alert("Por favor,ingrese dni sólo con números.")
      return false
    }
   
    alert("Se enviaron los datos correctamente.")
  }