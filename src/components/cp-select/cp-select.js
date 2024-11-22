var winWidth = $(window).width();

$(document).ready(function () { 
    productSelectList()
    selectDropdown()
});

$(window).resize(function () {  
    productSelectList()
    selectDropdown()
});




function productSelectList(){
    $('.select-dropdown-button').on('click', function(){
        $('.select-dropdown-list').toggleClass('active');
    });
    $('.select-dropdown-list-item').on('click', function(){
        var itemValue = $(this).data('value');
        console.log(itemValue);
        $('.select-dropdown-button span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown-list').toggleClass('active');
    });
}


function selectDropdown(){
    if ($('.bs-radio').length >= 4) {
        // Show cp-select if bs-radio elements are more than 4
        $('.cp-select.typ-pdp').show();
        $('.radio-wrap').hide();
      }
      else{
        $('.cp-select.typ-pdp').hide();
      }
}