!function($){$(document).ready(function(){$(".tabs a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(".accordion").find(".accordion-tab").click(function(t){t.preventDefault(),$(this).next().slideToggle("fast"),$(this).parent().toggleClass("accordion-closed")}),$("a.anchor[href^='#']").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top},300,function(){})}),$("select").dropdown(),$(".equalize").equalize({target:".btn"}),$(".row.profiles").equalize(),$("a.smoothscroll[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},600),!1}})})}(jQuery);