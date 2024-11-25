const jsonUrl = 'http://localhost:8000/json/architectDetails.json';
let swiperArchitectInstance; // Global variable for Swiper instance

$(document).ready(function () {
  architectHandler();
});

$(window).resize(function () {
  architectHandler();
});

function architectHandler() {
  fetch(jsonUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Fetched data:', data);

    // Compile the Handlebars template
    const source = $('#architectTemp').html();
    const template = Handlebars.compile(source);

    // Generate the HTML from the template and data
    const html = template(data);

    // Append the generated HTML to the container
    $('#architectDetails').html(html);

    // Initialize Swiper after rendering
    architectSlider();
    tabFunction();
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}

function architectSlider() {
  // If the swiperArchitectInstance already exists, destroy it before initializing a new one
  if (swiperArchitectInstance) {
    swiperArchitectInstance.destroy(true, true); // Destroy previous instance
  }

  // Initialize Swiper and assign it to the global swiperArchitectInstance
  swiperArchitectInstance = new Swiper(".js-architect", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  alert()
}
