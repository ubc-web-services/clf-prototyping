// Custom Javascript if necessary
(function($) {
// Insert necessary javascript stuff here

$(document).ready(function() {
	// ... or here
  
  /*
	// tabs
	$('.tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  */
  
  /*
  // accordion
  $('.accordion').once('accordion').find('.accordion-tab').click(function(e){
    e.preventDefault();
    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).parent().toggleClass('accordion-closed');
    //$(this).find(">:first-child").toggleClass('icon-plus-sign icon-minus-sign');
    //Hide the other panels
    //$(".accordion-content").not($(this).next()).slideUp('fast');
  });
  */
  
  
  /* FORMSTONE - form element changes */
  $("input[type=checkbox], input[type=radio]").checkbox();
  
  $("select").dropdown();
   
  $(".equalize").equalize({
      target: ".btn"
  });
  $(".row.profiles").equalize();
  
  
  
  // disable the keyword search if name search is used and vice-versa on Our People page
  $(function() {
    var $selects = $('#input_name, #select_keyword');
    $selects.on("change", function() {
      // disable or enable the other two
      //$selects.not(this).attr('disabled', $(this).val() === '' ? '' : 'disabled');
      $selects.not(this).attr('disabled', 'disabled');
      if (! $('#input_name').val() && ! $('#select_keyword').val()){
        // do something if it's empty
        $selects.prop("disabled", false);
      }else{
        // do something else if it's not empty
      }
    });
  });
  
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
  
  
  
  /*
  // switch activated filters on the staff listing pages
  $(function() {
    var $selectsall = $('#edit-category-value, #edit-subcategory-value, #input_name');
    var $selects2 = $('#edit-category-value, #edit-subcategory-value');
    var $selects3 = $('#input_name');
    
    $selectsall.on("change", function() {
      
      // disable or enable the other two
      $selects2.not(this).dropdown("disable");
      $selects3.not(this).attr('disabled', 'disabled');
      if (! $('#edit-category-value').val() && ! $('#edit-subcategory-value').val()){
        // do something if it's empty
        $selects2.dropdown("enable");
      } else {
        // do something else if it's not empty
      }
    });
  });
  */
  
  
});


$(window).load(function() {
	
	// initialize flexslider slideshows
	$('.flexslider').flexslider();
	
 });

})(jQuery);

// Custom Javascript if necessary
(function($) {
// Insert necessary javascript stuff here

$(document).ready(function() {
	// ... or here
  
  /*
	// tabs
	$('.tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
  */
  
  /*
  // accordion
  $('.accordion').once('accordion').find('.accordion-tab').click(function(e){
    e.preventDefault();
    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).parent().toggleClass('accordion-closed');
    //$(this).find(">:first-child").toggleClass('icon-plus-sign icon-minus-sign');
    //Hide the other panels
    //$(".accordion-content").not($(this).next()).slideUp('fast');
  });
  */
  
  
  /* FORMSTONE - form element changes 
  $("input[type=checkbox], input[type=radio]").once('checkbox').checkbox();
  
  $("select").once('dropdown').dropdown();
   
  $(".equalize").once('equal').equalize({
      target: ".btn"
  });
  $(".row.profiles").once('equal').equalize();
  */
  
  
  // disable the keyword search if name search is used and vice-versa on Our People page
  $(function() {
    var $selects = $('#input_name, #select_keyword');
    $selects.on("change", function() {
      // disable or enable the other two
      //$selects.not(this).attr('disabled', $(this).val() === '' ? '' : 'disabled');
      $selects.not(this).attr('disabled', 'disabled');
      if (! $('#input_name').val() && ! $('#select_keyword').val()){
        // do something if it's empty
        $selects.prop("disabled", false);
      }else{
        // do something else if it's not empty
      }
    });
  });
  
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
  
  
  
  /*
  // switch activated filters on the staff listing pages
  $(function() {
    var $selectsall = $('#edit-category-value, #edit-subcategory-value, #input_name');
    var $selects2 = $('#edit-category-value, #edit-subcategory-value');
    var $selects3 = $('#input_name');
    
    $selectsall.on("change", function() {
      
      // disable or enable the other two
      $selects2.not(this).dropdown("disable");
      $selects3.not(this).attr('disabled', 'disabled');
      if (! $('#edit-category-value').val() && ! $('#edit-subcategory-value').val()){
        // do something if it's empty
        $selects2.dropdown("enable");
      } else {
        // do something else if it's not empty
      }
    });
  });
  */
  
  
});




$(window).load(function() {
	
	// initialize flexslider slideshows
	$('.flexslider').flexslider();
	
 });

})(jQuery);
/* 

THIS FILE IS A PLACEHOLDER FOR THE FOLLOWING CONCATENATED FILES
----------------------------------------------------

libs/formstone/js/core.js
libs/formstone/js/mediaquery.js
libs/formstone/js/touch.js
libs/formstone/js/checkbox.js
libs/formstone/js/dropdown.js
libs/formstone/js/equalize.js

*/
(function ($) {
  Drupal.behaviors.ubc_nursing_forms = {
    attach: function (context, settings) {
      
		  /* FORMSTONE - form element changes */
		  $("input[type=checkbox], input[type=radio]").once('checkbox').checkbox();
  
		  $("select").once('dropdown').dropdown();
   
		  $(".equalize").once('equal').equalize({
		      target: ".btn"
		  });
		  $(".row.profiles").once('equal').equalize();
      
    }
  };
  
  
})(jQuery);