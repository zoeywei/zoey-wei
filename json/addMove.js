$(document).ready(function() {
	//发布视频判断
	$("#addMove").click(
		function() {
			if ($("#title input").val().length == "") {
				xieyuba.message('请填输入牙科标题', 1000);
			} else if ($("#url input").val().length == "") {
				xieyuba.message('请输入视频地址', 1000);
			}
		});
	$("#head1").click(
		function() {
			 //上传视频栏点击事件
			//alert("点击了上传视频栏");
		});
	//详细资料
	$("#addYk").click(function() {
		var title = $("#title").val(); //牙科名称 
		var url = $("#url").val(); //视频地址
		var head = $("#head2").val(); //设置封面
		var about=$("#about")[0].src;//视频简介
		
		//以下是创建的json文件
		var addMove_json = {
			"title": title,
			"url": url,
			"head": head,
			"about": about
		};
	});
});