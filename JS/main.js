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

function _0x1278(){const _0x935abc=['body','ease-in-out','scrollY','border','active-modal','936441bbpKgT','.emailValid','fa-sun','.work_container','Name\x20can\x27t\x20be\x20empty!','classList','trim','5064EMvPLk','.contact-email','contains','.services_modal-close','onscroll','style','forEach','891124Wjycuj','Email\x20is\x20invalid!','.work_card','mySlides','querySelectorAll','1px\x20solid\x20hsl(154,\x2059%,\x2051%)','querySelector','.services_modal','.nameValid','match','5526EoNktm','getElementsByClassName','light-theme','click','#theme-button','Email\x20can\x27t\x20be\x20empty!','remove','form','none','section[id]','init','onclick','.contact-error','489460mmQiqD','preventDefault','.contact-box','replace','innerHTML','6461550ExMrDj','1px\x20solid\x20hsl(0,\x20100%,\x2074%)','.nav_menu\x20a[href*=','addEventListener','scroll-header','247737sLPVHL','5JSZOow','pageYOffset','add','active-link','4354385XgtQyq','dot','block','toggle','className','length','display','active-work','\x20testy'];_0x1278=function(){return _0x935abc;};return _0x1278();}const _0x3da380=_0x444f;(function(_0x45ce26,_0x5082d9){const _0x5182d1=_0x444f,_0x1d5d57=_0x45ce26();while(!![]){try{const _0x1f1ff5=-parseInt(_0x5182d1(0x1fc))/0x1+-parseInt(_0x5182d1(0x1f2))/0x2+-parseInt(_0x5182d1(0x20f))/0x3+parseInt(_0x5182d1(0x21d))/0x4*(parseInt(_0x5182d1(0x1fd))/0x5)+parseInt(_0x5182d1(0x1f7))/0x6+parseInt(_0x5182d1(0x201))/0x7+-parseInt(_0x5182d1(0x216))/0x8*(parseInt(_0x5182d1(0x227))/0x9);if(_0x1f1ff5===_0x5082d9)break;else _0x1d5d57['push'](_0x1d5d57['shift']());}catch(_0x275351){_0x1d5d57['push'](_0x1d5d57['shift']());}}}(_0x1278,0xb1da5));const header=document[_0x3da380(0x223)]('header');window[_0x3da380(0x21a)]=()=>{const _0x412a89=_0x3da380;header[_0x412a89(0x214)][_0x412a89(0x204)](_0x412a89(0x1fb),window[_0x412a89(0x20c)]>0x0);};const modalView=document[_0x3da380(0x221)](_0x3da380(0x224)),modalBtns=document['querySelectorAll']('.services_button'),modalClose=document['querySelectorAll'](_0x3da380(0x219));let modal=function(_0x27e9db){const _0x3cafa3=_0x3da380;modalView[_0x27e9db][_0x3cafa3(0x214)]['add'](_0x3cafa3(0x20e));};modalBtns[_0x3da380(0x21c)]((_0x2cb48e,_0x35d472)=>{const _0x45f20f=_0x3da380;_0x2cb48e[_0x45f20f(0x1fa)](_0x45f20f(0x22a),()=>{modal(_0x35d472);});}),modalClose[_0x3da380(0x21c)](_0x1ab5a4=>{const _0x578b7b=_0x3da380;_0x1ab5a4[_0x578b7b(0x1fa)](_0x578b7b(0x22a),()=>{const _0x1bee6d=_0x578b7b;modalView[_0x1bee6d(0x21c)](_0x2971fc=>{const _0x6b9a02=_0x1bee6d;_0x2971fc[_0x6b9a02(0x214)]['remove'](_0x6b9a02(0x20e));});});});let slideIndex=0x0;function _0x444f(_0x378e66,_0x5a66fb){const _0x1278c3=_0x1278();return _0x444f=function(_0x444fca,_0x131b89){_0x444fca=_0x444fca-0x1f0;let _0x1629e5=_0x1278c3[_0x444fca];return _0x1629e5;},_0x444f(_0x378e66,_0x5a66fb);}showSlides();function showSlides(){const _0x2bc006=_0x3da380;let _0x31b947,_0x4b5469=document[_0x2bc006(0x228)](_0x2bc006(0x220)),_0x303c0f=document['getElementsByClassName'](_0x2bc006(0x202));for(_0x31b947=0x0;_0x31b947<_0x4b5469[_0x2bc006(0x206)];_0x31b947++){_0x4b5469[_0x31b947][_0x2bc006(0x21b)]['display']=_0x2bc006(0x22f);}slideIndex++;slideIndex>_0x4b5469['length']&&(slideIndex=0x1);for(_0x31b947=0x0;_0x31b947<_0x303c0f[_0x2bc006(0x206)];_0x31b947++){_0x303c0f[_0x31b947][_0x2bc006(0x205)]=_0x303c0f[_0x31b947][_0x2bc006(0x205)][_0x2bc006(0x1f5)](_0x2bc006(0x209),'');}_0x4b5469[slideIndex-0x1]['style'][_0x2bc006(0x207)]=_0x2bc006(0x203),_0x303c0f[slideIndex-0x1][_0x2bc006(0x205)]+=_0x2bc006(0x209),setTimeout(showSlides,0x1388);}const sections=document[_0x3da380(0x221)](_0x3da380(0x230));function scrollActive(){const _0x2d7abf=_0x3da380,_0x48f5e1=window[_0x2d7abf(0x1fe)];sections['forEach'](_0x272d1a=>{const _0x292c3a=_0x2d7abf,_0x1c9a80=_0x272d1a['offsetHeight'],_0x49c5d4=_0x272d1a['offsetTop']-0x3a,_0x3ea6d9=_0x272d1a['getAttribute']('id');_0x48f5e1>_0x49c5d4&&_0x48f5e1<=_0x49c5d4+_0x1c9a80?document[_0x292c3a(0x223)](_0x292c3a(0x1f9)+_0x3ea6d9+']')[_0x292c3a(0x214)][_0x292c3a(0x1ff)](_0x292c3a(0x200)):document[_0x292c3a(0x223)](_0x292c3a(0x1f9)+_0x3ea6d9+']')[_0x292c3a(0x214)][_0x292c3a(0x22d)](_0x292c3a(0x200));});}window['addEventListener']('scroll',scrollActive);let theme=document['querySelector'](_0x3da380(0x22b));theme[_0x3da380(0x1f0)]=()=>{const _0x4b39f0=_0x3da380;theme[_0x4b39f0(0x214)][_0x4b39f0(0x204)](_0x4b39f0(0x211)),theme['classList'][_0x4b39f0(0x218)](_0x4b39f0(0x211))?document[_0x4b39f0(0x20a)][_0x4b39f0(0x214)][_0x4b39f0(0x1ff)]('light-theme'):document['body'][_0x4b39f0(0x214)][_0x4b39f0(0x22d)](_0x4b39f0(0x229));};let mixerPortfolio=mixitup(_0x3da380(0x212),{'selectors':{'target':_0x3da380(0x21f)},'animation':{'duration':0x12c}});const linkWork=document[_0x3da380(0x221)]('.work_item');function activeWork(){const _0x2aefe9=_0x3da380;linkWork[_0x2aefe9(0x21c)](_0x32d613=>_0x32d613[_0x2aefe9(0x214)][_0x2aefe9(0x22d)](_0x2aefe9(0x208))),this[_0x2aefe9(0x214)][_0x2aefe9(0x1ff)](_0x2aefe9(0x208));}linkWork['forEach'](_0x121e38=>_0x121e38[_0x3da380(0x1fa)](_0x3da380(0x22a),activeWork));const formValid=document['getElementById'](_0x3da380(0x22e)),contactName=document[_0x3da380(0x223)]('.contact-name'),contactErr=document[_0x3da380(0x223)](_0x3da380(0x1f1)),nameValid=document['querySelector'](_0x3da380(0x225)),emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,contactEmail=document[_0x3da380(0x223)](_0x3da380(0x217)),emailErr=document[_0x3da380(0x223)]('.email-error'),emailValid=document[_0x3da380(0x223)](_0x3da380(0x210)),contactBox=document[_0x3da380(0x223)](_0x3da380(0x1f4)),boxErr=document[_0x3da380(0x223)]('.box-error');formValid['onsubmit']=_0x49cd80=>{const _0x58e052=_0x3da380;let _0x591ff2=!![];validateName=()=>{const _0xe3658f=_0x444f;let _0x1c527=contactName['value'][_0xe3658f(0x215)]();_0x1c527[_0xe3658f(0x206)]==0x0?(contactErr['style'][_0xe3658f(0x207)]=_0xe3658f(0x203),contactErr[_0xe3658f(0x1f6)]=_0xe3658f(0x213),nameValid[_0xe3658f(0x21b)][_0xe3658f(0x207)]=_0xe3658f(0x22f),contactName[_0xe3658f(0x21b)][_0xe3658f(0x20d)]=_0xe3658f(0x1f8),_0x591ff2=![]):(contactErr[_0xe3658f(0x21b)][_0xe3658f(0x207)]=_0xe3658f(0x22f),nameValid[_0xe3658f(0x21b)]['display']='block',contactName['style']['border']=_0xe3658f(0x222));},validateName(),validateEmail=()=>{const _0x505d66=_0x444f,_0x431cc8=contactEmail['value'][_0x505d66(0x215)]();if(_0x431cc8[_0x505d66(0x206)]==0x0)contactEmail[_0x505d66(0x21b)][_0x505d66(0x207)]=_0x505d66(0x203),emailErr['innerHTML']=_0x505d66(0x22c),emailValid['style'][_0x505d66(0x207)]=_0x505d66(0x22f),contactEmail[_0x505d66(0x21b)][_0x505d66(0x20d)]=_0x505d66(0x1f8),_0x591ff2=![];else!_0x431cc8[_0x505d66(0x226)](emailPattern)?(contactEmail[_0x505d66(0x21b)][_0x505d66(0x207)]='block',emailErr[_0x505d66(0x1f6)]=_0x505d66(0x21e),emailValid[_0x505d66(0x21b)][_0x505d66(0x207)]=_0x505d66(0x22f),contactEmail['style'][_0x505d66(0x20d)]=_0x505d66(0x1f8),_0x591ff2=![]):(emailErr[_0x505d66(0x21b)][_0x505d66(0x207)]=_0x505d66(0x22f),emailValid[_0x505d66(0x21b)][_0x505d66(0x207)]=_0x505d66(0x203),contactEmail[_0x505d66(0x21b)][_0x505d66(0x20d)]=_0x505d66(0x222));},validateEmail(),validateBox=()=>{const _0x5cb318=_0x444f;let _0x204eca=contactBox['value']['trim']();_0x204eca[_0x5cb318(0x206)]==0x0?(contactBox['style'][_0x5cb318(0x207)]=_0x5cb318(0x203),boxErr['innerHTML']='Write\x20something!',contactBox[_0x5cb318(0x21b)][_0x5cb318(0x20d)]='1px\x20solid\x20hsl(0,\x20100%,\x2074%)',_0x591ff2=![]):(boxErr[_0x5cb318(0x21b)][_0x5cb318(0x207)]=_0x5cb318(0x22f),contactBox[_0x5cb318(0x21b)][_0x5cb318(0x20d)]=_0x5cb318(0x222));},validateBox(),!_0x591ff2&&_0x49cd80[_0x58e052(0x1f3)]();},AOS[_0x3da380(0x231)]({'offset':0x190,'duration':0x3e8,'easing':_0x3da380(0x20b)});