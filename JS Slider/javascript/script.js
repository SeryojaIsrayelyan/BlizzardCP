var imageid = 0;
if(!localStorage.getItem("ImageSlider")){
localStorage.setItem("ImageSlider",0);
}
imageid = localStorage.getItem("ImageSlider");
	$('#slider').css('background-image', 'url(images/'+imageid+'.jpg)');
$(function(){
	$("#Lbutton").click(function(){
		if(imageid ==0){
			imageid = 3;
			localStorage.setItem("ImageSlider",imageid);
		}
		else {
			imageid--;
			localStorage.setItem("ImageSlider",imageid);
		}
		$('#slider').css('background-image', 'url(images/'+imageid+'.jpg)');
	})
		$("#Rbutton").click(function(){
		if(imageid ==3){
			imageid = 0;
			localStorage.setItem("ImageSlider",imageid);
		}
		else {
			imageid++;
			localStorage.setItem("ImageSlider",imageid);
		}
		$('#slider').css('background-image', 'url(images/'+imageid+'.jpg)');
	})
});

