$(document).ready(function() {
	//详细资料
	$("#addYk").click(function() {
		var title = $("#title").val(); //牙科名称 
		var tel = $("#tel").val(); //联系电话
		var address = $("#address").val(); //牙科地址
		var imgpiclist1=$("#imgpiclist1")[0].src;//获取图片地址
		var imgpiclist2=$("#imgpiclist2")[0].src;//获取图片地址
		var imgpiclist3=$("#imgpiclist3")[0].src;//获取图片地址
		var imgpiclist4=$("#imgpiclist4")[0].src;//获取图片地址
		var imgpiclist5=$("#imgpiclist5")[0].src;//获取图片地址
		var imgpiclist6=$("#imgpiclist6")[0].src;//获取图片地址
		var imgpiclist7=$("#imgpiclist7")[0].src;//获取图片地址
		var imgpiclist8=$("#imgpiclist8")[0].src;//获取图片地址
		var imgpiclist9=$("#imgpiclist9")[0].src;//获取图片地址
		var project = $("#project").val(); //诊疗项目
		var introduction = $("#introduction").val(); //牙科简介
		
		//以下是创建的json文件
		var addcase_json = {
			"title": title,
			"tel": tel,
			"address": address,
			"imgpiclist1": imgpiclist1,
			"imgpiclist2": imgpiclist2,
			"imgpiclist3": imgpiclist3,
			"imgpiclist4": imgpiclist4,
			"imgpiclist5": imgpiclist5,
			"imgpiclist6": imgpiclist6,
			"imgpiclist7": imgpiclist7,
			"imgpiclist8": imgpiclist8,
			"imgpiclist9": imgpiclist9,
			"project": project,
			"introduction": introduction
		};
	});
});