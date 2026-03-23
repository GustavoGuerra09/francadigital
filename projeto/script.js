//funcionalidade que permite ao usuário mudar a cor de fundo do site.
const seletorCor = document.getElementById("seletorCor"); 
const bntAplicarCor = document.getElementById("btnAplicarCor");

bntAplicarCor.addEventListener("click", (e) => {
    const cor = seletorCor.value;
//document.documentElement.style.setProperty para alterar a variável --cor-fundo em tempo real.”
    document.documentElement.style.setProperty("--cor-fundo", cor);
});
//Quando o usuário clica em um dos elementos (chips), a imagem principal do site muda.”
const chips = document.querySelectorAll(".chip");
const galeria = document.getElementById("galeriaHero");
const imagemInicial = chips[0].dataset.imagem;
galeria.style.backgroundImage =`url(${imagemInicial})`
//forEach : para cada objeto(repetir)
chips.forEach((chip) =>{
    //click para fazer o site reagir às ações do usuário.”
    chip.addEventListener("click", () => {
        galeria.classList.add("ativa");
        galeria.style.backgroundImage = `url(${chip.dataset.image})`
    })
})