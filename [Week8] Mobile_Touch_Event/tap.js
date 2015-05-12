window.addEventListener('load', function(){
    var bStartEvent = false;
    //touchstart 이벤트 발생 여부 플래그
    var bMoveEvent = false;
    //touchmove 이벤트 발생 여부 플래그

    function touchStart(e) {
        bStartEvent = true;
    }
  
    function touchMove(e) {
        if(!bStartEvent) {
            return;
            //touchstart 이벤트가 발생하지 않으면 처리하지 않는다.
        }
        bMoveEvent = true;
        //touchMove 이벤트 발생 여부를 설정한다.
    }
  
    function touchEnd(e) {
        if(bStartEvent && !bMoveEvent) {
            //클릭 이벤트로 판단한다.
            alert('Tap!');     
        }
        bStartEvent = false;
        bMoveEvent = false;
        //각 플래그 값을 초기값으로 설정한다.
    }

    document.addEventListener('touchstart', touchStart, false);
    document.addEventListener('touchmove', touchMove, false);
    document.addEventListener('touchend', touchEnd, false);
}, false);