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
	$('.tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  
  // accordian
  $('.panel').find('.panel-tab').click(function(e){
    e.preventDefault();
    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).parent().toggleClass('panel-closed panel-open');
    $(this).find(">:first-child").toggleClass('icon-plus-sign icon-minus-sign');
    //Hide the other panels
    //$(".accordion-content").not($(this).next()).slideUp('fast');
  });
  
  // accordion open / close button
  $('#openall').click(function(e){
    e.preventDefault();
    //Expand or collapse this panel
    $('.panel-content').slideDown('fast');
    $('.panel-tab > i').removeClass('icon-plus-sign').addClass('icon-minus-sign');
    $('.panel').removeClass('panel-closed').addClass('panel-open');
  });
  $('#closeall').click(function(e){
    e.preventDefault();
    //Expand or collapse this panel
    $('.panel-content').slideUp('fast');
    $('.panel-tab > i').removeClass('icon-minus-sign').addClass('icon-plus-sign');
    $('.panel').removeClass('panel-open').addClass('panel-closed');
  });
  
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