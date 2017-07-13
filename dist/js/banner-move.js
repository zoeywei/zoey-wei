$(function(){
    // 轮播手指滑动
    var isTouchMove, startTx, startTy;
    var oilBanner = document.getElementById("oilbanner");
    oilBanner.addEventListener('touchstart', function(e) {
        var touches = e.touches[0];
        startTx = touches.clientX;
        isTouchMove = false;
    }, false);
    oilBanner.addEventListener('touchmove', function(e) {
        isTouchMove = true;
        // e.preventDefault();
    }, false);
    oilBanner.addEventListener('touchend', function(e) {
        if (!isTouchMove) {
            return;
        }
        var touches = e.changedTouches[0],
            endTx = touches.clientX;
        distanceX = startTx - endTx;
        isSwipe = false;
        if (distanceX > 20) {
            // console.log( 'fire swipe left event' );
            isSwipe = 1;
        } else if (distanceX < -20) {
            // console.log( 'fire swipe right event' );    
            isSwipe = 2;
        }
        if (isSwipe == 1) {
            // console.log( 'fire swipe event' );
            $("#oilbanner").carousel('next')
        } else if (isSwipe == 2) {
            $("#oilbanner").carousel('prev')
        }
    }, false);
});