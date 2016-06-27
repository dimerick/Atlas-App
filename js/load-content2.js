$(document).ready(function () {
    var position = $("#main-section").offset();
    var left = position.left - 5;
    $("#menu").css('top', position.top);
    $("#menu").css('left', left);

    $('body').on("click", '.show-menu', function(){
        $("#main-section").css('width', '62%');
        $("#main-section").css('float', 'right');
        $("#main-section").addClass('hide-menu');
        $("#menu").css('display', 'block');
        $("#menu").css('z-index', 100);
    });
    $('body').on("click", '.hide-menu', function(){
        $("#main-section").removeClass('hide-menu');
        $("#main-section").css('width', '100%');
        $("#menu").css('z-index', 0);
        $("#menu").css('display', 'none');
    });
    
});
