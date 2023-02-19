/*
    OBJETIVO 1 - Quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video trailer.
        - Passo 1.1 - Dar um jeito de pegar o elemento que representa o botão do trailer na tela usando o JS.
        - Passo 1.2 - Dar um jeito de identificar quando o usuário clicar no botão do trailer .
        - Passo 1.3 - Dar um jeito de pegar o elemento da modal no JS.
        - Passo 1.4 - Abrir a modal na tela.
    OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal.
        - Passo 2.1 - Dar um jeito de pegar o elemento de fechar modal usando JS.
        - Passo 2.2 - Dar um jeito de identificar quando o usuário clicar no X.
        - Passo 2.3 - Fechar modal.
*/



const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal')
const modal = document.querySelector('.modal')
const video = document.getElementById('video')
const linkDoVideo = video.src

function alternarModal(){
    modal.classList.toggle('aberto')
}

botaoTrailer.addEventListener("click", () =>{
    console.log('Clicou no botão, veja o trailer');
})

botaoTrailer.addEventListener("click", () =>{
    alternarModal()
    video.setAttribute('src', linkDoVideo)
})

botaoFecharModal.addEventListener("click", () =>{
    console.log('Clicou no botão, fechou');
})

botaoFecharModal.addEventListener("click", () =>{
    alternarModal()
    video.setAttribute('src', '')
})





