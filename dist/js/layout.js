
// 设置移动设备缩放比
(function(){
    var size = 50;
    var iScale = 1;
    iScale = iScale / window.devicePixelRatio;
    // 初始的，最小的，最大的缩放比例都设置成一样的
    document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">');
//  // 设置字体
    if(window.devicePixelRatio <= 1.5){
        document.getElementsByTagName('html')[0].style.fontSize = size + 'px';
    }else if(window.devicePixelRatio > 1.5 && window.devicePixelRatio <= 2.5){
        document.getElementsByTagName('html')[0].style.fontSize = size*2 + 'px';
    }else {
        document.getElementsByTagName('html')[0].style.fontSize = size*3.5 + 'px';
    }
    document.write('<link rel="stylesheet" type="text/css" href="dist/css/layout.css" />');
})();

// 公共头部
$(function(){
	var head = $("header .head");
	if(head.parent().hasClass('bg-white')){
		head.addClass('bg-white');
	}else if(head.parent().hasClass('bg-red')){
		head.addClass('bg-red');
	}
})
   
// 移动WEB的下拉菜单  +  筛选     
// 移动WEB的下拉菜单
function dropdownMenuShow (event) {
	event.preventDefault();
	var targobj = $(this).parent().next();
	if(targobj.css("display") == "none"){
		targobj.css('display', 'block').animate({'opacity': '1'}, 300);
		targobj.find('.dropdown-menu-box').addClass('dropdown-menu-active');
	}
}
function dropdownMenuHidden (event){
	event.preventDefault();
	$(".dropdown-menu-bg .dropdown-menu-box").removeClass('dropdown-menu-active');
	setTimeout(function(){
		$(".dropdown-menu-bg").css('display', 'none').animate({'opacity': '0'}, 300);
	}, 300);
}
$(function(){
    // 移动WEB的下拉菜单引用
	$(".dropdown .dropdown-btn").on('touchend', dropdownMenuShow);

	$(".opacitybg").on('touchend', dropdownMenuHidden);

	$(".dropdown-menu-bg .cancel").on('touchend', dropdownMenuHidden);

	// $(".dropdown-menu-list li").on('touchend',dropdownMenuHidden);
	
	//判断下拉列表是滚动还是点击，选择是否隐藏下拉菜单
	var startTY,distanceY;
	window.addEventListener('touchstart',function(event){
		var touchobj = event.touches[0];
		startTY = touchobj.clientY;
	},false);
	window.addEventListener('touchend',function(event){
		var targetParent = event.target.parentNode.className;
		var strTP = targetParent.split(' ');
		var targetNum = 0;
		for(var i = 0; i < strTP.length; i++){
			if(strTP[i] == 'dropdown-menu-list'){
				targetNum = 1;
			}
		}
		var touchobj = event.changedTouches[0];
		var endTY = touchobj.clientY;
		distanceY = endTY - startTY;
		if( targetNum == 1 && Math.abs(distanceY) < 20){
			dropdownMenuHidden(event);
		}
	},false);

	$(".dropdown-menu-list li").on("touchend", function(event) {
		event.preventDefault();
		if($(this).hasClass('confirm-addr')){//确认订单页面-收货地址
			$(this).parent().parent().parent().parent().find('.address-dropdown a').html($(this).html());
			return;
		}
		if($(this).hasClass('choseaddr')){
			var addr =  $(this).find('.getaddress .addr').html();
			$(this).parent().parent().parent().parent().find('.dropdown a span:first').html(addr);
			return;
		}
		$(this).parent().parent().parent().parent().find('.dropdown a span:first').html($(this).html());
	});
	$(".opacitybg").on('touchmove', function(event) {
		event.preventDefault();
		event.stopPropagation();
	});

	// 筛选
	$(".filter-nav-detail").on('touchend', function(event) {
		event.preventDefault();
		$(".filter-nav-detail").removeClass('active');
		$(this).addClass('active');
		var snum = 0;
		var he = $(window).height();
		$(".filters .filt-eachinner .inner-flitbg").css({
			display: 'block',
			height: he
		});
		var targ = $(".filters .inner-cont").eq($(this).index());
		if(targ.css('display') == "none"){
			$(".filters .filt-eachinner .inner-cont").hide();
			targ.slideDown();
			snum = 1;
		}else{
			targ.slideUp();
			$(".filters .inner-flitbg").css('display', 'none');
		}
		$(".filters .inner-flitbg").on('click touchend', function(event) {
			event.preventDefault();
			$(this).css('display', 'none');
			$(".filters .inner-cont").slideUp();
		});
		if(snum == 1){
			$(".filt-eachinner").bind('touchmove', function(event) {
				event.preventDefault();
				event.stopPropagation();
			});
		}
	});
});

