var int_ph =function(doc, win){
    var docEle = doc.documentElement,

    resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var recalCulate = function(){
        var width = docEle.clientWidth;
        if(width > 750 ){
            width = 750;
        }
        var rem = Math.round(20 * (width / 750))
        docEle.style.fontSize = rem + 'px';

    };
    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);

}
int_ph(document, window);