/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('header');
    window.onscroll = () =>{
    header.classList.toggle('scroll-header', window.scrollY > 0)
}
// function scrollHeader(){
//     const header = document.getElementById('header')
//     // When the scroll is > 50 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 50) header.classList.add('scroll-header');
//     else header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scroll-header)


/*=============== SERVICES MODAL ===============*/
const modalView = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () => {
        modalView.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*===============Slider  TESTIMONIAL(No SWIPER Due to regular class update)===============*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" testy", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " testy";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop  = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
              }else{
                document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 
let theme = document.querySelector('#theme-button');
  theme.onclick = () =>{
    theme.classList.toggle('fa-sun');

    if(theme.classList.contains('fa-sun')){
      document.body.classList.add('light-theme');
    }else{
      document.body.classList.remove('light-theme');
    }
  };
  /*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
      target: '.work_card'
  }, 
  animation:{
      duration: 300
  }
});
/* Link active work */
const linkWork = document.querySelectorAll('.work_item')
function activeWork(){
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work');
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*================Form Validation=======================*/
let contactName = document.querySelector(".contact-name");
let contactErr = document.querySelector(".contact-error");
let nameValid = document.querySelector(".nameValid")

let contactEmail = document.querySelector(".contact-email");
let emailErr = document.querySelector(".email-error");
let emailValid = document.querySelector(".emailValid")

let contactBox = document.querySelector(".contact-box");
let boxErr = document.querySelector(".box-error");

validateName=()=>{
  let name = document.querySelector(".contact-name").value;
  if(name.length == 0){
    contactErr.style.display="block";
    contactErr.innerHTML = "Name can't be empty!"
    nameValid.style.display="none"
    contactName.style.border="1px solid hsl(0, 100%, 74%)";
    return false;
  }
    contactErr.style.display="none";
    nameValid.style.display="block"
    contactName.style.border="1px solid hsl(154, 59%, 51%)";
    return true;

}
validateEmail=()=>{
  let emailName = document.querySelector(".contact-email").value;
  if(emailName.length == 0){
    contactEmail.style.display="block";
    emailErr.innerHTML = "Email can't be empty!"
    emailValid.style.display="none"
    contactEmail.style.border="1px solid hsl(0, 100%, 74%)";
    return false;
  }
  if(!emailName.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    contactEmail.style.display="block";
    emailErr.innerHTML = "Email is invalid!"
    emailValid.style.display="none"
    contactEmail.style.border="1px solid hsl(0, 100%, 74%)";
    return false;
  }
    emailErr.style.display="none";
    emailValid.style.display="block"
    contactEmail.style.border="1px solid hsl(154, 59%, 51%)";
    return true;
}

validateBox=()=>{
  let boxName = document.querySelector(".contact-box").value;
  if(boxName.length == 0){
    contactBox.style.display="block";
    boxErr.innerHTML = "Write something!";
    contactBox.style.border="1px solid hsl(0, 100%, 74%)";
    return false;
  }
    boxErr.style.display="none";
    contactBox.style.border="1px solid hsl(154, 59%, 51%)";

}
const formValidation = document.getElementById("form");

formValidation.addEventListener('submit', event =>{
    if(!validateName() && !validateEmail() && !validateBox()){
      event.preventDefault();
      return false;
    }
});   

/*================Form Validation ends=======================*/



/*=============== AOS SCROLL REVEAL ANIMATION ===============*/
AOS.init({
  offset: 400,
  duration: 1000,
  easing: 'ease-in-out'
});
