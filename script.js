const botao = document.getElementById("abrirCarta");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

botao.addEventListener("click", () => {

    inicio.classList.add("abrindo");

    botao.disabled = true;

    setTimeout(() => {

        inicio.style.display = "none";

        carta.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1700);

});