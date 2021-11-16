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

// No need
function showDescription(){
  const showD = document.querySelector('.show-description')
  showD.classList.toggle('active')
}


// Modal in Works section
// works1
// variables
const open1 = document.getElementById('modalOpen1')
const modal1 = document.getElementById('modalContent1')
const close1 = document.getElementById('modalClose1')
const modalCover1 = document.getElementById('modalCover1')
// When thumnails was clicked
open1.addEventListener('click', () => {
  modal1.style.display = 'block';
  modalCover1.style.display = 'block';
  
});
// When x was clicked
close1.addEventListener('click', () => {
  modal1.style.display = 'none';
  modalCover1.style.display = 'none';
});
// When modalCover was clicked
modalCover1.addEventListener('click', () => {
  modal1.style.display = 'none';
  modalCover1.style.display = 'none';
});
// When outside of the modal content was clisked

// works2
// variables
const open2 = document.getElementById('modalOpen2')
const modal2 = document.getElementById('modalContent2')
const close2 = document.getElementById('modalClose2')
const modalCover2 = document.getElementById('modalCover2')
// When thumnails was clicked
open2.addEventListener('click', () => {
  modal2.style.display = 'block';
  modalCover2.style.display = 'block';
  
});
// When x was clicked
close2.addEventListener('click', () => {
  modal2.style.display = 'none';
  modalCover2.style.display = 'none';
});
// When modalCover was clicked
modalCover2.addEventListener('click', () => {
  modal2.style.display = 'none';
  modalCover2.style.display = 'none';
});

// works3
// variables
const open3 = document.getElementById('modalOpen3')
const modal3 = document.getElementById('modalContent3')
const close3 = document.getElementById('modalClose3')
const modalCover3 = document.getElementById('modalCover3')
// When thumnails was clicked
open3.addEventListener('click', () => {
  modal3.style.display = 'block';
  modalCover3.style.display = 'block';
  
});
// When x was clicked
close3.addEventListener('click', () => {
  modal3.style.display = 'none';
  modalCover3.style.display = 'none';
});
// When modalCover was clicked
modalCover3.addEventListener('click', () => {
  modal3.style.display = 'none';
  modalCover3.style.display = 'none';
});