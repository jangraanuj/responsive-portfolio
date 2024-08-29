

// function carouselPrev() {
//   $('#carouselExampleFade1').carousel('prev');
//   $('.Carousel2').slick('slickPrev');
// }

// function carouselNext() {
//   $('#carouselExampleFade1').carousel('next');
//   $('.Carousel2').slick('slickNext');
// }



// $(document).ready(function(){
  
  
  
//       $('.raam').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//       });
     
//       // prevArrow: '  <span class="flow-arrow-side flow-arrow-left slick-arrow custom3-prev bg-warning"><img class="svg-icon-5" src="arrow-left-circled.svg" width="40px" type="button"></span>',
//       // nextArrow: '<span class="flow-arrow-side flow-arrow-right slick-arrow custom4-next bg-warning"><img class="svg-icon-6" src="arrow-right-circle.svg" width="40px" type="button"></span>',
//       // appendArrows: '.carausel-3-columns-arrow-cover',

       
         

   
 
//   $('.raam').on('click', function() {
//     slick.slick('slickPrev');
//   });

//   // Next slide arrow event
//   $('.raam').on('click', function() {
//     slick.slick('slickNext');
//   });

//   $('.custom3-prev').on('click', function() {
//       $('.slick-slider').slick('slickPrev');
//   });

//   // Bind click event to custom next button
//   $('.custom4-next').on('click', function() {
//       $('.slick-slider').slick('slickNext');
//   });
// });



  // $(document).ready(function () {
  //   $('.carausel-3-columns').slick({
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });
  // });

  // $(document).ready(function(){
//     var slick = $('.raam').slick({
    
//          slidesToShow: 3,
//          slidesToScroll: 1,
//          infinite:true,
//          adaptiveHeight:true,
//          centerMode:true,
//          PrevArrow:'',
//          nextArrow:'',
         
           
// });
     
    // Previous slide arrow event
    // $('.raam').on('click', function() {
    //   slick.slick('slickPrev');
    // });

    // // Next slide arrow event
    // $('.raam').on('click', function() {
    //   slick.slick('slickNext');
    // });

    // $('.custom1-prev').on('click', function() {
    //     $('.raam').slick('slickPrev');
    // });

    // // Bind click event to custom next button
    // $('.custom1-next').on('click', function() {
    //     $('.raam').slick('slickNext');
    // });
  // });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $(document).ready(function(){
    $('.raam').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: 'raam-prev',
      nextArrow: 'raam-next',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      infinite: true,
      // centerMode: true,
      centerPadding: '10px',
      initialSlide: 0,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
          
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              
            }
          },
         
        ]
      

    });

    $('.raam').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          var totalSlides = slick.slideCount;
          if (currentSlide === totalSlides - 1 && nextSlide === 0) {
              $('.raam').slick('slickGoTo', 1); // Go to the second slide
              return false;
          }
      });



 

    $('.raam-prev').on('click', function() {
        $('.raam').slick('slickPrev');
    });

    // Bind click event to custom next button
    $('.raam-next').on('click', function() {
        $('.raam').slick('slickNext');
    });


  });




 


$(document).ready(function(){
  // Initialize Carousel1 slider
  var carousel1Slick = $('.carousel1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      loop:true,
      fade: true,
      adaptiveHeight: true,
      centerMode: true,
      prevArrow: false,
      nextArrow: false,
      asNavFor: '.mona'
  });

  // Initialize Mona slider
  var monaSlick = $('.mona').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      loop:true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      centerPadding: '5px',
      initialSlide: 0,
      arrows: false, // Hide arrows
      asNavFor: '.carousel1',

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
      

      
  });


  

  // Bind click event to custom button for navigation
  $('.custom9-prev').on('click', function() {
      carousel1Slick.slick('slickPrev');
      monaSlick.slick('slickPrev');
  });

  $('.custom9-next').on('click', function() {
      carousel1Slick.slick('slickNext');
      monaSlick.slick('slickNext');
  });
});



