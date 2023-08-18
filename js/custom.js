(function ($) {
	// "use strict";

	/* ..............................................
	Loader 
	................................................. */

	$(window).on('load', function () {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({ 'overflow': 'visible' });
	});

	/* ..............................................
	Navbar Bar
	................................................. */

	// $('.navbar-nav .nav-link').on('click', function () {
	// 	var toggle = $('.navbar-toggler').is(':visible');
	// 	if (toggle) {
	// 		$('.navbar-collapse').collapse('hide');
	// 	}
	// });

	/* ..............................................
	Fixed Menu
	................................................. */

	//  

	/* ..............................................
	Properties Filter
	................................................. */
	// var Container = $('.container');
	// Container.imagesLoaded(function () {
	// 	var portfolio = $('.properties-menu');
	// 	portfolio.on('click', 'button', function () {
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 		var filterValue = $(this).attr('data-filter');
	// 		$grid.isotope({
	// 			filter: filterValue
	// 		});
	// 	});
	// 	var $grid = $('.properties-list').isotope({
	// 		itemSelector: '.properties-grid'
	// 	});

	// });

	/* ..............................................
	Gallery
	................................................. */

	// $(document).ready(function () {
	// 	$('.popup-gallery').magnificPopup({
	// 		delegate: 'a',
	// 		type: 'image',
	// 		tLoading: 'Loading image #%curr%...',
	// 		mainClass: 'mfp-img-mobile',
	// 		gallery: {
	// 			enabled: true,
	// 			navigateByImgClick: true,
	// 			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
	// 		},
	// 		image: {
	// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 			titleSrc: function (item) {
	// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
	// 			}
	// 		}
	// 	});
	// });

	/* ..............................................
	Scroll To Top
	................................................. */

	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});
}(jQuery));

// Show more button in index.html
const showMoreBtn = document.getElementById('more-info-button');
const content = document.getElementById('show-more-content');
const moreinfotext = document.getElementById('more-info-text')

showMoreBtn.addEventListener('click', () => {
	content.classList.toggle('visible');
	if(moreinfotext.textContent == 'Learn More')
	{
		moreinfotext.textContent = 'Show less'
	}
	else if(moreinfotext.textContent == 'Show less')
	{
		moreinfotext.textContent = 'Learn More'
	}
});

//////// Only displaying one display element/////////
// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});



