// Start SiteHeart code
(function(){
var widget_id = 640645;
_shcp =[{widget_id : widget_id}];
var lang =(navigator.language || navigator.systemLanguage
|| navigator.userLanguage ||"en")
.substr(0,2).toLowerCase();
var url ="widget.siteheart.com/widget/sh/"+ widget_id +"/"+ lang +"/widget.js";
var hcc = document.createElement("script");
hcc.type ="text/javascript";
hcc.async =true;
hcc.src =("https:"== document.location.protocol ?"https":"http")
+"://"+ url;
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hcc, s.nextSibling);
})();
// End SiteHeart code

$(document).ready(function() {
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-60
	        }, 1000);

	        $(target)
				.delay(500)
			 	.queue(function (next) { 
			    	$(this).css('background', '#FFF3A5'); 
			    	next(); 
				})
				.delay(4000)
				.queue(function (next) { 
			    	$(this).css('background', 'none'); 
			    	next(); 
				});
	        return false;
	      }
	    }
	  });
	});
});