var i = 0;
var images = ['Tim-Rodgers-Web-Developer.jpg', 'DeborahSparks_HomePage_10_14_14.jpg', '4him.png', 'classic-stitch.png', 'CSI.png', 'fitness-divas.png', 'gym-101.png', 'new-life-home.png', 'revee-lamar.png', 'riobata-home.png', 'Set-Free.png', 'setfree-landing-page.png', 'Set-Free-layout.jpg'];

$(function(){
	$('#leftbtn').click(function(){
		i--;
		i = i < 0 ? images.length - 1 : i;
		$('#slider').css('background-image', 'url("images/' + images[i] + '")');
	})
})

$(function(){
	$('#rightbtn').click(function(){
		i++;
		i = i > images.length - 1 ? 0 : i;
		$('#slider').css('background-image', 'url("images/' + images[i] + '")');
	})
})

$(document).ready(function(){
	// Add scrollspy to <body>
	$('body').scrollspy({target: ".navbar", offset: 50});   
  
	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  }  // End if
	});
  });