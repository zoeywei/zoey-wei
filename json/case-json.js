$(document).ready(function() {
	//详细资料
	$("#okcase").click(function() {
		var sex = $("#sex").text(); //性别
		var age = $("#age1").text(); //年龄
		var nation = $("#nation_id").text(); //名族
		var marriage = $("#marriage").text(); //婚姻
		var place = $("#place_id").text(); //籍贯
		var iphone = $("#iphone").text(); //电话
		var city4 = $("#city4").text(); //详细
		var first_time = $("#first_time").text(); //初诊日期
		var symptom = $("#symptom").text(); //症状
		var case_history = $("#case_history").text(); //病史
		var now_result = $("#now_result").text(); //目前出现的诊断结果
		var createtime = $("#createtime").text(); //现在时间
		var title = $("#title").text(); //牙科名称  
		var doctor = $("#doctor").text(); //就诊医师
		var createtime = $("#beginTime2").text(); //现在时间
		//以下是创建的json文件
		var okcase_json = {
			"sex": sex,
			"age": age,
			"nation_id": nation,
			"marriage": marriage,
			"place_id": place,
			"iphone": iphone,
			"city4": city4,
			"first_time": first_time,
			"symptom": symptom,
			"case_history": case_history,
			"now_result": now_result,
			"createtime": createtime,
			"title": title,
			"doctor": doctor,
			"createtime": createtime
		};
	});
});