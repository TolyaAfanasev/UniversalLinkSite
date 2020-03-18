/*top scroll*/
$('#top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
    return false;
});
/*fixed header*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 650){
		$('header').addClass("collapse");
	}
	else{
	$('header').removeClass("collapse");
	}
});