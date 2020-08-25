$(document).ready(function() {

  var owl = $('#slider1');
  owl.owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
      // ändrar antal som ska visas responsivt
      ,responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
  })

  var owl2 = $('#slider2');
  owl2.owlCarousel({
      items: 5,
      loop: true,
      margin: 70,
      autoplay: true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
      // ,autoWidth:true
      ,center: true
      // ändrar antal som ska visas responsivt
      ,responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
  })


})
