const form = document.getElementById("formpassword");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(password.value.length < 10){
        mensaje.textContent = "La contraseña debe de ser por lo menos 10 caracteres";
        return;
    }
    if(password.value !== confirmar.value){
        mensaje.textContent = "Las contraseñas no coinciden";
        return;
    }
    mensaje.textContent = "Contrasena valida";
    window.location.href = "/pagina";
    
    setTimeout(() => {
        window.location.href = "/pagina";
    }, 1000);
});