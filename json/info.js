$(document).ready(function() {
	//用户名
	$("#upname").click(function() {
		var name = $("#name").val(); //用户名
		//alert(name);
		var name_json = {
			"name": name
		};
	});
	//意见反馈
	$("#vi-tex").click(function() {
		var content = $("#content").val(); //用户名
		//alert(name);
		var name_json = {
			"content": content
		};
	});
	//详细资料
	$("#more").click(function() {
		var sex = $("#sex").val(); //性别
		//alert(sex);
		var age = $("#age").val(); //年龄
		//alert(age);
		var nation = $("#nation_id").val(); //名族
		///alert(nation);
		var marriage = $("#marriage").val(); //婚姻
		//alert(marriage);
		var place = $("#place_id").val(); //籍贯
		//alert(place);
		var iphone = $("#iphone").val(); //电话
		//alert(iphone);
		var city1 = $("#city1").val(); //省份
		//alert(city1);
		var city2 = $("#city2").val(); //城市
		//alert(city2);
		var city3 = $("#city3").val(); //县区
		//alert(city3);
		var city4 = $("#city4").val(); //详细
		//alert(city4);
		var more_json = {
			"sex": sex,
			"age": age,
			"nation_id": nation,
			"marriage": marriage,
			"place_id": place,
			"iphone": iphone,
			"city1": city1,
			"city2": city2,
			"city3": city3,
			"city4": city4
		};
		alert(more_json.city1);
	});
});