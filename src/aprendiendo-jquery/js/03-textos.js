// $(document).ready(function(){
//     alert("AHH!");
// })

$(document).ready(function(){

    console.log($('a').length) 

    //Para añadir links
   
        // console.log($('#add_link').val())
        //html: para agreagar al doc, 
        // append para agregarlo, 
        // prepend agregarlo al primero de la lista
        // before agregarlo antes

        reloadLinks();

	$('#add_button')
		.removeAttr('disabled')
		.click(function(){
			$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');

			$("#add_link").val('');
			reloadLinks();
		});

        



});

function reloadLinks(){
    $('a').each(function(index){
        //$(this).attr("href");
        var that = $(this)
        var enlace = $(this).attr("href")
        
        that.attr('target','_blank');

		that.text(enlace);
     });
}