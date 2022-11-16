 $(document).ready(function(){
    console.log("CARGADO");

    //.draggable() = Para arrastrar los elementos de la pagina
    $(".elemento").draggable();

    //redimensionar
    $(".elemento").resizable();

    //Seleccionar elementos
    //$(".lista-seleccionable").selectable();

    //Para ordenar
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Se cambio algo de la lista")
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo en el area");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        //$(".caja-efectos").toggle("fade");
        //$(".caja-efectos").effect("explode");
        //$(".caja-efectos").toggle("explode");
        //$(".caja-efectos").toggle("blind");
        //$(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("puff");
        // $(".caja-efectos").toggle("scale");
        // $(".caja-efectos").toggle("shake");
        // $(".caja-efectos").toggle("shake", "slow");
        // $(".caja-efectos").toggle("shake", 1000);
    });

    //Tooltip
    $(document).tooltip();

    //Dialogo
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    //DatePicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();

 });