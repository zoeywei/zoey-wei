$(document).ready(function() {
	//详细资料
	$("#addcase").click(function() {
		var sex = $("#sex").val(); //性别
		var age = $("#age").val(); //年龄
		var nation = $("#nation_id").val(); //名族
		var marriage = $("#marriage").val(); //婚姻
		var place = $("#place_id").val(); //籍贯
		var iphone = $("#iphone").val(); //电话
		var city1 = $("#city1").val(); //省份
		var city2 = $("#city2").val(); //城市
		var city3 = $("#city3").val(); //县区
		var city4 = $("#city4").val(); //详细
		var first_time = $("#beginTime").val(); //初诊日期
		var symptom = $("#symptom").val(); //症状
		var case_history = $("#case_history").val(); //病史
		var now_result = $("#now_result").val(); //目前出现的诊断结果
		var createtime = $("#beginTime2").val(); //现在时间
		var title = $("#title").val(); //牙科名称
		var doctor = $("#doctor").val(); //就诊医师
		var createtime = $("#beginTime2").val(); //现在时间
		//以下是创建的json文件
		var addcase_json = {
			"sex": sex,
			"age": age,
			"nation_id": nation,
			"marriage": marriage,
			"place_id": place,
			"iphone": iphone,
			"city1": city1,
			"city2": city2,
			"city3": city3,
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