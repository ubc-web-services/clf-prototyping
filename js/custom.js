// Custom Javascript if necessary
(function($) {
// Insert necessary javascript stuff here

/*var cssLink = document.createElement("link") 
cssLink.href = "style.css"; 
cssLink .rel = "stylesheet"; 
cssLink .type = "text/css"; 
frames['wayfinder'].document.body.appendChild(cssLink);*/



$(document).ready(function() {
	// ... or here

	// tabs
	$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  
  // accordian
  $(".accordion .collapse").collapse();
  
});

$(window).load(function() {
	
	// front page carousel
	$('.carousel').ubc_spotlight({
    interval: 6000,
    pause: 'hover'
	});
	$('.flexslider').flexslider();
	
 });

})(jQuery);