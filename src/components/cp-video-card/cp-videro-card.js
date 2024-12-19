var winWidth = $(window).width();
var swiper; // Declare swiper outside to reuse it

$(document).ready(function () { 
    realStoriesSlider();  
});

$(window).resize(function () {
  realStoriesSlider();
});

function realStoriesSlider() {
  if ($(window).width() < 768) {
    // Initialize Swiper only if it hasn't been initialized
    if (!swiper) {
      swiper = new Swiper(".js-real-stories", {
        slidesPerView: "auto",
        loop: true,
      });
    }
  } else {
    // Destroy Swiper if it exists and the window width is >= 769
    if (swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }
}
// import $ from "jquery";

// $(document).ready(function () {
//   hideYouTubePlayButton();

//     const players = {}; // Store YouTube player instances by iframe ID
//     let currentPlayer = null; // To track the currently playing video player

//     // Dynamically load the YouTube Iframe API script if not already loaded
//     if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
//         const tag = document.createElement("script");
//         tag.src = "https://www.youtube.com/iframe_api";
//         const firstScriptTag = document.getElementsByTagName("script")[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     }

//     // Function called when the YouTube Iframe API is ready
//     window.onYouTubePlayerAPIReady = function () {
//         console.log("YouTube API is ready");

//         // Initialize YouTube players for all dynamically generated iframe elements
//         $(".cmp-embed iframe").each(function () {
//             const iframeId = $(this).attr("id"); // Get the iframe's unique ID
//             if (iframeId) {
//                 players[iframeId] = new YT.Player(iframeId, {
//                     events: {
//                         onReady: function () {
//                             console.log(`Player for ${iframeId} is ready`);
//                         },
//                         onStateChange: function (event) {
//                             if (event.data === YT.PlayerState.PLAYING) {
//                                 // Hide the YouTube overlay and play button when video starts
//                                 $(".ytp-cued-thumbnail-overlay, .ytp-large-play-button").css("display", "none");
//                                 $(this).closest('.cmp-embed').find('.play-btn').hide(); // Hide play button when video starts
//                             }
//                             // Show play button when video ends or is paused
//                             else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
//                                 $(this).closest('.cmp-embed').find('.play-btn').show(); // Show play button
//                             }
//                         },
//                     },
//                     playerVars: {
//                         loop: 1, // Loop the video
//                         playlist: $(this).attr("id"), // This makes the video loop
//                     },
//                 });
//             } else {
//                 console.error("Missing iframe ID for a video");
//             }
//         });
//     };

//     // Handle the custom play button click
//     $(".play-btn").on("click", function () {
//         const videoId = $(this).closest('.cmp-embed').find('iframe').attr('id'); // Get the video ID dynamically from the iframe
//         const iframe = $("#" + videoId); // Get the corresponding iframe by ID

//         if (iframe.length) {
//             const iframeId = iframe.attr("id"); // Get the iframe's ID
//             if (iframeId && players[iframeId]) {
//                 // Stop the currently playing video if there is one
//                 if (currentPlayer && currentPlayer !== players[iframeId]) {
//                     currentPlayer.stopVideo(); // Stop the currently playing video
//                     console.log(`Stopped video with ID: ${currentPlayer.getIframe().id}`);
//                     $(currentPlayer.getIframe()).closest('.cmp-embed').find('.play-btn').show(); // Show the play button for the stopped video
//                 }

//                 // Play the selected video
//                 console.log(`Playing video with ID: ${iframeId}`);
//                 players[iframeId].playVideo(); // Play the video using the YouTube API

//                 // Set the current player to the selected video player
//                 currentPlayer = players[iframeId];

//                 // Hide YouTube overlay and play button immediately
//                 $(".ytp-cued-thumbnail-overlay, .ytp-large-play-button").css("display", "none");
//                 $(this).hide(); // Hide the custom play button
//             } else {
//                 console.error(`No player found for the selected video ID: ${iframeId}`);
//             }
//         } else {
//             console.error("No iframe found for video ID: " + videoId);
//         }
//     });
//     // Wait for the YouTube iframe to load
//     $(".cmp-embed iframe").on("load", function () {
//       const iframe = $(this).get(0).contentWindow.document;

//       // Hide YouTube's large play button dynamically
//       $(iframe).find(".ytp-large-play-button").css("display", "none");
//       $(iframe).find(".ytp-large-play-button-red-bg").css("display", "none");
//   });
// });


// const hideYouTubePlayButton = () => {
//   // Select the YouTube iframe container
//   $(".cmp-embed iframe").each(function () {
//       const iframe = $(this).get(0);
//       const iframeDocument = iframe.contentWindow.document;

//       // Mutation Observer to hide the play button
//       const observer = new MutationObserver((mutations) => {
//           mutations.forEach((mutation) => {
//               const button = iframeDocument.querySelector(".ytp-large-play-button");
//               if (button) {
//                   button.style.display = "none"; // Hide the button
//               }
//           });
//       });

//       // Start observing the YouTube iframe's DOM
//       observer.observe(iframeDocument.body, {
//           childList: true,
//           subtree: true,
//       });
//   });
// };


import $ from "jquery";

$(document).ready(function () {

    document.addEventListener("DOMContentLoaded", function () {
        const players = {}; // Store YouTube player instances by iframe ID
        let currentPlayer = null; // Track the currently playing player
    
        // Dynamically load the YouTube IFrame API script if not already loaded
        if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
            const scriptTag = document.createElement("script");
            scriptTag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(scriptTag);
        }
    
        // Function to initialize a YouTube player
        function initializeYouTubePlayer(iframe) {
            const videoId = extractVideoId(iframe.src); // Extract the video ID
            const iframeId = iframe.id || `youtube-player-${videoId}`;
    
            // Assign a unique ID to the iframe if it doesn't have one
            if (!iframe.id) iframe.id = iframeId;
    
            // Initialize the YouTube player
            players[iframeId] = new YT.Player(iframeId, {
                events: {
                    onStateChange: function (event) {
                        if (event.data === YT.PlayerState.PLAYING) {
                            // Stop the currently playing video if it's not the same
                            if (currentPlayer && currentPlayer !== players[iframeId]) {
                                currentPlayer.stopVideo();
                                console.log(`Stopped video with ID: ${currentPlayer.getIframe().id}`);
                            }
    
                            // Update the current player to the new one
                            currentPlayer = players[iframeId];
                        }
    
                        // Handle video stopping or pausing
                        if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                            if (currentPlayer === players[iframeId]) {
                                currentPlayer = null;
                                console.log(`Video with ID: ${iframeId} has stopped/paused.`);
                            }
                        }
                    },
                },
                playerVars: {
                    autoplay: 0, // Disable autoplay on load
                    controls: 1, // Show player controls
                    modestbranding: 1, // Minimal YouTube branding
                    loop: 1, // Loop the video
                    playlist: videoId, // Required for looping
                },
            });
        }
    
        // Function called when the YouTube IFrame API is ready
        window.onYouTubeIframeAPIReady = function () {
            console.log("YouTube API is ready");
    
            // Initialize YouTube players for all existing iframe elements
            document.querySelectorAll("iframe[src*='youtube.com/embed/']").forEach(initializeYouTubePlayer);
        };
    
        // Utility function to extract the video ID from the iframe's src URL
        function extractVideoId(src) {
            const regex = /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/;
            const match = src.match(regex);
            return match ? match[1] : null;
        }
    
        // MutationObserver to detect dynamically added iframes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === "IFRAME" && node.src.includes("youtube.com/embed/")) {
                        initializeYouTubePlayer(node); // Initialize the new iframe
                    }
                });
            });
        });
    
        // Start observing the document body for dynamically added iframes
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
    
});
