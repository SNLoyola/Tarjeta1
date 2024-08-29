function toggleMenu(tarjeta) {
    // Seleccionar el elemento .menu dentro de la tarjeta clicada
    var menu = tarjeta.querySelector('.menu');
    
    // Alternar la visibilidad del menú
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
        const menu = this.querySelector('.menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            // Ocultar todos los menús antes de mostrar el seleccionado
            document.querySelectorAll('.menu').forEach(m => m.style.display = 'none');
            menu.style.display = 'block';
        }
    });
});
