/**
 * Car Specifications Page Script
 * Handles car data and interactive elements for car specifications display
 */

// DOM Elements
const buttons = document.querySelectorAll('.car-button');
const carTitle = document.querySelector('.car-title');
const specs = document.querySelector('.specs');
const dynamicContentLeft = document.querySelector('.dynamic-content-left');
const dynamicImageLeft = document.getElementById('dynamic-image-left');
const dynamicTextLeft = document.getElementById('dynamic-text-left');
const dynamicHeaderLeft = document.getElementById('dynamic-header-left');
const componentData = {}

// Animation timing constants
const FADE_DURATION = 500; // ms
const ANIMATION_DELAY = 0; // ms

/**
 * Extract car ID from URL parameters
 * @returns {string|null} Car ID or null if not found
 */
function getCarIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Extract search parameters from URL
 * @returns {Object} Object containing all search parameters
 */
function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  const searchParams = {};
  
  // Get all params except 'id'
  for (const [key, value] of params.entries()) {
    if (key !== 'id') {
      searchParams[key] = value;
    }
  }
  
  return searchParams;
}

/**
 * Handle back button navigation
 * Preserves any search parameters to maintain filter state
 */
function handleBackButton() {
  // Get current search parameters
  const searchParams = getSearchParams();
  
  // Create URL with search parameters
  let url = '../result-page/index.html';
  if (Object.keys(searchParams).length > 0) {
    const queryString = new URLSearchParams(searchParams).toString();
    url = `${url}?${queryString}`;
  }
  
  // Navigate back to results page with preserved parameters
  window.location.href = url;
}

function updateMetaTags(car) {
  document.title = `${car.model} - Carify`;
  const metaTags = document.querySelectorAll('meta[name="description"]');
  metaTags.forEach(meta => {
    meta.content = `Explore the ${car.model} car specifications and features.`;
  });
}

/**
 * Initialize car data from URL parameter
 */
function initializeCarData() {
  const carId = getCarIdFromUrl();
  // Fallback for testing if cars is not defined or car ID not found
  if (typeof cars === 'undefined') {
    console.warn('Car data not available. Loading default values.');
    return;
  }


  const selectedCar = cars.find(car => String(car.id) === String(carId));
  if (!selectedCar) {
    console.warn('Car ID not found in URL or invalid. Using default values.');
    return;
  }

  // Update car information in the DOM
  carTitle.textContent = selectedCar.model || 'Car Model';
  document.querySelector('.car_speed').textContent = selectedCar.acceleration || 'N/A';
  document.querySelector('.horse-power').textContent = selectedCar.power || 'N/A';
  document.querySelector('.cc_num').textContent = selectedCar.cc || 'N/A';

  // Update car image if available
  const carImg = document.querySelector('.car-image');
  if (carImg && selectedCar.specsImage) {
    carImg.src = selectedCar.specsImage;
    carImg.alt = selectedCar.model || 'Car Image';
  }

  // Update component data
  componentData.engine = selectedCar.engine;
  componentData.interior = selectedCar.interior;
  componentData.wheels = selectedCar.wheels;
  componentData.exterior = selectedCar.exterior;

  updateMetaTags(selectedCar);
}


/**
 * Update dynamic content section with component data
 * @param {Object} data - Component data to display
 */
function updateDynamicContent(data) {
  // Hide current content
  carTitle.style.animation = 'none';
  carTitle.style.display = 'none';
  specs.style.animation = 'none';
  specs.style.display = 'none';

  setTimeout(() => {
    // Update dynamic content
    dynamicHeaderLeft.textContent = data.title;
    dynamicImageLeft.src = data.image;
    dynamicTextLeft.textContent = data.text;

    // Show the dynamic content container
    dynamicContentLeft.style.display = 'flex';

    // Reset animations
    resetAnimations();

    // Apply animations with delay
    setTimeout(() => {
      dynamicHeaderLeft.style.animation = 'slideInBottom 0.5s ease-in-out forwards';
      dynamicImageLeft.style.animation = 'zoomIn 0.5s ease-in-out forwards';
      dynamicTextLeft.style.animation = 'slideInBottom 0.5s ease-in-out forwards';
    }, ANIMATION_DELAY);
  }, FADE_DURATION);
}

/**
 * Reset animations by triggering reflow
 */
function resetAnimations() {
  dynamicHeaderLeft.style.animation = 'none';
  dynamicImageLeft.style.animation = 'none';
  dynamicTextLeft.style.animation = 'none';

  // Trigger reflow
  void dynamicHeaderLeft.offsetWidth;
  void dynamicImageLeft.offsetWidth;
  void dynamicTextLeft.offsetWidth;
}

/**
 * Reset to default left section view
 */
function resetLeftSection() {
  dynamicContentLeft.classList.add('hidden');

  setTimeout(() => {
    dynamicContentLeft.style.display = 'none';
    carTitle.style.display = 'block';
    carTitle.classList.remove('hidden');
    specs.style.display = 'block';
    specs.classList.remove('hidden');
  }, FADE_DURATION);
}

/**
 * Update back button href with preserved search parameters
 */
function updateBackButtonHref() {
  const backButton = document.getElementById('back-button');
  if (backButton) {
    // Get search parameters from URL
    const searchParams = getSearchParams();
    
    // Create URL with search parameters
    let url = '../result-page/index.html';
    if (Object.keys(searchParams).length > 0) {
      const queryString = new URLSearchParams(searchParams).toString();
      url = `${url}?${queryString}`;
    }
    
    // Update back button href
    backButton.href = url;
  }
}

// Initialize event listeners
function initEventListeners() {
  // Car component buttons
  buttons.forEach(button => {
    const componentType = button.classList[1].split('-')[0]; // Extract component type from class
    const data = componentData[componentType];
    // update button location
    button.style.top = data.top;
    button.style.left = data.left;
    button.addEventListener('click', () => {
      if (data) {
        updateDynamicContent(data);
      }
    });
  });
  
  // Add back button functionality
  const backButton = document.getElementById('back-button');
  if (backButton) {
    backButton.addEventListener('click', handleBackButton);
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  initializeCarData();
  updateBackButtonHref();
  initEventListeners();
});