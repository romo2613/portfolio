// En la version movil cierra el menu lateral cuando se hace click en algun elemento de navegacion del menu
// para evitar que al volver atras el menu se quede abierto

var menuItems = document.querySelectorAll('.menu li a');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
        var drawerToggle = document.querySelector('#my-drawer');
        drawerToggle.checked = false;
    });
}


