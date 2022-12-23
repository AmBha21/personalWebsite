// hamburger animation
const hamburger = document.querySelector( '.hamburger');

hamburger.addEventListener('click' , function (){
    this.classList.toggle('is-active');
});

document.getElementById('hamburger').addEventListener('click', toggleMenu);

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('is-active');
  }
// hamburger.addEventListener('click', function (){
//     menu.classList.toggle('show');
// });