// 激活标签的伪类效果
$(function(){
	// 激活标签的伪类效果
	function getActive(obj) {
	    var targ = obj;
	    for (var i = 0; i < targ.length; i++) {
	        targ[i].addEventListener('touchstart', function() {}, false);
	    }
	}
	// 激活标签的伪类效果
    var onsales = $(".onsales .sales-inner");
    getActive(onsales);
    var recommend = $(".recommend .reco-in");
    getActive(recommend);
    getActive($(".exchange"));
  
})

// 设置列表内容的边距
$(function() {
    // 去掉列表内容最后两个元素的底边距
    function cutBotttom(obj) {
        var len = obj.length;
        if(len % 2 == 1){
        	obj.eq(len - 1).css('margin-bottom', '0');
        }
        if(len % 2 == 0){
        	obj.eq(len - 1).css('margin-bottom', '0');
        	obj.eq(len - 2).css('margin-bottom', '0');
        }
    }
    cutBotttom($('.recommend .reco-in'));
    cutBotttom($('.onsales .sales-inner'));
    cutBotttom($(".integral-product .list-wrap"));

    // 设置列表内容的左右边距
    function listPadding (obj){
    	for(var i = 0; i < obj.length; i++){
    		if(i % 2 == 0){
    			obj.eq(i).css('padding-right', '.1rem');
    		}else{
    			obj.eq(i).css('padding-left', '.1rem');
    		}
    	}
    }
    listPadding($(".recommend .list-wrap"));
    listPadding($(".onsales .list-wrap"));
    listPadding($(".integral-product .list-wrap"));

});

// 详情中的图文详情和累计评分选项卡
$(function(){
	$(".product-nav-cont").on('click touchend', function(event) {
		event.preventDefault();
		$(".product-nav-cont").removeClass('active');
		$(this).addClass('active');

		var ind = $(this).index();
		$(".product-detail-list").addClass('hidden');
		$(".product-detail-list").eq(ind).removeClass('hidden');
	});
});

// div中的图片居中
$(function(){
	function imgCenter(obj){
		obj.each(function(index) {
			var imgWidth = $(this).width()/2;
			$(this).css({
				'left': '50%',
				'margin-left': -imgWidth
			});
		});
	}
	// imgCenter($('.recommend .reco-img'));
	// imgCenter($('.onsales .sale-img'));
});

// 滚动时头部和筛选的显示与隐藏
$(function(){
	$(".filters").css('margin-bottom', '0').parent().addClass('filterbox').css({
		position: 'relative',
		height: '1rem'
	});
});
	
// onloading加载中...
var judgeOnload = function(content,parent){
	var parent = parent;      /*添加‘加载中DIV’和每条内容的父块*/
	var lastcontentTop = parent.offset().top;
	var lastcontentHeight = parent.outerHeight();
	var lastbottom = lastcontentTop + lastcontentHeight;
	var viewHeight = $(window).height();
	var scrollTop = $(document).scrollTop();
	if(lastbottom <= scrollTop + viewHeight && $(document).height() > viewHeight ){
		return true;
	}
}
var addOnload = function(content,parent){
	var content = content;    /*列表的每一条*/
	var parent = parent;      /*添加‘加载中DIV’和每条内容的父块*/
	if(judgeOnload(content,parent)){
		setTimeout(function(){
			if($(".onloading").length > 0){
				return;
			}
			var loading = "<div class='onloading'>加载中...</div>";
			parent.parent().append(loading);
		}, 600);
	}
}
// 以下注释区域内容只为模板  要用的在需要的页面上写这段
/*$(document).scroll(function(){
	var content = $(".club-list .club-inner-list");  //列表的每一条
	var parent = $(".club-list");  //添加‘加载中DIV’和每条内容的父块
	addOnload(content,parent);
});*/
// 以上注释区域内容只为模板  要用的在需要的页面上写这段

//滚动时头部固定导航的背景颜色渐变
// function topNavColor(scrollHeight){
// 	if($("#oilbanner").length > 0){
// 		var scrollTopShow = $("#oilbanner").outerHeight();
// 		var topHeight = $("header .head").height();
// 		if(scrollHeight > scrollTopShow - topHeight){
// 			if($(".indexhead").length > 0){
// 				$("header .head").css('background-color', 'rgba(255,0,0,0.5)');
// 			}
// 			else{
// 				$("header .head").css('background-color', 'rgba(255,0,0,1)');
// 			}
// 		}else{
// 			$("header .head").css('background-color', 'rgba(255,0,0,0)');
// 		}
// 	}
// }
// $(document).scroll(function(){
// 	var scrollHeight = $(document).scrollTop();
// 	topNavColor(scrollHeight);
// });

//收货地址管理页面 选中单选框JS
/*$(function(){
	$(".address-radio").on('touchend', function(event) {
		event.preventDefault();
		$(".address-radio").find('input').removeClass('active');
		$(this).find('input').addClass('active');
	});
});*/
