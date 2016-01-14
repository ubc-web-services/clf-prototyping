(function ($) {
  Drupal.behaviors.ubc_research_forms = {
    attach: function (context, settings) {
      
		  /* FORMSTONE - form element changes */
		  $("input[type=checkbox], input[type=radio]").once('checkbox').checkbox();
  
		  $("select").once('dropdown').dropdown();
   
		  $(".equalize").once('equal').equalize({
		      target: ".btn"
		  });
		  $(".stories-row").once('equalstories').equalize({
		      target: "article.box"
		  });
		  $(".row.profiles").once('equalprofiles').equalize();
		  
		  $(".ctarow2").once('equalcta2').equalize({
		      //"min-width" : "740px",
		      target: [".cta-image",".inner-content"]
		      
		  });
		  
		  $(".ctarow3").once('equalcta3').equalize({
		      target: [".cta-image",".inner-content"]
		  });
		  
		  $(".pager-load-more a").addClass('btn btn-unit btn-unit-reverse');
      
    }
  };
  
  
})(jQuery);