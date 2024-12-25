
$(document).ready(function () {
    breadcrumb();
  });

function breadcrumb (){
    $('.cp-breadcrumb li a.breadcrumb-link').click(function(e) {
        e.preventDefault();
        $('.cp-breadcrumb li a.breadcrumb-link').removeClass('active'); 
        $(this).addClass('active'); 
      });
  
}