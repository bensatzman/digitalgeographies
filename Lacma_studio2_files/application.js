var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function clearMe(obj, text) {
	if(obj.value == text) {
		obj.value = '';
	}
}

function restoreMe(obj, text) {
	if(obj.value == '') {
		obj.value = text;
	}
}

$(document).ready(function(){
	if ($('#home').length != 0) {
	// Homepage twitter actions
	
	$(".select-twitter-lacma").click(function () {
    $(".twitter-group").hide();
    $("#twitter-lacma").show();

		$('.twitter-lacma-posts').cycle({
			fx: 'scrollUp',
			timeout: 6750,
			speed: 1250
		});
  });

	$(".select-twitter-community").click(function () {
    $(".twitter-group").hide();
    $("#twitter-community").show();

		$('.twitter-community-posts').cycle({
			fx: 'scrollUp',
			timeout: 6750,
			speed: 1250
		});
  });

	$(".select-twitter-espanol").click(function () {
    $(".twitter-group").hide();
    $("#twitter-espanol").show();

		$('.twitter-espanol-posts').cycle({
			fx: 'scrollUp',
			timeout: 6750,
			speed: 1250
		});
  });

	// Start first twitter cycle-through

	$('.twitter-lacma-posts').cycle({
		fx: 'scrollUp',
		timeout: 6000
	});
}
	
	// Fix logo in IE6

	$(function(){
		$('h1#logo').pngFix();}
	);
	
});

}
/*
     FILE ARCHIVED ON 07:19:33 Jul 08, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:39:25 Feb 02, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 527.616
  exclusion.robots: 0.219
  LoadShardBlock: 739.185 (3)
  RedisCDXSource: 7.526
  PetaboxLoader3.datanode: 735.623 (4)
  captures_list: 775.008
  esindex: 0.017
  CDXLines.iter: 21.627 (3)
  exclusion.robots.policy: 0.203
  load_resource: 1005.717
*/