const menuUl = document.getElementById('menuUl');
const menu = document.getElementById('menu');
const cerrarMenu = document.getElementById('menuCerrar');
const botonNav = document.querySelectorAll('#botonNav');


function abrirMenu(){
    menuUl.classList.remove('listaOcultar');
    cerrarMenu.classList.remove('hidden');
    cerrarMenu.classList.add('min-[970px]:hidden');
    menu.classList.add('hidden');

    console.log('entramos')
    
}


function cerrarMenuF(){
    menuUl.classList.add('listaOcultar');

    cerrarMenu.classList.add('hidden');
    
    menu.classList.remove('hidden');
    
}


menu.addEventListener('click', abrirMenu);

cerrarMenu.addEventListener('click', cerrarMenuF);



botonNav.forEach(toggle => {
    toggle.addEventListener('click', cerrarMenuF);
})



console.log(botonNav);

