const titulo = document.getElementById('texto').innerText;
const campoNome = document.getElementById("campo-nome");
// (Variavel) => {} -> funçao anonima
campoNome.getEventListener("input",(e) => {
    console.log(e.target.value)
})