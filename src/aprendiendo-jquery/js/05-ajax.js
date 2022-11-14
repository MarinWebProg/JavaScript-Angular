// $(document).ready(function(){
//     alert("AHH!");
// })

$(document).ready(function(){
   //LOAD - llamar una url por medio de get
   //$("#datos").load("https://reqres.in/");

   //GET y POST
   //get - para obtener la info
   $.get("https://reqres.in/api/users", {page:2}, function(response){
    response.data.forEach((element,index) =>{
        $("#datos").append("<p>"+element.first_name+ " "+element.last_name+"</p>")
    });

    
    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            // name: "pepe",
            // web:"unaweb.com"
            name: $('input[name="name"]').val(),
            web:$('input[web="web"]').val()
        };
        console.log(usuario);

        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario Registrado");
        });

        // $.ajax({
        //     type:'POST',
        //     dataType:'json',
        //     contentType:'application/json'
        // })

        $.ajax({
            type:'POST',
            URL: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error:function(){
                console.log("A ocurrido un erro")
            }


        });

        return false;

    });

   });
});