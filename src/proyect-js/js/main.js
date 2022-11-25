$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1){
      $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          pager: false,
        });
    }

      //Post con momentjs
      if(window.location.href.indexOf('index') > -1){
        var posts =[
          {
              title: 'Prueba de titulo 1',
              date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+" del "+moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies posuere ante, ut semper magna faucibus et. Vivamus ut hendrerit odio. Vivamus quis ante hendrerit, faucibus sem id, blandit dolor. Vestibulum dolor urna, interdum quis dictum vel, efficitur ac tortor. Sed consectetur dui ut neque malesuada luctus. Sed congue odio a accumsan fringilla. Proin nec nunc quam. Nunc cursus lorem nibh, in tristique arcu tincidunt nec. Vivamus ornare malesuada ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet commodo ligula, eget malesuada odio sollicitudin vitae.'
        
          },
          {
              title: 'Prueba de titulo 2',
              date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+" del "+moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies posuere ante, ut semper magna faucibus et. Vivamus ut hendrerit odio. Vivamus quis ante hendrerit, faucibus sem id, blandit dolor. Vestibulum dolor urna, interdum quis dictum vel, efficitur ac tortor. Sed consectetur dui ut neque malesuada luctus. Sed congue odio a accumsan fringilla. Proin nec nunc quam. Nunc cursus lorem nibh, in tristique arcu tincidunt nec. Vivamus ornare malesuada ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet commodo ligula, eget malesuada odio sollicitudin vitae.'
        
          },
          {
              title: 'Prueba de titulo 3',
              date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+" del "+moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies posuere ante, ut semper magna faucibus et. Vivamus ut hendrerit odio. Vivamus quis ante hendrerit, faucibus sem id, blandit dolor. Vestibulum dolor urna, interdum quis dictum vel, efficitur ac tortor. Sed consectetur dui ut neque malesuada luctus. Sed congue odio a accumsan fringilla. Proin nec nunc quam. Nunc cursus lorem nibh, in tristique arcu tincidunt nec. Vivamus ornare malesuada ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet commodo ligula, eget malesuada odio sollicitudin vitae.'
        
          },
          {
              title: 'Prueba de titulo 4',
              date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+" del "+moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies posuere ante, ut semper magna faucibus et. Vivamus ut hendrerit odio. Vivamus quis ante hendrerit, faucibus sem id, blandit dolor. Vestibulum dolor urna, interdum quis dictum vel, efficitur ac tortor. Sed consectetur dui ut neque malesuada luctus. Sed congue odio a accumsan fringilla. Proin nec nunc quam. Nunc cursus lorem nibh, in tristique arcu tincidunt nec. Vivamus ornare malesuada ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet commodo ligula, eget malesuada odio sollicitudin vitae.'
        
          },
          {
              title: 'Prueba de titulo 5',
              date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+" del "+moment().format("YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies posuere ante, ut semper magna faucibus et. Vivamus ut hendrerit odio. Vivamus quis ante hendrerit, faucibus sem id, blandit dolor. Vestibulum dolor urna, interdum quis dictum vel, efficitur ac tortor. Sed consectetur dui ut neque malesuada luctus. Sed congue odio a accumsan fringilla. Proin nec nunc quam. Nunc cursus lorem nibh, in tristique arcu tincidunt nec. Vivamus ornare malesuada ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet commodo ligula, eget malesuada odio sollicitudin vitae.'
        
          },
        ]
        
        posts.forEach((item, index) =>{
          var post1= `
          <article class="post">
              <h2>${item.title}</h2>
                   <span class="date">${item.date}</span>
                      <p>
                          ${item.content}
                      </p>
                      <a href="#" class="button-more">Leer más</a>
          </article>
          `;
        
          $("#posts").append(post1);
        
        });      
      }

      //Selector de temas
      var theme = $("#theme");
      
      $("#to-green").click(function(){
        theme.attr("href","css/green.css")
      });

      $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
      });

      $("#to-red").click(function(){
        theme.attr("href","css/red.css")
      });

      //Scroll automatico animado y suavizado hacia arriba
      $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
      });

      //Login Falso
      $("#login form").submit(function(){
            var form_name = $("#form_name", form_name).val();
            localStorage.setItem("form_name", form_name);
            console.log(form_name);
      });

      var form_name = localStorage.getItem("form_name");

      if(form_name != null && form_name != "undefined"){
         var about_parrafo = $("#about p");

          about_parrafo.html("<br><strong>Bienvenido tu: "+form_name+"</strong>");
          about_parrafo.append("<a href = '#' id = 'logout'>Cerrar sesion :C </a>");

          $("#login").hide();

          $("#logout").click(function(){
            localStorage.clear();
            location.reload();
          });
        }

        //
        if(window.location.href.indexOf('about')> -1){
          $("#acordeon").accordion();
        }

});


