
$(document).ready(function(){
	

	
	var two1={title:"aaaa",address:"bbbbb"}
	//two1应该就是参数名字，到时候替换就行了
	$("#title").html(two1.title);//牙科名称
	$("#address").html(two1.address);//牙科地址
	$("#introduction").html(two1.introduction);//牙科简介
	$("#project").html(two1.project);//诊疗项目
	
	$("#lunbo1").attr("src",two1.lonbo1);//轮播图片1
	$("#lunbo2").attr("src",two1.lonbo2);//轮播图片2
	$("#lunbo3").attr("src",two1.lonbo3);//轮播图片3
	
});
//不要忘记执行这个方法    方法名字(参数名);
