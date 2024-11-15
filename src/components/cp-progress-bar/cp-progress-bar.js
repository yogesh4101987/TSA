var winWidth = $(window).width();

$(document).ready(function () { 
    progressBar()
});

$(window).resize(function () {  
    progressBar()
});


function progressBar() {
	var speed = 30;
	var items = $('.cp-progress-bar').find('.progress-bar-item');
	
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