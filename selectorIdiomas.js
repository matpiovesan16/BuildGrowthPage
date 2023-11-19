function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById('idioma').value;
    var newUrl = 'index_' + idiomaSeleccionado + '.html';
    window.location.href = newUrl;
}