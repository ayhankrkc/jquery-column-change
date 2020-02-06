// active col class
$(document).ready(function(){
    $(".btn-active").click(function(){
        // col-4 
        $(".product").addClass("active__col4");
        $(".col-selector").removeClass("active__column");
        $(this).addClass("active__column");
      });
    $(".btn-active-default").click(function(){
         // col-3
      $(".product").removeClass("active__col4");
      $(".col-selector").removeClass("active__column");
        $(this).addClass("active__column");
    });
  });


