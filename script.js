const titulo = document.getElementById('texto').innerText;
const campoNome = document.getElementById("campo-nome");
// (Variavel) => {} -> funçao anonima
campoNome.addEventListener("input",(e) => {
    console.log(e.target.value)
})
const caixa = document.getElementById("caixa");
// caixa.innerHTML = "<h2> texto adicionado pelo javascript </h2>"
const botao = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", (e) => {
    const valor = campoNome.value;
    // mensagem.textContent = `ola ${valor}`; concatenaçao
    mensagem.textContent = "Ola " + valor;
})