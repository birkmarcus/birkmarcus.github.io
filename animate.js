//BusyBox slide sider

$(document).ready(function () {


    $("#knapTop").click(function () {
        $('#BusyBox1').toggleClass('active');
        $(this).toggleClass('activeKnap');        
    });

    $("#knapBund").click(function () {
        $('#BusyBox2').toggleClass('active');
        $(this).toggleClass('activeKnap');
    });

    $("#knapVenstre").click(function () {
        $('#BusyBox3').toggleClass('active');
        $(this).toggleClass('activeKnap');
    });

    $("#knapHojre").click(function () {
        $('#BusyBox4').toggleClass('active');
        $(this).toggleClass('activeKnap');
    });


    $("#knapVenstre").click(function () {
        $('#BusyBox4').removeClass('active');
        $("#knapHojre").removeClass('activeKnap');
    });

    $("#knapHojre").click(function () {
        $('#BusyBox3').removeClass('active');
        $("#knapVenstre").removeClass('activeKnap');
    });


$('.bxslider').bxSlider({});






  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.sliderImageFull').css('height', windowHeight+'px');
    $('.sliderImage').css('background-size', 'auto '+windowHeight/2+'px');
    $('.sliderImageFull img').css('height', windowHeight+'px');
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
});


//height

// function autoHeight() {
//     var winHeight = $(window).height();
//     $(".sliderImage").css({'height':varHeight});
// }


