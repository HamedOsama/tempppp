// Shared cars data
const sampleCars = [
  { id: 1, name: 'Car Model 1', img: 'https://via.placeholder.com/400x300', price: '$100,000' },
  { id: 2, name: 'Car Model 2', img: 'https://via.placeholder.com/400x300', price: '$120,000' },
  { id: 3, name: 'Car Model 3', img: 'https://via.placeholder.com/400x300', price: '$130,000' }
];

// Render car cards
function renderCarList() {
  const container = document.getElementById('car-list');
  if (!container) return;

  container.innerHTML = '';
  sampleCars.forEach(car => {
    const isFav = isFavorite(car.id);
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-image">
        <img src="${car.img}" alt="${car.name}" />
        <button class="favorite-button ${isFav ? 'active' : ''}" onclick="toggleFavorite(${car.id})">
          <i class="ri-heart-line"></i>
        </button>
      </div>
      <div class="car-details">
        <h3>${car.name}</h3>
        <p class="car-meta">2023 • Premium Sedan</p>
        <div class="car-price"><span>${car.price}</span></div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Toggle favorites
function toggleFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderCarList();
  renderFavorites();
}

// Check if car is favorite
function isFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.includes(id);
}

// Render favorites
function renderFavorites() {
  const container = document.getElementById('favorites-container');
  if (!container) return;
  const noFavorites = document.getElementById('no-favorites');

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const cars = sampleCars.filter(car => favorites.includes(car.id));

  container.innerHTML = '<h2>Your Favorite Cars</h2>';
  if (cars.length === 0) {
    noFavorites.style.display = 'block';
    return;
  }
  noFavorites.style.display = 'none';

  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-image"><img src="${car.img}" alt="${car.name}" /></div>
      <div class="car-details">
        <h3>${car.name}</h3>
        <p class="car-meta">2023 • Premium Sedan</p>
        <div class="car-price"><span>${car.price}</span></div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Profile view setup
function setupProfileView() {
  const name = localStorage.getItem('profileName') || 'User';
  const username = localStorage.getItem('profileUsername') || '@username';
  const about = localStorage.getItem('profileAbout') || 'No about section.';
  const img = localStorage.getItem('profileImage');

  const nameEl = document.getElementById('profileName');
  const usernameEl = document.getElementById('profileUsername');
  const aboutEl = document.getElementById('profileAbout');
  const avatarEl = document.getElementById('avatarDisplay');

  if (nameEl) nameEl.textContent = name;
  if (usernameEl) usernameEl.textContent = username;
  if (aboutEl) aboutEl.textContent = about;
  if (avatarEl && img) {
    avatarEl.style.backgroundImage = `url(${img})`;
    avatarEl.textContent = '';
  }
}

// Profile edit setup
function setupEditForm() {
  const fullName = (localStorage.getItem('profileName') || '').split(' ');
  document.getElementById('firstNameInput').value = fullName[0] || '';
  document.getElementById('surnameInput').value = fullName[1] || '';
  document.getElementById('usernameInput').value = localStorage.getItem('profileUsername') || '';
  document.getElementById('aboutInput').value = localStorage.getItem('profileAbout') || '';
  const avatar = document.getElementById('avatarPreview');
  const img = localStorage.getItem('profileImage');
  if (img && avatar) {
    avatar.style.backgroundImage = `url(${img})`;
    avatar.textContent = '';
  }

  const changeBtn = document.getElementById('changePhotoBtn');
  const imageInput = document.getElementById('imageUpload');
  changeBtn.addEventListener('click', () => imageInput.click());

  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        avatar.style.backgroundImage = `url(${e.target.result})`;
        avatar.textContent = '';
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('saveChanges').addEventListener('click', () => {
    const name = document.getElementById('firstNameInput').value;
    const surname = document.getElementById('surnameInput').value;
    const username = document.getElementById('usernameInput').value;
    const about = document.getElementById('aboutInput').value;

    localStorage.setItem('profileName', `${name} ${surname}`);
    localStorage.setItem('profileUsername', username);
    localStorage.setItem('profileAbout', about);

    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        localStorage.setItem('profileImage', e.target.result);
        window.location.href = 'profileview.html';
      };
      reader.readAsDataURL(file);
    } else {
      window.location.href = 'profileview.html';
    }
  });
}

// Toggle favorites view
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('car-list')) renderCarList();
  if (document.getElementById('favorites-container')) renderFavorites();
  if (document.getElementById('profileName')) setupProfileView();
  if (document.getElementById('saveChanges')) setupEditForm();

  const toggleBtn = document.getElementById('toggle-favorites');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const favs = document.getElementById('favorites-container');
      if (favs) favs.style.display = favs.style.display === 'none' ? 'block' : 'none';
    });
  }
});

