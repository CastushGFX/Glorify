$("#container-2").hide();
$("#scroll-down").click(function(){
	$("#container-1").animate({
		marginTop: "-800px",
	}, 500)
	$("#container-1").hide(200);
	$("#container-2").show();
});