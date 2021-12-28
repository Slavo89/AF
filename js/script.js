 $(document).ready(function () {


            $('.carousel').slick({
              infinite: true,
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: false,
                slidesToShow: 3,
              slidesToScroll: 2,
              centerMode: true,
              zIndex: 1,
                responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
        
      }
    }
    
  ]
            });


        });
        