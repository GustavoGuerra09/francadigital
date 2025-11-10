const titulo = document.getElementById('texto').innerText;
const campoNome = document.getElementById("campo-nome");
// (Variavel) => {} -> funçao anonima
campoNome.addEventListener("input",(e) => {
    console.log(e.target.value)
})