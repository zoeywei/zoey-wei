$(document).ready(function () {
    //搜索框区域
    $(".search-text").focus(function () {
        $(this).attr("value", "");
        $(".header-search-drop").show();
        $(".header-search-drop-item").mouseover(function () {
            $(this).css('background-color', '#24baf1');
            $(this).children('.two').css('background-color', '#24baf1');
        });
        $(".header-search-drop-item").mouseout(function () {
            $(this).css('background-color', '');
            $(this).children('.two').css('background-color', '')
        });
    })

    $(".search-text").blur(function () {
        $(".header-search-drop").hide();
    })
    //搜索框区域结束

    //app隐藏区域
    $(".app").mouseover(function () {
        $('.app-drop').show();

    })
    $(".app").mouseout(function () {
        $('.app-drop').hide();
    })
    $('.app-drop').mouseover(function () {
        $(this).show();
    })
    $('.app-drop').mouseout(function () {
        $(this).hide();
    })
    //app隐藏区域结束

    //轮播版区域
    var timer = "";
    var i = 0;
    $(".small-pic li").mouseover(function () {
        clearInterval(timer);
        var backgroundImg = $(this).find('img').attr('backImg');
        var backgroundColor = $(this).find('img').attr('backColor');
        var background = 'url(' + backgroundImg + ')' + ' center  no-repeat ' + backgroundColor;
        i = $(this).index();
        $(".small-pic li").eq(i).addClass('hover').siblings().removeClass('hover');
        $("#focus-background").css({background: background});
        i++;
    })

    $(".small-pic li").mouseout(function () {
        timer = setInterval(movePic, 1000);
    })

    timer = setInterval(movePic, 1000);

    function movePic() {
        if (i > 8) {
            i = 0;
        }
        var backgroundImg = $(".small-pic li").eq(i).find('img').attr('backImg');
        var backgroundColor = $(".small-pic li").eq(i).find('img').attr('backColor');
        var background = 'url(' + backgroundImg + ')' + ' center  no-repeat ' + backgroundColor;
        $(".small-pic li").eq(i).addClass('hover').siblings().removeClass('hover');
        $("#focus-background").css({background: background});
        i++;
    }

    //轮播版区域结束

    //电视剧区域轮播版
    var timerDsj = "";
    var n = 0;
    timerDsj = setInterval(dsjMove, 3000);

    $("#dianshiju .circle li").mouseover(function () {
        clearInterval(timerDsj);
        var backImg = $(this).attr("backImg");
        $('#dianshiju .pic-big img').attr("src", backImg);
        n = $(this).index();
        $("#dianshiju .circle li").eq(n).addClass("chose").siblings("li").removeClass("chose");
        $("#dianshiju .text a").eq(n).show().siblings("a").hide();
        $("#dianshiju .text p").eq(n).show().siblings("p").hide();
        $("#dianshiju .text span").eq(n).show().siblings("span").hide();
        n++;
    })

    $("#dianshiju .circle li").mouseout(function () {
        timerDsj = setInterval(dsjMove, 3000);
    })

    function dsjMove() {
        if (n > 2) {
            n = 0;
        }
        var backImg = $('#dianshiju .circle li').eq(n).attr("backImg");
        $('#dianshiju .pic-big img').attr("src", backImg);
        $("#dianshiju .text a").eq(n).show().siblings("a").hide();
        $("#dianshiju .text p").eq(n).show().siblings("p").hide();
        $("#dianshiju .text span").eq(n).show().siblings("span").hide();
        $("#dianshiju .circle li").eq(n).addClass("chose").siblings("li").removeClass("chose");
        n++;
    }

    $("#dianshiju .no-background").mouseover(function () {
        $(this).addClass("backCol");
        $("#dianshiju .pic-big span").show();
    })

    $("#dianshiju .no-background").mouseout(function () {
        $(this).removeClass("backCol");
        $("#dianshiju .pic-big span").hide();
    })


    $("#dianshiju .pic-big span").mouseover(function () {
        $(this).css("background-position-x", "-79px");
        $("#dianshiju .no-background").addClass("backCol");
        $("#dianshiju .pic-big span").show();
    })

    $("#dianshiju .pic-big span").mouseout(function () {
        $(this).css("background-position-x", "-15px");
        $("#dianshiju .pic-big span").hide();
        $("#dianshiju .no-background").removeClass("backCol");
    })


    $("#dianshiju .pic-big>span").click(function () {
        clearInterval(timerDsj);
        var i = $(this).index();
        console.log(i);
        if (i == 2) {
            n--;
            console.log(n);
            if (n < 0) {
                n = 2;
            }
            var Li = $("#dianshiju .circle li").eq(n);
            var backImg = Li.attr("backImg");
            $('#dianshiju .pic-big img').attr("src", backImg);
            Li.addClass("chose").siblings("li").removeClass("chose");
            $("#dianshiju .text a").eq(n).show().siblings("a").hide();
            $("#dianshiju .text p").eq(n).show().siblings("p").hide();
            $("#dianshiju .text span").eq(n).show().siblings("span").hide();

        } else if (i == 3) {
            n++;
            if (n > 2) {
                n = 0;
            }
            Li = $("#dianshiju .circle li").eq(n);
            backImg = Li.attr("backImg");
            $('#dianshiju .pic-big img').attr("src", backImg);
            Li.addClass("chose").siblings("li").removeClass("chose");
            $("#dianshiju .text a").eq(n).show().siblings("a").hide();
            $("#dianshiju .text p").eq(n).show().siblings("p").hide();
            $("#dianshiju .text span").eq(n).show().siblings("span").hide();
        }
        timerDsj = setInterval(dsjMove, 3000);
    })


    //电视剧区域轮播版结束

    //个人中心区域
    var j = 0;
    var move = 1440;
    $(".btn-next").click(function () {
        var n=$(this).siblings("div").eq(0).children("ul").length-1;
        j++;
        if (j == n) {
            $(".btn-next").hide();
        }
        $(".btn-pre").show();
        $(".move").css("margin-left", -move * j + "px");
    })
    $(".btn-pre").click(function(){
        j--;
        console.log(j);
        if(j==0){
            $(".btn-pre").hide();
        }
        $(".btn-next").show();
        $(".move").css("margin-left", -move * j + "px");
    })
    $(".btn-pre").mousemove(function(){
        $(".btn-pre p").css("margin-left","-65px");
    })
    $(".btn-pre").mouseout(function(){
        $(".btn-pre p").css("margin-left","0px");
    })
    $(".btn-next").mousemove(function(){
        $(".btn-next p").css("margin-left","-65px");
    })
    $(".btn-next").mouseout(function(){
        $(".btn-next p").css("margin-left","0px");
    })

    $("#center .title-left>a").mousemove(function(){
        $(this).addClass("border-bot").siblings().removeClass("border-bot");
        var i="."+$(this).attr("i");
        $(i).show().siblings().hide();
    })

    //个人中心区域结束

    //动漫区域轮播版
    var timerDm = "";
    var m = 0;
    timerDm = setInterval(dmMove, 3000);

    $("#dongman .circle li").mouseover(function () {
        clearInterval(timerDm);
        var backImg = $(this).attr("backImg");
        $('#dongman .pic-big img').attr("src", backImg);
        m = $(this).index();
        $("#dongman .circle li").eq(m).addClass("chose").siblings("li").removeClass("chose");
        $("#dongman .text a").eq(m).show().siblings("a").hide();
        $("#dongman .text p").eq(m).show().siblings("p").hide();
        $("#dongman .text span").eq(m).show().siblings("span").hide();
        m++;
    })

    $("#dongman .circle li").mouseout(function () {
        timerDm = setInterval(dmMove, 3000);
    })

    function dmMove() {
        if (m > 2) {
            m = 0;
        }
        var backImg = $('#dongman .circle li').eq(m).attr("backImg");
        $('#dongman .pic-big img').attr("src", backImg);
        $("#dongman .text a").eq(m).show().siblings("a").hide();
        $("#dongman .text p").eq(m).show().siblings("p").hide();
        $("#dongman .text span").eq(m).show().siblings("span").hide();
        $("#dongman .circle li").eq(m).addClass("chose").siblings("li").removeClass("chose");
        m++;
    }

    $("#dongman .no-background").mouseover(function () {
        $(this).addClass("backCol");
        $("#dongman .pic-big span").show();
    })

    $("#dongman .no-background").mouseout(function () {
        $(this).removeClass("backCol");
        $("#dongman .pic-big span").hide();
    })


    $("#dongman .pic-big span").mouseover(function () {
        $(this).css("background-position-x", "-79px");
        $("#dongman .no-background").addClass("backCol");
        $("#dongman .pic-big span").show();
    })

    $("#dongman .pic-big span").mouseout(function () {
        $(this).css("background-position-x", "-15px");
        $("#dongman .pic-big span").hide();
        $("#dongman .no-background").removeClass("backCol");
    })


    $("#dongman .pic-big>span").click(function () {
        clearInterval(timerDm);
        var i = $(this).index();
        console.log(i);
        if (i == 2) {
            m--;
            if (m < 0) {
                m = 2;
            }
            var Li = $("#dongman .circle li").eq(m);
            var backImg = Li.attr("backImg");
            $('#dongman .pic-big img').attr("src", backImg);
            Li.addClass("chose").siblings("li").removeClass("chose");
            $("#dongman .text a").eq(m).show().siblings("a").hide();
            $("#dongman .text p").eq(m).show().siblings("p").hide();
            $("#dongman .text span").eq(m).show().siblings("span").hide();

        } else if (i == 3) {
            m++;
            if (m > 2) {
                m = 0;
            }
            Li = $("#dongman .circle li").eq(m);
            backImg = Li.attr("backImg");
            $('#dongman .pic-big img').attr("src", backImg);
            Li.addClass("chose").siblings("li").removeClass("chose");
            $("#dongman .text a").eq(m).show().siblings("a").hide();
            $("#dongman .text p").eq(m).show().siblings("p").hide();
            $("#dongman .text span").eq(m).show().siblings("span").hide();
        }
        timerDm = setInterval(dmMove, 3000);
    })

    //动漫区域轮播版结束

    //综艺区域
    var timerZy = "";
    var k = 0;
    timerZy = setInterval(zyMove, 3000);

    $("#zongyi .circle li").mouseover(function () {
        clearInterval(timerZy);
        var backImg = $(this).attr("backImg");
        $('#zongyi .pic-big img').attr("src", backImg);
        k = $(this).index();
        $("#zongyi .circle li").eq(k).addClass("chose").siblings("li").removeClass("chose");
        $("#zongyi .text a").eq(k).show().siblings("a").hide();
        $("#zongyi .text p").eq(k).show().siblings("p").hide();
        $("#zongyi .text span").eq(k).show().siblings("span").hide();
        k++;
    })

    $("#zongyi .circle li").mouseout(function () {
        timerZy = setInterval(zyMove, 3000);
    })

    function zyMove() {
        if (k > 1) {
            k = 0;
        }
        var backImg = $('#zongyi .circle li').eq(k).attr("backImg");
        $('#zongyi .pic-big img').attr("src", backImg);
        $("#zongyi .text a").eq(k).show().siblings("a").hide();
        $("#zongyi .text p").eq(k).show().siblings("p").hide();
        $("#zongyi .text span").eq(k).show().siblings("span").hide();
        $("#zongyi .circle li").eq(k).addClass("chose").siblings("li").removeClass("chose");
        k++;
    }

    $("#zongyi .no-background").mouseover(function () {
        $(this).addClass("backCol");
        $("#zongyi .pic-big span").show();
    })

    $("#zongyi .no-background").mouseout(function () {
        $(this).removeClass("backCol");
        $("#zongyi .pic-big span").hide();
    })


    $("#zongyi .pic-big span").mouseover(function () {
        $(this).css("background-position-x", "-79px");
        $("#zongyi .no-background").addClass("backCol");
        $("#zongyi .pic-big span").show();
    })

    $("#zongyi .pic-big span").mouseout(function () {
        $(this).css("background-position-x", "-15px");
        $("#zongyi .pic-big span").hide();
        $("#zongyi .no-background").removeClass("backCol");
    })


    $("#zongyi .pic-big>span").click(function () {
        clearInterval(timerZy);
        var i = $(this).index();
        console.log(i);
        if (i == 2) {
            k--;
            if (k < 0) {
                k = 1;
            }
            var Li = $("#zongyi .circle li").eq(k);
            var backImg = Li.attr("backImg");
            $('#zongyi .pic-big img').attr("src", backImg);
            Li.addClass("chose").siblings("li").removeClass("chose");
            $("#zongyi .text a").eq(k).show().siblings("a").hide();
            $("#zongyi .text p").eq(k).show().siblings("p").hide();
            $("#zongyi .text span").eq(k).show().siblings("span").hide();

        } else if (i == 3) {
            k++;
            if (k > 1) {
                k = 0;
            }
            Li = $("#zongyi .circle li").eq(k);
            backImg = Li.attr("backImg");
            $('#zongyi .pic-big img').attr("src", backImg);
            Li.addClass("chose").siblings("li").removeClass("chose");
            $("#zongyi .text a").eq(k).show().siblings("a").hide();
            $("#zongyi .text p").eq(k).show().siblings("p").hide();
            $("#zongyi .text span").eq(k).show().siblings("span").hide();
        }
        timerZy = setInterval(zyMove, 3000);
    })

    //综艺区域结束

    //明星空间区域
    var timerStar = "";
    var q = 0;
    timerStar = setInterval(starMove, 3000);

    $("#starZone .circle li").mouseover(function () {
        clearInterval(timerStar);
        var backImg = $(this).attr("backImg");
        $('#starZone .pic-big img').attr("src", backImg);
        q = $(this).index();
        $("#starZone .circle li").eq(q).addClass("chose").siblings("li").removeClass("chose");
        $("#starZone .bg-text p").eq(q).show().siblings("p").hide();
        q++;
    })

    $("#starZone .circle li").mouseout(function () {
        timerStar = setInterval(starMove, 3000);
    })

    function starMove() {
        if (q > 2) {
            q = 0;
        }
        var backImg = $('#starZone .circle li').eq(q).attr("backImg");
        $('#starZone .pic-big img').attr("src", backImg);
        $("#starZone .bg-text p").eq(q).show().siblings("p").hide();
        $("#starZone .circle li").eq(q).addClass("chose").siblings("li").removeClass("chose");
        q++;
    }

    $("#starZone .no-background").mouseover(function () {
        $(this).addClass("backCol");
        //$("#starZone .btn").show();
    })

    $("#starZone .no-background").mouseout(function () {
        $(this).removeClass("backCol");
        //$("#starZone .btn").hide();
    })


    $("#starZone .btn").mouseover(function () {
        $(this).css("background-position-x", "-79px");
        $("#starZone .no-background").addClass("backCol");
    })

    $("#starZone .btn").mouseout(function () {
        $(this).css("background-position-x", "-15px");
        $("#starZone .no-background").removeClass("backCol");
    })


    //$("#starZone .btn").click(function () {
    //    clearInterval(timerStar);
    //    var i = $(this).index();
    //    console.log(i);
    //    if (i == 1) {
    //        q--;
    //        if (q < 0) {
    //            q = 1;
    //        }
    //        var Li = $("#starZone .circle li").eq(q);
    //        var backImg = Li.attr("backImg");
    //        $('#starZone .pic-big img').attr("src", backImg);
    //        Li.addClass("chose").siblings("li").removeClass("chose");
    //        $("#starZone .bg-text p").eq(q).show().siblings("p").hide();
    //
    //    } else if (i == 3) {
    //        q++;
    //        if (q > 1) {
    //            q = 0;
    //        }
    //        Li = $("#starZone .circle li").eq(q);
    //        backImg = Li.attr("backImg");
    //        $('#starZone .pic-big img').attr("src", backImg);
    //        Li.addClass("chose").siblings("li").removeClass("chose");
    //        $("#starZone .bg-text p").eq(q).show().siblings("p").hide();
    //    }
    //    timerStar = setInterval(starMove, 3000);
    //})

    //明星空间区域结束


})