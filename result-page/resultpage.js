const setSearch = (key, value) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(key, value);
  window.location.search = urlParams.toString();
};
const getSearchValue = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

function searchCarsByModel(cars, query, filterType) {
  console.log('Search query:', query, 'Filter type:', filterType);
  return cars.filter(car => {
    const matchesSearch = !query || car.model.toLowerCase().includes(query.toLowerCase());
    const matchesType = !filterType || filterType === 'All Types' || car.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });
}

function toggleLocalStorageArray(key, item) {
  // Get existing array from localStorage or initialize an empty array
  let existing = JSON.parse(localStorage.getItem(key)) || [];

  // Check if item already exists
  const index = existing.indexOf(item);

  if (index > -1) {
    // If found, remove it
    existing.splice(index, 1);
  } else {
    // If not found, add it
    existing.push(item);
  }

  // Save updated array back to localStorage
  localStorage.setItem(key, JSON.stringify(existing));
}

function isFavorite(key, item) {
  const stored = localStorage.getItem(key);
  if (!stored) return false;

  try {
    const array = JSON.parse(stored);
    return Array.isArray(array) && array.includes(String(item));
  } catch (error) {
    console.error("Invalid JSON in localStorage for key:", key);
    return false;
  }
}

function createCarCard(car) {
  const card = document.createElement('div');
  card.className = 'car-card';
  card.innerHTML = `
    <div class="car-image">
      <img src="${car.resultImage}" alt="${car.model}">
      <button class="favorite-button ${isFavorite('favorites', car.id) ? 'active' : ''}" data-id="${car.id}">
        <i class="${isFavorite('favorites', car.id) ? "ri-heart-fill" : "ri-heart-line"}"></i>
      </button>
    </div>
    <div class="car-details">
      <div class="car-info">
        <h3>${car.model}</h3>
        <div class="rating">
          <i class="ri-star-fill"></i>
          <span>${car.rating}</span>
        </div>
      </div>
      <p class="car-meta">${car.year} • ${car.type}</p>
      <div class="car-features">
        <div><i class="ri-dashboard-3-line"></i><span>${car.mileage} mi</span></div>
        <div><i class="ri-gas-station-line"></i><span>${car.fuel}</span></div>
      </div>
      <div class="car-price">
        <span>$${car.price.toLocaleString()}</span>
        <a href=/car-specs/index.html?id=${car.id} class="details-button">View Details</a>
      </div>
    </div>
  `;
  return card;
}

document.addEventListener('DOMContentLoaded', function () {
  const resultContainer = document.querySelector('.results-container .car-cards');
  const resultHeader = document.querySelector('.results-header');
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');

  const currentSearchValue = getSearchValue('search');
  const currentFilterType = getSearchValue('type');

  // set search-input value from url (search params)
  searchInput.value = currentSearchValue;

  const searchResult = searchCarsByModel(cars, currentSearchValue, currentFilterType);
  searchResult.forEach(car => resultContainer.appendChild(createCarCard(car)));

  resultHeader.innerHTML = `${currentSearchValue ? currentSearchValue : 'All'} ${currentFilterType ? '• ' + currentFilterType : ''} (${searchResult.length} results)`;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setSearch('search', searchInput.value);
  });

  // View Toggle
  const gridViewBtn = document.getElementById('grid-view-btn');
  const listViewBtn = document.getElementById('list-view-btn');

  gridViewBtn.addEventListener('click', () => {
    resultContainer.classList.add('grid-view');
    resultContainer.classList.remove('list-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
  });

  listViewBtn.addEventListener('click', () => {
    resultContainer.classList.add('list-view');
    resultContainer.classList.remove('grid-view');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });

  // Filter Toggle
  const filterItems = document.querySelectorAll('.filter-item');

  // Set active class on current filter
  if (currentFilterType) {
    filterItems.forEach(item => {
      if (item.querySelector('span').textContent === currentFilterType) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  } else {
    filterItems.forEach(item => {
      item.classList.remove('active');
    });
    filterItems[0].classList.add('active');
  }

  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      const filterType = item.querySelector('span').textContent;
      // Apply filter, but keep the search term
      setSearch('type', filterType === 'All Types' ? '' : filterType);
    });
  });

  // Reset button functionality
  const resetButton = document.querySelector('.reset-button');
  resetButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Favorite Button Toggle
  const favoriteButtons = document.querySelectorAll('.favorite-button');
  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
      // JSON, window.localstorage
      const carId = button.dataset.id;
      if (carId) {
        toggleLocalStorageArray('favorites', carId)
      }
      button.classList.toggle('active');
      const icon = button.querySelector('i');
      if (icon.classList.contains('ri-heart-line')) {
        icon.classList.replace('ri-heart-line', 'ri-heart-fill');
      } else {
        icon.classList.replace('ri-heart-fill', 'ri-heart-line');
      }
    });
  });

});