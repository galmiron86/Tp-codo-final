function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value
    let dni_ingresado = document.getElementById("dni").value
    let direccion_ingresado = document.getElementById("direccion").value

    console.log(nombre_ingresado,dni_ingresado,direccion_ingresado);

    let datos = {
        nombre: nombre_ingresado,
        dni: dni_ingresado,
        direccion: direccion_ingresado,
    }
    console.log(datos);
    
    let url = "https://codoacodo2023.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            
            window.location.href = "../template/registro.html";  
            
        })
        .catch(err => {
            
            alert("Error al grabar" )
            console.error(err);
        })
}