document.querySelector("#tombol1").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
document.querySelector("#tombol2").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
document.querySelector("#tombol3").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
document.querySelector(".tombol2").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
const hamburger = document.querySelector('.hamburger');
const agustus = document.querySelector('.agustus');

hamburger.addEventListener('click', () => {
  agustus.classList.toggle('active');
});