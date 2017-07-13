$(document).ready(function() {
	var imgsrc = [
		"", //自动把下标为0的清除了。不用管这个。
		"img/images/xq-1.png", //id=img1
		"img/images/xq-2.png", //id=img2
		"img/images/xq-3.png", //id=img3
		"img/images/xq-4.png" //id=img4
	];
	var id = 'img';
	for (var a = 1; a < imgsrc.length; a++) {
		//alert(imgsrc[a]);
		var div = '<div class="col-xs-6"><img id="' + id + a + '" src="' + imgsrc[a] + '" /></div>';
		$(".images").append(div);
	}
	
	
	//图片点击事件
	$('img[id^="img"]').click( //轮播照片点击事件
		function() {
			var imgid=$(this).attr("id");//获取到图片id
			//alert(imgid);
		});
	$('img[id^="lunbo"]').click( //相册照片点击事件
		function() {
			var lunboid=$(this).attr("id");//获取到图片id
			//alert(lunboid);
		});
});