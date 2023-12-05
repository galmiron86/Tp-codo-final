
let cadena = location.search; 
let datos = new URLSearchParams(cadena);


let resultado = {};

for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
    resultado[dni] = valor;
    resultado[direccion] = valor
    
}

document.getElementById("id").value = resultado["id"]
document.getElementById("nombre").value = resultado["nombre"]
document.getElementById("dni").value = resultado["dni"]
document.getElementById("direccion").value = resultado["direccion"]
