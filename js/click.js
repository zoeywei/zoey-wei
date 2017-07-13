$(document).ready(function() {
	$("select").click(function() {
		$(".midd").css("opacity", "0");
	});
});

$(document).ready(function() {
	//首页牙科企业点击事件
	$("#yake-1").click(
		function() {
			window.location.href = "two.html";
		});

	$("#yake-2").click(
		function() {
			window.location.href = "two.html";
		});

	$("#yake-3").click(
		function() {
			window.location.href = "two.html";
		});

	$("#yake-4").click(
		function() {
			window.location.href = "two.html";
		});

	$("#search").click(
		function() {
			window.location.href = "login/search.html";
		});

	$("#map").click(
		function() {
			window.location.href = "map.html";
		});

	//two.html 牙科详情页面 点击事件
	$("#shaing").click(
		function() {
			$("#share").css("display", "block");
			$("#father").css("opacity", "0.1");
		});

	$("#chat").click(
		function() {
			window.location.href = "doctor/chat.html";
		});

	$("#iphone").click(
		function() {
			//点击电话按钮
		});

	//health.html 保健知识页面 点击事件
	$("#health1").click(
		function() {
			window.location.href = "health-XP.html";
		});
	$("#health2").click(
		function() {
			window.location.href = "health-XP.html";
		});
	$("#health3").click(
		function() {
			window.location.href = "health-XP.html";
		});
	$("#health4").click(
		function() {
			window.location.href = "health-XP.html";
		});

	//health-XP保健知识列表 点击事件
	$("#chapter").click( //前言
		function() {
			window.location.href = "health-XP-1.html";
		});

	$('div[id^="chapter"]').click( //章节.
		function() {
			var id = $(this).attr("id"); //获取到章节id
			//alert(id);
			window.location.href = "health-XP-1.html";
		});

	$("#chapterover").click( //后记 
		function() {
			window.location.href = "health-XP-1.html";
		});
	//myindex 个人中心主页 点击事件
	$("#systemInfo").click(
		function() {
			window.location.href = "../my/systemInfo.html";
		});

	$("#set").click(
		function() {
			window.location.href = "../my/set.html";
		});

	$("#login").click(
		function() {
			window.location.href = "../login/login.html";
		});
	$("#info").click(
		function() {
			window.location.href = "../my/info.html";
		});
	$("#doctorList").click(
		function() {
			window.location.href = "../doctor/doctorList.html";
		});
	$("#casr-my").click(
		function() {
			window.location.href = "../case/case-my.html";
		});
	$("#view").click(
		function() {
			window.location.href = "../my/view.html";
		});
	$("#setindex").click(
		function() {
			window.location.href = "../my/set.html ";
		});
	$("#weichat").click(
		function() {
			//alert("点击了微信");
		});
	$("#friends").click(
		function() {
			//alert("点击了朋友圈");
		});
	$("#sina").click(
		function() {
			//alert("点击了新浪");
		});
	$("#qq").click(
		function() {
			//alert("点击了qq");
		});

	//systemInfo 系统消息 点击事件
	$("#systemInfoDet1").click(
		function() {
			window.location.href = "systemInfoDet.html";
		});
	$("#systemInfoDet2").click(
		function() {
			window.location.href = "systemInfoDet.html";
		});
	$("#systemInfoDet3").click(
		function() {
			window.location.href = "systemInfoDet.html";
		});
	$("#systemInfoDet4").click(
		function() {
			window.location.href = "systemInfoDet.html";
		});
	//点击之后文字变灰
	$(".id").click(
		function() {
			$(this).addClass("Noread");
		});

	//info 个人信息 点击事件

	$("#upName").click(
		function() {
			window.location.href = "upName.html";
		});
	$("#upIphone1").click(
		function() {
			window.location.href = "upIphone.html";
		});
	$("#detalis").click(
		function() {
			window.location.href = "details.html";
		});
	$("#forPass").click(
		function() {
			window.location.href = "../my/forPassword.html";
		});
	// doctorList 医生聊天列表 点击事件
	$("#chat1").click(
		function() {
			window.location.href = "../doctor/chat.html";
		});

	// case-my 个人病例列表 点击事件
	$("#case1").click(
		function() {
			window.location.href = "case.html";
		});

	//set 设置页面 点击事件
	$("#anenst").click(
		function() {
			window.location.href = "../my/anenst.html";
		});
	$("#edition").click(
		function() {
			//版本更新的点击
		});

	//companyindex.html 牙科企业页面 点击事件
	$("#two").click(
		function() {
			window.location.href = "../two.html";
		});
	$("#case-doc").click(
		function() {
			window.location.href = "../case/caseindex.html";
		});

	//caseindex 个人病例列表 点击事件
	$("#case1-doc").click(
		function() {
			window.location.href = "case.html";
		});

	//movelist 视频列表 点击事件
	$("#addmove").click(
		function() {
			window.location.href = "addMove.html";
		});
});