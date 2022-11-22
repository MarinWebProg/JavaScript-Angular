$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: false,
      });

      //Post con momentjs
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
      
      //Selector de temas
      var theme = $("#theme");
      
      $("#to-green")

});


