var i = 0;
var images = ['Tim-Rodgers-Web-Developer.jpg', '4him.png', 'classic-stitch.png', 'CSI.png', 'fitness-divas.png', 'gym-101.png', 'new-life-home.png', 'revee-lamar.png', 'riobata-home.png', 'Set-Free.png', 'setfree-landing-page.png', 'Set-Free-layout.jpg'];

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