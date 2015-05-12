window.addEventListener('load', function(){
 
    var box = document.getElementById('status');

    document.addEventListener('touchstart', function(e){
        var touchPoint = e.changedTouches[0];
        ShowStatus(touchPoint, 'Touch Start');
    }, false);

    document.addEventListener('touchmove', function(e){
        var touchPoint = e.changedTouches[0];
        ShowStatus(touchPoint, 'Touch Move');
        e.preventDefault();
    }, false);

    document.addEventListener('touchend', function(e){
        var touchPoint = e.changedTouches[0];
        ShowStatus(touchPoint, 'Touch End');
        e.preventDefault();
    }, false);

    function ShowStatus(touchPoint, touchEvent) {
        cx = parseInt(touchPoint.clientX);
        cy = parseInt(touchPoint.clientY);
        px = parseInt(touchPoint.pageX);
        py = parseInt(touchPoint.pageY);
        sx = parseInt(touchPoint.screenX);
        sy = parseInt(touchPoint.screenY);
        box.innerHTML = '<span>Status: ' + touchEvent + '<br>'
                            + 'ClientX: ' + cx + 'px<br>'
                            + 'ClientY: ' + cy + 'px<br>'
                            + 'PageX: ' + px + 'px<br>'
                            + 'PageY: ' + py + 'px<br>'
                            + 'ScreenX: ' + sx + 'px<br>'
                            + 'ScreenY: ' + sy + 'px<br>'
                        + '</span>'
    }
});