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

   });
});