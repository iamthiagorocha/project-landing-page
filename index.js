var setadir = window.document.getElementById("setadir")
var leo = window.document.getElementById("leo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesq = window.document.getElementById("setaesq")

function rolarparadireita(){
    leo.style = "display:none"
    bruna.style = "display: flex"
    setadir.style = "display: none"
    setaesq.style = "display: flex; margin-top: 80px"
}

function rolarparaesquerda(){
    leo.style = "display: flex"
    bruna.style = "display: none"
    setadir.style = "display: flex; margin-top: 80px"
    setaesq.style = "display: none"
}