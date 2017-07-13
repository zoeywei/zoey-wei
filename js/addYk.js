$(document).ready(function() {
	var div = '<div class="midd5"><div class="midd1"><div class="col-xs-8"><p><input placeholder="输入名称"/></p></div><div class="col-xs-4"><button class="delete btn btn-danger glyphicon glyphicon-minus"></button></div></div><div class="midd4" style="padding-top: 0px;"><div class="col-xs-12"><div class="midd1-1"><textarea class="midd-tex" id="introduction" placeholder="请输入详细内容"></textarea></div></div></div><div class="gray"></div></div>'
	$("#add").click(function() {
		$(".addyk").append(div);
	});
	$(document).on('click', 'button.delete', function() {
		$(this).parents(".midd5").remove();
	});

	//	$("#addimg1").click(function(){
	//		$("#addimg2").css("display","block");
	//	});
	//	$("#addimg2").click(function(){
	//		$(".deleteicon1").css("display","block");
	//		$("#addimg3").css("display","block");
	//	});
	//	$("#addimg3").click(function(){
	//		$("#addimg4").css("display","block");
	//	});
	//	$("#addimg4").click(function(){
	//		$("#addimg5").css("display","block");
	//	});
	//	$("#addimg5").click(function(){
	//		$("#addimg6").css("display","block");
	//	});
	//	$(".deleteicon").click(function(){
	//		$(this).parents('div[id^="addimg"]').css("display","none");
	//	})
	//	
	//	var a=$("#addimg1").css("display");
	//	var b="none"
	//	if(a==b){
	//		alert(a);
	//		$("#addimg000").css("display","block");
	//	}else{
	//		$("#addimg000").css("display","none");
	//	}

	var id1;
	var id2;
	var id3;
	for (var i = 1; i <= 6; i++) {
		var div1='<div class="col-xs-4" id="addimg1"><div class="midd-img"><div class="photo" id="preview'+i+'"><img id="imgpiclist'+i+'" src="../img/images/initial.png"></div><div class="deleteicon deleteicon1 glyphicon glyphicon-remove"></div></div><input class="memberphoto-upload" type="file" onchange="previewImage'+i+'(this)" /></div>'
	}
})




/*
 * <div class="col-xs-4" id="addimg1"><div class="midd-img"><div class="photo" id="preview1"><img id="imgpiclist1" src="../img/images/initial.png"></div><div class="deleteicon deleteicon1 glyphicon glyphicon-remove"></div></div><input class="memberphoto-upload" type="file" onchange="previewImage1(this)" /></div>
 * 
 * 
 * 
 * <div class="midd"><div class="midd1"><div class="col-xs-8"><p><input placeholder="输入名称"/></p></div><div class="col-xs-4"><button id="add" class="btn btn-danger glyphicon glyphicon-plus"></button><button id="delete" class="btn btn-danger glyphicon glyphicon-minus"></button></div></div><div class="midd4" style="padding-top: 0px;"><div class="col-xs-12"><div class="midd1-1"><textarea class="midd-tex" id="introduction" placeholder="请输入详细内容"></textarea></div></div></div></div>
 */