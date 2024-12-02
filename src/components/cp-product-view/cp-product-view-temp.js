const jsonUrl = 'http://localhost:8000/json/TopDealProduct.json'; // JSON file URL
Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
});

Handlebars.registerHelper('renderStars', function (rating) {
    let stars = '';
    // Add active stars based on rating
    for (let i = 1; i <= 5; i++) {
        stars += `<li class="rating-item">
                    <span class="icon icon-star ${i <= rating ? 'active' : ''}"></span>
                  </li>`;
    }
    return new Handlebars.SafeString(stars); // Return safe HTML
});
  
$(document).ready(function () {
    bestSellingHandlebars();
});
$(window).resize(function () {  
    bestSellingSlider();
});

function bestSellingHandlebars(){
    fetch(jsonUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Fetched data:', data);
        
        const source = $('#productSellingTemp').html();
        const template = Handlebars.compile(source);
        const html = template(data);
  
        // Append to swiper-wrapper
        $('#bestSellingProduct').html(html);
        $('#topSellingProduct').html(html);
        bestSellingSlider()
    })
    .catch((error) => {
        console.error('Error:', error);
    }); 
}