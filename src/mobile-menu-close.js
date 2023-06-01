$('a').click(function(){
    // Здесь пишем код, который будет закрывать меню
    $(slide_wrp).css({ "right": -$(slide_wrp).outerWidth() + 'px' }); // скрываем меню
    setTimeout(function() {
        $(slide_wrp).removeClass('active'); // remove active class 
    }, 50);
    $(overlay).css({ "opacity": "0", "width": "0" });
})