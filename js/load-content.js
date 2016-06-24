$(document).ready(function () {
      $.get('index-invited-ajax.html', function (data) {
        console.log(data);
        $("#main-section").html(data);
    });


    $('body').on("click", '#btn-register-email', function(){
        $.get('register-email-ajax.html', function (data) {
            $("#main-section").html(data);
            $.getScript('js/leaflet.js');
            $.getScript('js/map.js');
        });
    });

    $('body').on("click", '.return-index-invited', function(){
        $.get('index-invited-ajax.html', function (data) {
            $("#main-section").html(data);
        });
    });

    $('body').on("click", '#a-start-session', function(){
        $.get('start-session-ajax.html', function (data) {
            $("#main-section").html(data);
        });
    });

    $('body').on("click", '#a-recovery-password', function(){
        $.get('recovery-password-ajax.html', function (data) {
            $("#main-section").html(data);
        });
    });

    $('body').on("click", '.return-start-session', function(){
        $.get('start-session-ajax.html', function (data) {
            $("#main-section").html(data);
        });
    });

    $('body').on("click", '#btn-register', function(event){
        event.preventDefault();
        $.get('register-successful.html', function (data) {
            $("#main-section").html(data);
        });
    });

    $('body').on("click", '#btn-invited', function(event){
        event.preventDefault();
        var url = 'index-user.html'
        $(location).attr('href',url);
    });

});
