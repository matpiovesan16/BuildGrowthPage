function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById('idioma').value;
    
    if(idiomaSeleccionado == 'en'){
        window.location.href = 'index.html';
    }else{
        var newUrl = 'index_' + idiomaSeleccionado + '.html';
    
    console.log(newUrl);
    
    window.location.href = newUrl;

    }

    
}