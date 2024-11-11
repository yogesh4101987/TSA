var winWidth = $(window).width();

$(document).ready(function () { 
    productSelectList()
});

$(window).resize(function () {  
    productSelectList()
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