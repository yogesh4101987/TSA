
$(document).ready(function () {
    breadcrum();
  });

function breadcrum (){
    $('.cp-breadcrum li a').click(function(e) {
        e.preventDefault();
        $('.cp-breadcrum li a').removeClass('active'); 
        $(this).addClass('active'); 
      });
  
}