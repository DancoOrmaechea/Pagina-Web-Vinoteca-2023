const abrir=document.querySelector ("#menuAbrir")
const cerrar=document.querySelector ("#menuCerrar")
const nav=document.querySelector ("#navHamburguesa")

abrir.addEventListener ("click" , ()=>{
    nav.classList.add ("abierto")
}) 

cerrar.addEventListener ("click" , ()=>{
    nav.classList.remove ("abierto")
}) 
