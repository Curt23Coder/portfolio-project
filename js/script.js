  $(document).ready(function(){
  $(".img-1").mouseover(function(){
  $(".github-hover1").animate({
   opacity: "1"
   });
});
   $(".img-1").mouseover(function(){
   $(this).animate({
   opacity: 0.7
   });
   });
   $(".img-1").mouseleave(function(){
    $(this).animate({
    opacity: 1
    });
    });
    $(".img-2").mouseover(function(){
        $(this).animate({
        opacity: 0.7
        });
        });
        $(".img-2").mouseleave(function(){
         $(this).animate({
         opacity: 1
         });
         });
         $(".img-3").mouseover(function(){
            $(this).animate({
            opacity: 0.7
            });
            });
            $(".img-3").mouseleave(function(){
             $(this).animate({
             opacity: 1
             });
             });
   $(".img-1").mouseleave(function(){
    $(".github-hover1").animate({
    opacity: "0"
    });
    
   });
   });
    $(".img-2").mouseover(function(){
    $(".github-hover2").animate({
    opacity: "1"
    });
    });
    $(".img-2").mouseleave(function(){
    $(".github-hover2").animate({
     opacity: "0"
    });
    });
    $(".img-3").mouseover(function(){
    $(".github-hover3").animate({
      opacity: "1"
     });
     });
     $(".img-3").mouseleave(function(){
     $(".github-hover3").animate({
     opacity: "0"
     });
     });
    $(document).ready(function(){
     $(".img-1").click(function(){
     $(".github-hover1").animate({
      opacity: "1"
      });
      });
      $(".img-2").click(function(){
      $(".github-hover2").animate({
        opacity: "1"
       });
       });
      $(".img-3").click(function(){
      $(".github-hover3").animate({
        opacity: "0"
        });
        });
        });
