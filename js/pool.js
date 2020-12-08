         $(window).on('load',function () {
                 
                $(".loading-overlay .spinner").fadeOut(1000,function () {
                 $(this).parent().fadeOut(2000,function () {
                   // body...
                 
                  $("body").css("overflow","auto");
             
               });
                });
                });
  //          $(function() {
  //   //$("html").niceScroll({cursorcolor:"", });
  //   $("html").niceScroll({cursorcolor:"#28a745",cursorwidth:"10px",cursorheight:"50px",cursorborder:"2px solid black",scrollspeed:"60",margintop:"200px",zindex:"10000"});
  //   // $("html").niceScroll({cursorcolor:"lightblue",scrollspeed:"100",cursorborder:"1px solid gray"});

  
  

  
  // });
   
  

           // animation wow
       new WOW().init();

    
       

// start button change color
    $(document).ready(function(){
            
           $('.but1').click(function(){
               
              $("body").addClass('but1') ;
               
           });
            $('.but2').click(function(){
               
              $("body").removeClass('but1') ;
               
           }); 
        
        });


 $(window).on('load',function () {
                 
                $(".loading-overlay .loader").fadeOut(100,function () {
                 $(this).parent().fadeOut(100,function () {
                   // body...
                 
                  $("body").css("overflow","auto");
             
               });
                });
                });

