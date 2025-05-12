function toggleDropdown() {
  const dropdown = document.getElementById("carDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Optional: Close dropdown when clicking outside
window.addEventListener("click", function (e) {
  if (!e.target.matches('.car > a')) {
    const dropdown = document.getElementById("carDropdown");
    if (dropdown) dropdown.style.display = "none";
  }

  if (!e.target.closest('.side-bar-container')) {
    const mobileSideBar = document.querySelector('.mobile-side-bar');
    mobileSideBar.classList.remove('active');
  }
});

function openMobileSideBar() {
  const mobileSideBar = document.querySelector('.mobile-side-bar');
  mobileSideBar.classList.add('active');
}

function closeMobileSideBar() {
  const mobileSideBar = document.querySelector('.mobile-side-bar');
  mobileSideBar.classList.remove('active');
}


const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const profileBtn = document.querySelector('.profile-btn');
const loginBtn = document.querySelector('.login-btn');

if (currentUser) {
  profileBtn.classList.remove('hidden');
  loginBtn.classList.add('hidden');
} else {
  loginBtn.classList.remove('hidden');
  profileBtn.classList.add('hidden');
}
