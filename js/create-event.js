$(document).ready(function(){
$("#check-notification").click(function () {
    var val;
    val = $(this).prop('checked');
    if(val){
        $("#categories-groups").css('display', 'block');
    }else{
        $("#categories-groups").css('display', 'none');
    }
});

});
