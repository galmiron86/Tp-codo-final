function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let dni_ingresado = document.getElementById("dni").value 
    let direccion_ingresado = document.getElementById("direccion").value 
   

    let datos = {
        nombre: nombre_ingresado,
        dni: dni_ingresado,
        direccion: direccion_ingresado
        
    }

    console.log(datos);

    let url = "https://codoacodo2023.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

        
           window.location.href = "../template/tabla.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}