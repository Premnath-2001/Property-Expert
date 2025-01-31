const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}
const propertyImage = document.getElementById('#propertyImage');
const popupBox = document.getElementById('popupBox');
const closePopup = document.getElementById('closePopup');
const overlay = document.getElementById('#overlay');

// Show the popup box when the image is clicked
propertyImage.addEventListener('click', () => {
  popupBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Hide the popup box and overlay when the close button is clicked
closePopup.addEventListener('click', () => {
  popupBox.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Hide the popup box and overlay when clicking outside the popup box
overlay.addEventListener('click', () => {
  popupBox.classList.add('hidden');
  overlay.classList.add('hidden');
});

function p(){
  document.querySelector('#popupBox').style.display='block';
}
function P(){
  document.querySelector('#popupBox').style.display='none';
}
function q(){
  document.querySelector('#popupBox1').style.display='block';
}
function Q(){
  document.querySelector('#popupBox1').style.display='none';
}
function r(){
  document.querySelector('#popupBox2').style.display='block';
}
function R(){
  document.querySelector('#popupBox2').style.display='none';
}
function s(){
  document.querySelector('#popupBox3').style.display='block';
}
function S(){
  document.querySelector('#popupBox3').style.display='none';
}
function t(){
  document.querySelector('#popupBox4').style.display='block';
}
function T(){
  document.querySelector('#popupBox4').style.display='none';
}
function u(){
  document.querySelector('#popupBox5').style.display='block';
}
function U(){
  document.querySelector('#popupBox5').style.display='none';
}
function v(){
  document.querySelector('#popupBox6').style.display='block';
}
function V(){
  document.querySelector('#popupBox6').style.display='none';
}
function w(){
  document.querySelector('#popupBox7').style.display='block';
}
function W(){
  document.querySelector('#popupBox7').style.display='none';
}