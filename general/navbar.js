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
const profileBtn = document.querySelectorAll('.profile-btn');
const loginBtn = document.querySelectorAll('.login-btn');

if (currentUser) {
  profileBtn.forEach(btn => btn.classList.remove('hidden'));
  loginBtn.forEach(btn => btn.classList.add('hidden'));
} else {
  loginBtn.forEach(btn => btn.classList.remove('hidden'));
  profileBtn.forEach(btn => btn.classList.add('hidden'));
}
