const seletorCor = document.getElementById("seletorCor"); 
const bntAplicarCor = document.getElementById("btnAplicarCor");

bntAplicarCor.addEventListener("click", (e) => {
    const cor = seletorCor.value;
    document.documentElement.style.setProperty("--cor-fundo", cor);
});
const chips = document.querySelectorAll(".chip");
const galeria = document.getElementById("galeriaHero");
const imagemInicial = chips[0].dataset.image;
galeria.style.backgroundImage =`url(${imagemInicial})`;
    chip.addEventListener("click", (e) => {
        const novaImagem = e.target.dataset.image;
    galeria.style.backgroundImage = `url(${novaImagem})`;
});

