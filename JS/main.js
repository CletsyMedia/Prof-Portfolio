// /*=============== CHANGE BACKGROUND HEADER ===============*/
// const header = document.querySelector('header');
//     window.onscroll = () =>{
//     header.classList.toggle('scroll-header', window.scrollY > 0)
// }
// // function scrollHeader(){
// //     const header = document.getElementById('header')
// //     // When the scroll is > 50 viewport height, add the scroll-header class to the header tag
// //     if(this.scrollY >= 50) header.classList.add('scroll-header');
// //     else header.classList.remove('scroll-header')
// // }
// // window.addEventListener('scroll', scroll-header)


// /*=============== SERVICES MODAL ===============*/
// const modalView = document.querySelectorAll('.services_modal'),
//       modalBtns = document.querySelectorAll('.services_button'),
//       modalClose = document.querySelectorAll('.services_modal-close');

// let modal = function(modalClick){
//     modalView[modalClick].classList.add('active-modal')
// }
// modalBtns.forEach((mb, i) =>{
//     mb.addEventListener('click', () =>{
//         modal(i)
//     })
// })

// modalClose.forEach((mc) =>{
//     mc.addEventListener('click', () => {
//         modalView.forEach((mv) => {
//             mv.classList.remove('active-modal')
//         })
//     })
// })

// /*===============Slider  TESTIMONIAL(No SWIPER Due to regular class update)===============*/
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" testy", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " testy";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }


// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop  = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

//               if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//                 document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
//               }else{
//                 document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
//               }
//     })
// }
// window.addEventListener('scroll', scrollActive);

// /*=============== LIGHT DARK THEME ===============*/ 
// let theme = document.querySelector('#theme-button');
//   theme.onclick = () =>{
//     theme.classList.toggle('fa-sun');

//     if(theme.classList.contains('fa-sun')){
//       document.body.classList.add('light-theme');
//     }else{
//       document.body.classList.remove('light-theme');
//     }
//   };
//   /*=============== MIXITUP FILTER PORTFOLIO ===============*/
// let mixerPortfolio = mixitup('.work_container', {
//   selectors: {
//       target: '.work_card'
//   }, 
//   animation:{
//       duration: 300
//   }
// });
// /* Link active work */
// const linkWork = document.querySelectorAll('.work_item')
// function activeWork(){
//   linkWork.forEach(l=> l.classList.remove('active-work'))
//   this.classList.add('active-work');
// }
// linkWork.forEach(l=> l.addEventListener('click', activeWork))

// /*================Form Validation=======================*/
// const formValid= document.getElementById("form");
// const contactName = document.querySelector(".contact-name");
// const contactErr = document.querySelector(".contact-error");
// const nameValid = document.querySelector(".nameValid")

// const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const contactEmail = document.querySelector(".contact-email");
// const emailErr = document.querySelector(".email-error");
// const emailValid = document.querySelector(".emailValid")

// const contactBox = document.querySelector(".contact-box");
// const boxErr = document.querySelector(".box-error");


// formValid.onsubmit=(e)=>{
//   let isValid = true;

//   // Validating name
//   validateName=()=>{
//   let name = contactName.value.trim();
//     if(name.length == 0){
//       contactErr.style.display="block";
//       contactErr.innerHTML = "Name can't be empty!"
//       nameValid.style.display="none"
//       contactName.style.border="1px solid hsl(0, 100%, 74%)";
//       isValid = false;
//     }else{
//       contactErr.style.display="none";
//       nameValid.style.display="block"
//       contactName.style.border="1px solid hsl(154, 59%, 51%)";
//     }
//   }
//   validateName();

//   // validateEmail();
//   validateEmail=()=>{
//   const validEmail = contactEmail.value.trim();
//     if (validEmail.length == 0){
//       contactEmail.style.display="block";
//       emailErr.innerHTML = "Email can't be empty!"
//       emailValid.style.display="none"
//       contactEmail.style.border="1px solid hsl(0, 100%, 74%)";
//       isValid = false;
//     }else if(!validEmail.match(emailPattern)){
//       contactEmail.style.display="block";
//       emailErr.innerHTML = "Email is invalid!"
//       emailValid.style.display="none"
//       contactEmail.style.border="1px solid hsl(0, 100%, 74%)";
//       isValid = false;
//     }else {
//       emailErr.style.display="none";
//       emailValid.style.display="block"
//       contactEmail.style.border="1px solid hsl(154, 59%, 51%)";
//     }
//   }
//   validateEmail();
  
//   // validate message
//   validateBox=()=>{
//   let msg = contactBox.value.trim();
//     if ( msg.length == 0){
//       contactBox.style.display="block";
//       boxErr.innerHTML = "Write something!";
//       contactBox.style.border="1px solid hsl(0, 100%, 74%)";
//       isValid = false;
//     }else {
//       boxErr.style.display="none";
//       contactBox.style.border="1px solid hsl(154, 59%, 51%)";
//     }
//   }
//   validateBox();

//     if (!isValid) {
//       e.preventDefault(); // Prevent form submission if validation fails
//     }
//   }

// /*================Form Validation ends=======================*/



// /*=============== AOS SCROLL REVEAL ANIMATION ===============*/
// AOS.init({
//   offset: 400,
//   duration: 1000,
//   easing: 'ease-in-out'
// });

