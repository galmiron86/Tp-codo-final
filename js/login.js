const usuario = "admin";
const contraseña = "1234";

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const usuarioIngresado = document.querySelector("#usuario").value;
        const contraseñaIngresada = document.querySelector("#contraseña").value;

        if (usuario === usuarioIngresado && contraseña === contraseñaIngresada) {
            window.location.href = "tabla.html";
        } else {
            if (usuario !== usuarioIngresado) {
                alert("Usuario incorrecto");
            } else if (contraseña !== contraseñaIngresada) {
                alert("Contraseña incorrecta");
            }
        }
    });
});
