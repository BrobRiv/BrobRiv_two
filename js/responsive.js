$(function(){

    var header = document.getElementById('header');
    var headroom = new headroom(header);
    headroom.init();

    // Menu Responsive
    // Calculando el ancho de la pagina
    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        icono = $('#btn-menu .icono');

        if(ancho < 700) {
            enlaces.hide();
            icono.addClass('fa-bars');
        }

        btnMenu.on('click', function(e){
            enlaces.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
        });

        $(window).on('resize', function(){
            if($(this).width() > 700){
                enlaces.show();
                icono.addClass('fa-times');
                icono.removeClass(fa-bars);
            }
        });
});