
$(document).ready(function () {
    breadcrum();
  });

function breadcrum (){
    $('.cp-breadcrum li a.breadcrum-link').click(function(e) {
        e.preventDefault();
        $('.cp-breadcrum li a.breadcrum-link').removeClass('active'); 
        $(this).addClass('active'); 
      });
  
}