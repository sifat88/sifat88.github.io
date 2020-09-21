// Isotope Customization js

var iso = new Isotope( '.gbox', {
    itemSelector: '.gbox-item',
    stagger: 30,
    getSortData: {
      name: '.name',
      category: '[data-category]'
    },
    masonry: {
      columnWidth: '.gbox-sizer'
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = itemElem.querySelector('.number').textContent;
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = itemElem.querySelector('.name').textContent;
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  var filtersElem = document.querySelector('.filter-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.bttn-grp');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }
//   * Lightbox ============= //
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.gbox-single-item')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = document.querySelectorAll('lb').src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})

// Counter up
$('.counter').counterUp({
  delay: 10,
  time: 4000,
});
// Owl carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    nav:true
});

//============ Toggle menu icon ==========
const menuIcon = document.querySelector('.navbar-toggler-icon');

const menuFunction = () => {
  menuIcon.firstChild.classList.toggle("fa-times")
}

menuIcon.addEventListener('click', menuFunction)





//============ Scroll to top ==========
const myBtn = document.getElementById('mybtn');

const scrollFunction = () => {
  if( Math.floor(window.scrollY) === 7250){
    myBtn.classList.add('btn-active')
  }
  
}

window.addEventListener('scroll' , scrollFunction);


