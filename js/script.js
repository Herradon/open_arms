/*-----POP UP 1-----*/

document.addEventListener("DOMContentLoaded", function () {
    const mostrarPopupBtn = document.getElementById("mostrar-popup1");
    const cerrarPopupBtn = document.getElementById("cerrar-popup1");
    const miPopup1 = document.getElementById("mi-popup1");

    mostrarPopupBtn.addEventListener("click", function () {
        miPopup1.style.display = "flex";
    });

    cerrarPopupBtn.addEventListener("click", function () {
        miPopup1.style.display = "none";
    });
});

/*-----FINAL DE POP UP 1-----*/