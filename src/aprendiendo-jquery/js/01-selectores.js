// $(document).ready(function(){
//  console.log("Esta cargado")
// }); //Esta funge como evento y tambien puede hacer callback

$(document).ready(function(){
    //Selector de ID
    $("#rojo").css("background","red")
    .css("color", "white");
    
    $("#amarillo").css("background","yellow")
    .css("color", "green");

    $("#verde").css("background","green")
    .css("color", "white");

    //Selector de clases
    var mi_clase = $('.zebra').css("padding","5px");


    $('.sin_borde').click(function(){
        console.log("Click dado")
        $(this).addClass('zebra')
    })

    //Selecector de etiqueta
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);

        if(!that.hasClass('zebra')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    //Selectores de atirbuto
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    //Otros
    //$('p, a').addClass('margen-superior')
    //var busqueda = $('#caja').find('.resaltado');
    //var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
    var busqueda = $('#elemento2').parent().parent().find('.resaltado');
    console.log(busqueda);


});
