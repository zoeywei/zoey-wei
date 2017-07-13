$(document).ready(function() {

	function edit() {
		var element = document.getElementById("jh");
		element.contentEditable = true;
		$(".midd-btn").css("display", "block");
	}

	function stopedit() {
		var element = document.getElementById("jh");
		element.contentEditable = false;
		$(".midd-btn").css("display", "none");
	}

	

	//这个是底部取消，上传之类的	
	$("#head1").click(
		function() {
			$("#head").css("display", "block");
			$("#father").css("opacity", "0.1");
		});

	//修改密码不能为空验证
	$("#upPass").click(
		function() {
			if ($(".login .oldpass").val().length == "") {
				xieyuba.message('旧密码不能为空', 1000);
			} else if ($(".login .pwd1").val().length == "") {
				xieyuba.message('新密码不能为空', 1000);
			} else if ($(".login .pwd1").val().length < 6) {
				xieyuba.message('密码必须大于6位', 1000);
			} else if ($(".login .pwd1").val().length > 12) {
				xieyuba.message('密码不能超过12位', 1000);
			} else if ($(".name-inp .pwd1").val() != $(".name-inp .pwd2").val()) {
				xieyuba.message('两次密码输入不一致', 1000);
			}
		});

	//验证输入框不能为空
	$("#vi-tex").click(
		function() {
			if ($(".login textarea").val().length == "") {
				xieyuba.message('您还没有输入反馈信息呢', 1000);
			}
		});

	//用户名更改输入不能为空
	$("#upname").click(
		function() {
			if ($(".name-inp input").val().length == "") {
				xieyuba.message('用户名不能为空', 1000);
			}
		});

	//用户名更改输入不能为空
	$("#upIphone").click(
		function() {
			 if ($(".upIphone").val().length == "") {
				xieyuba.message('验证码不能为空', 1000);
			} else{
				window.location.href = "../my/newupIphone.html";
			}
		});
		
	$("#upIphone1").click(
		function() {
			if($(".newIphone").val().length == ""){
				xieyuba.message('手机号不能为空', 1000);
			} else if ($(".newIphone").val().length != 11) {
				xieyuba.message('手机号输入有误，请检查', 1000);
			}else if ($(".upIphone").val().length == "") {
				xieyuba.message('验证码不能为空', 1000);
			} 
		});

	
		
	$(".p").click(
		function() {
			$(".btm").css("display","block");
			$("#father").css("opacity", "0.1");
		});

	//注册界面验证
	$(".reg3").click(
		function() {
			if ($(".reg1 .regIpho").val().length == "") {
				xieyuba.message('手机号不能为空', 1000);
			} else if ($(".reg1 .regIpho").val().length != 11) {
				xieyuba.message('手机号输入有误，请检查', 1000);
			} else if ($(".reg1 .code").val().length == "") {
				xieyuba.message('验证码不能为空', 1000);
			} else if ($(".reg1 .password").val().length == "") {
				xieyuba.message('密码不能为空', 1000);
			} else if ($(".reg1 .password").val().length < 6) {
				xieyuba.message('密码必须大于6位', 1000);
			} else if ($(".reg1 .password").val().length > 12) {
				xieyuba.message('密码不能超过12位', 1000);
			}
		});

	//登录界面验证
	$(".name .regbu").click(function() {
		if ($(".login .loginIphone").val().length == "") {
			xieyuba.message('手机号不能为空', 1000);
		} else if ($(".login .loginPass").val().length == "") {
			xieyuba.message('密码不能为空', 1000);
		} else {
			window.location.href = '../index.html';
		}
	});
});