var winWidth = $(window).width();

$(document).ready(function () { 
    progress_bar()
});

$(window).resize(function () {  
    progress_bar()
});


function progress_bar() {
	var speed = 30;
	var items = $('.cp-progress-bar').find('.cp-progress-bar-item');
	
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item-value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}