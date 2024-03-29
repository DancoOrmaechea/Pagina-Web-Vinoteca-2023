// Menu hamburguesa
const abrir=document.querySelector ("#menuAbrir")
const cerrar=document.querySelector ("#menuCerrar")
const nav=document.querySelector ("#navHamburguesa")

abrir.addEventListener ("click" , ()=>{
    nav.classList.add ("abierto")
}) 

cerrar.addEventListener ("click" , ()=>{
    nav.classList.remove ("abierto")
}) 


// formulario contacto

const $form = document.querySelector ('#form');
const $buttonMailto = document.querySelector('#mailto')
$form.addEventListener('submit', handleSubmit )

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData (this)
    $buttonMailto.setAttribute('href', `mailto:labodegadeloso@gmail.com.ar?subject=
                                    ${form.get('nombre')} 
                                    ${form.get('apellido')} 
                                    ${form.get('email')}
                                &body=${form.get('mensaje')} `)
    $buttonMailto.click()
}

// formulario INDEX

const $formIndex = document.querySelector ('#formIndex');
$formIndex.addEventListener('submit', handleSubmit )

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData (this)
    $buttonMailto.setAttribute('href', `mailto:labodegadeloso@gmail.com.ar?subject=
                                    ${form.get('email')}`)
    $buttonMailto.click()
    console.log(form.get('emailIndex'))
}