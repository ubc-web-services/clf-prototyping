// Custom Javascript if necessary
(function($) {

  $(document).ready(function() {
    
    // !!! remove from production !!!
  	// tabs
  	$('.tabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    
    
    // !!! remove from production !!!
    // accordion
    $('.accordion').find('.accordion-tab').click(function(e){
      e.preventDefault();
      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      $(this).parent().toggleClass('accordion-closed');
      //$(this).find(">:first-child").toggleClass('icon-plus-sign icon-minus-sign');
      //Hide the other panels
      //$(".accordion-content").not($(this).next()).slideUp('fast');
    });
    
    
    
    /* FORMSTONE - form element changes */
    $("input[type=checkbox], input[type=radio]").checkbox();
    $("select").dropdown();
    $(".equalize").equalize({
        target: ".btn"
    });
    $(".row.profiles").equalize();
    
    
    // add smooth scroll to anchors
    $('a.smoothscroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 600);
                return false;
            }
        }
    });  
  });

  $(window).load(function() {
    // initialize flexslider slideshows
    $('.flexslider').flexslider();
  });

})(jQuery);
