// Theme 
let theme = localStorage.getItem('theme')

if (theme == null) {
  setTheme('light')
}else{
  setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode
    console.log('Option clicked: ' + mode)
    setTheme(mode)
  })
}

function setTheme(mode){
  if(mode == 'light'){
    document.getElementById('theme-style').href = 'styles/main.css'
  }
  if(mode == 'dark'){
    document.getElementById('theme-style').href = 'styles/dark-mode.css'
  }
  localStorage.setItem('theme', mode)
}



carouselModule.configure()
let width = 256
const carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size)
carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
  carouselSlide.style.transition = 'transform .4s ease-in-out';
  counter ++;
  console.log(counter)
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

