
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
    $(".text a").eq(n).show().siblings("a").hide();
    $(".text p").eq(n).show().siblings("p").hide();
    $(".text span").eq(n).show().siblings("span").hide();
    $(".circle li").eq(n).addClass("chose").siblings("li").removeClass("chose");
    n++;
}

$("#dianshiju .no-background").mouseover(function () {
    $(this).addClass("backCol");
    $("#dianshiju .pic-big span").show();
})

$("#dianshiju .no-background").mouseout(function () {
    $(this).removeClass("backCol");
    $(".pic-big span").hide();
})


$(".pic-big span").mouseover(function () {
    $(this).css("background-position-x", "-79px");
    $(".no-background").addClass("backCol");
    $(".pic-big span").show();
})

$(".pic-big span").mouseout(function () {
    $(this).css("background-position-x", "-15px");
    $(".pic-big span").hide();
    $(".no-background").removeClass("backCol");
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

