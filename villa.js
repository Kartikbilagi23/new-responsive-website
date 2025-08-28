let currentSlide = 0;
const slides = document.querySelectorAll(".slide-img");
const targettext = document.querySelector(".display-text h2");
const spantext=document.querySelector(".display-text span");
const targetadd = document.querySelector(".display-text span em");
const dots=document.querySelectorAll(".dots button")
let slidetext = [
  "HURRY! GET THE BEST VILLA FOR YOU!",
  "EXPERIENCE LUXURY LIKE NEVER BEFORE",
  "FIND YOUR DREAM HOME TODAY"
]
let slideadd = [{
  span: "Toronto",
  em: "Canada"
},
{
  span: "Paris",
  em: "France"
},
{
  span: "Dubai",
  em: "UAE"
}]
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
  targettext.textContent = slidetext[index];
  spantext.childNodes[0].textContent=slideadd[index].span+",";
  targetadd.textContent=slideadd[index].em;

dots.forEach((dot,i)=>{
dot.style.backgroundColor=(i==index)?"Orange":"white";
})
  }

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const detailsSection = document.querySelector('.details-section');
    
    const offset = detailsSection.offsetTop;

    if (window.scrollY > offset) {
      detailsSection.classList.add('sticky');
      navbar.classList.add('hidden');
    } else {
      detailsSection.classList.remove('sticky');
      navbar.classList.remove('hidden');
    }
  })
// Show first slide initially
showSlide(currentSlide);
