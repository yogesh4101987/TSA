var winWidth = $(window).width();

$(document).ready(function () { 
    productSelectList()
});

$(window).resize(function () {  
    productSelectList()
});




function productSelectList(){
    $('.select-dropdown__button').on('click', function(){
        $('.select-dropdown__list').toggleClass('active');
    });
    $('.select-dropdown__list-item').on('click', function(){
        var itemValue = $(this).data('value');
        console.log(itemValue);
        $('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown__list').toggleClass('active');
    });
}