$(document).ready(function(){
$("#filt-category").click(function () {
    var val;
    val = $(this).prop('checked');
    if(val){
        $("#categories-groups").css('display', 'block');
    }else{
        $("#categories-groups").css('display', 'none');
    }
});


    $("#filt-ubication").click(function () {
        var val;
        val = $(this).prop('checked');
        if(val){
            $("#form-distancia").css('display', 'block');
        }else{
            $("#form-distancia").css('display', 'none');
        }
    });

    $("#filt-evento").click(function () {
        var val;
        val = $(this).prop('checked');
        if(val){
            $("#type-event").css('display', 'block');
        }else{
            $("#type-event").css('display', 'none');
        }
    });

    $("#filt-edades").click(function () {
        var val;
        val = $(this).prop('checked');
        if(val){
            $("#range-edad").css('display', 'block');
        }else{
            $("#range-edad").css('display', 'none');
        }
    });

    $("#filt-distancia").click(function () {
        var val;
        val = $(this).prop('checked');
        if(val){
            $("#form-distancia2").css('display', 'block');
        }else{
            $("#form-distancia2").css('display', 'none');
        }
    });
    
});
