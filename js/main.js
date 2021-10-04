/* Your JS here. */
//console.log('Hello World!')


document.addEventListener("DOMContentLoaded", function(event) { 
  //do work

  //the event occurred
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
//console.log(slides)


const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const indicators = document.querySelector('.carousel_indicators');
const dots = Array.from(indicators.children);

//function for moving the slides
const setSlidePosition = (slide,index) => {
  slide.style.left = slideWidth*index + 'px';
}



//amount you are moving depend on the size of the track
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
slides.forEach(setSlidePosition)

//arrange the slides next to one another
//improving code by adding an event whenever the user resizes -> responsiveness
window.addEventListener('resize', function(event) {
  //amount you are moving depend on the size of the track
  const slideSize = slides[0].getBoundingClientRect();
  const slideWidth = slideSize.width;
  /*
  const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth*index + 'px';
  }
  */
  slides.forEach((slide, index)=> {
    slides.forEach(setSlidePosition)
  })
  
});


//function that moves to slide given either prevslide or next slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left; +')';
  currentSlide.classList.remove('active')
  targetSlide.classList.add('active')
}

const updateDots = (currentDot, clickedDot) => {
  clickedDot.classList.add('active');
  currentDot.classList.remove('active');
}


//move slides left when click left button
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.active');
  //console.log(currentSlide);
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = indicators.querySelector('.active');
  const previousDot = currentDot.previousElementSibling;
  const targetIndex = slides.findIndex(slide => slide === prevSlide)
  //move to the slide
  moveToSlide(track, currentSlide, prevSlide)
  updateDots(currentDot,previousDot)
  hideArrows(slides,prevButton,nextButton,targetIndex)


})


//move slides right when click right button
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.active');
  const nextSlide = currentSlide.nextElementSibling;
   //console.log(currentSlide);
  const currentDot = indicators.querySelector('.active');
  const nextDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex(slide => slide === nextSlide)  
  //move to the slide
  moveToSlide(track, currentSlide, nextSlide)
  updateDots(currentDot,nextDot)
  hideArrows(slides,prevButton,nextButton,targetIndex)


})

//move according to the indicators
const hideArrows = (slides,prevButton,nextButton,targetIndex) =>{

  if (targetIndex === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  } else {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }

}
indicators.addEventListener('click', e=>{
  //which button was clicked on
  const clickedDot = e.target.closest('button');

  if (!clickedDot) {
    return;
  }

  const currentSlide = track.querySelector('.active');
  const currentDot = indicators.querySelector('.active');

  const targetIndex = dots.findIndex(dot => dot === clickedDot)
  console.log(targetIndex);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, clickedDot);
  hideArrows(slides,prevButton,nextButton,targetIndex)


})









// When the user scrolls down 150px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.padding = "4px 10px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
  }
}

const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('nav ul li')

//event listener for scroll, run function whenever scroll
window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop - document.getElementById("navbar").clientHeight;
    //console.log(sectionTop)
    const sectionHeight = section.clientHeight;
    //--find how much we have scrolled 
    if (scrollY >= sectionTop)  {
      current = section.getAttribute('id');
    }
    //.log(current)
  })
  navLi.forEach(li => {
    //remove any previous active class
    li.classList.remove('active')
    //console.log(current)
    if (li.classList.contains(current)) {
      //console.log(li)

      li.classList.add('active')
      
    }
  })

})









//MODALS MODALS MODALS 

// Get the modal
var modal = document.getElementById("personal_website_modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("website_img");
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block"; //displaying modal when the image is clicked
  modalImg.src = this.src; //zoom in the img
  //captionText.innerHTML = this.alt; //caption
}

//second modal
var modal2 = document.getElementById("tableau_modal");

var img2 = document.getElementById("tableau_img");
var modalImg2 = document.getElementById("img02")
img2.onclick = function(){
  modal2.style.display = "block"; //displaying modal when the image is clicked
  modalImg2.src = this.src; //zoom in the img
  //captionText.innerHTML = this.alt; //caption
}

//third modal
var modal3 = document.getElementById("app_modal");

var img3 = document.getElementById("app_img");
var modalImg3 = document.getElementById("img03")
img3.onclick = function(){
  modal3.style.display = "block"; //displaying modal when the image is clicked
  modalImg3.src = this.src; //zoom in the img
  //captionText.innerHTML = this.alt; //caption
}


// All page modals
var modals = document.querySelectorAll('.modal');
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
   for (var index in modals) {
    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
   }
  }
}

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
     for (var index in modals) {
       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
  }
 }
 
// END MODALS 





//test responsive navbar





});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
