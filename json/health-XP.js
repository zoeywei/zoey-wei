//var case1=JSON.parse(nativeApis.requestJSONData());
var case1={title:"aaa",keywords:"eeeee","imgpic":"img/images/lunbo.png"}
function requestJSONData(case1){
	$("#title").html(case1.title);//文章标题
	$("#keywords").html(case1.keywords);//关键字
	$("#click").html(case1.click+"人阅读");//阅读数
	$("#author").html(case1.author);//作者
	$("#imgpic").attr("src",case1.imgpic);//图片
	$("#introduction").html("内容简介:"+case1.introduction);//文章简介
}
requestJSONData(case1);