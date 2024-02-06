// _common_thumparallax__WEBPACK_IMPORTED_MODULE_3__.js

// Import any necessary dependencies or libraries

// Define the thumparallax function
export const thumparallax = () => {
  // Check if the simpleParallax library is loaded
  if (typeof simpleParallax !== "undefined") {
    var imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp.length > 0) {
      try {
        new simpleParallax(imageUp, {
          delay: 1,
          scale: 1.1,
        });
      } catch (error) {
        console.error("Error initializing simpleParallax:", error);
      }
    } else {
      console.warn("No elements with class 'thumparallax' found.");
    }
  } else {
    console.warn("simpleParallax is not defined. Retrying after 100 milliseconds.");
    setTimeout(thumparallax, 100); // Retry after 100 milliseconds
  }
};

// Define the thumparallaxDown function
export const thumparallaxDown = () => {
  // Similar to the thumparallax function above, handle the simpleParallax library loading and initialization
  // Add your implementation here
  console.log('thumparallaxDown function called');
};
