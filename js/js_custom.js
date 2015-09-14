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