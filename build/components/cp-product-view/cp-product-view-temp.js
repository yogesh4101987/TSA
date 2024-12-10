Handlebars.registerHelper('eq', function (a, b) {
  return a === b;
});
const jsonUrl = 'http://localhost:8000/json/ProductDetails.json'; // JSON file URL

$(document).ready(function () {
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
      const html = template(data.data);

      // Append to swiper-wrapper
      $('#bestSellingProduct').html(html);
      $('#topSellingProduct').html(html);
  })
  .catch((error) => {
      console.error('Error:', error);
  });

});
