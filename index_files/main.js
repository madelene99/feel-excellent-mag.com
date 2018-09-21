$(window).on('load', function(){
	arrow=$('header .middle_container .flex .wooman .arrow');
	if(arrow.length){
		$('header .middle_container .flex .wooman .arrow_bg').css('bottom', arrow.offset().bottom).show()
	}
})