// console.log('JS externo funcionou!')
// console.log(window)

// alert('Seja bem vindo!')

// let adulto = confirm('Você tem mais de 18 anos?')

// let nomeUsuario = prompt('Qual seu nome?')

// let elementHeader = document.querySelector('.olaUsuario')
// elementHeader.innerHTML = `<strong>Olá, ${nomeUsuario}</strong>`

// let logo = document.getElementById('logo')
// console.log(logo)
// logo.style.color = 'orange'

function darkMode() {
    let body = document.querySelector('body')
    let button = document.querySelector('header .box button')
    let p = document.querySelector('.styles-types p')

    if (body.classList.contains('light')) {
        button.innerText = 'Light Mode'
        button.style.background = '#FFF'
        button.style.color = '#000'
        body.style.background = '#333';
        body.classList.remove('light')
        body.classList.add('dark')
        p.style.color = '#FFF'
    } else if (body.classList.contains('dark')) {
        button.innerText = 'Dark Mode'
        button.style.background = '#000'
        button.style.color = '#FFF'
        body.style.background = '#FFF';
        body.classList.remove('dark')
        body.classList.add('light')
        p.style.color = '#888888'
    }
}

const modalOverlay = document.querySelector('.modal-overlay')

setTimeout(function() {
    modalOverlay.classList.add('active')
}, 5000)

function closeModal() {
    modalOverlay.classList.remove('active')
}