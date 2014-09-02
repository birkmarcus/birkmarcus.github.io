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



// $("#knapBund").click(function () {
//         if($('#knapBund').hasClass('activeKnap')) {
//             $('#knapBund').removeClass('activeKnap');   
//         } else {
//             $('#knapBund').addClass('activeKnap');
//         }
//     });

// $("#knapVenstre").click(function () {file:///Users/Bruger/Dropbox/Older%20v2/Js-fiddle/index.html
//         if($('#knapVenstre').hasClass('activeKnap')) {
//             $('#knapVenstre').removeClass('activeKnap');   
//         } else {
//             $('#knapVenstre').addClass('activeKnap');
//         }
//     });

// $("#knapHojre").click(function () {
//         if($('#knapHojre').hasClass('activeKnap')) {
//             $('#knapHojre').removeClass('activeKnap');   
//         } else {
//             $('#knapHojre').addClass('activeKnap');
//         }
//     });


    //BXSlider
$('.bxslider').bxSlider({});
});






  

//Z-index

  maxZ = $('div:last').css("zIndex");
$("#knapTop").click(function()
    {
        maxZ++;
      $('#BusyBox1').css('z-index',maxZ);           
    }
);
  

   maxZ = $('div:last').css("zIndex");
$("#knapBund").click(function()
    {
        maxZ++;
      $('#BusyBox2').css('z-index',maxZ);           
    }
);  

     maxZ = $('div:last').css("zIndex");
$("#knapVenstre").click(function()
    {
        maxZ++;
      $('#BusyBox3').css('z-index',maxZ);           
    }
);
    maxZ = $('div:last').css("zIndex");
$("#knapHojre").click(function()
    {
        maxZ++;
      $('#BusyBox4').css('z-index',maxZ);           
    }
);


