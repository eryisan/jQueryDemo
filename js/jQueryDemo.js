$(document).ready(function () {
    var index = 0;
    // var swiper = function() {
    //     $("img").eq(index)
    //     .css({"opacity" : "1"})
    //     .siblings().css({"opacity" : "0"});
    // };
    var swiper = function() {
        $("img").eq(index)
        .stop().fadeIn("slow")
        .siblings()
        .stop().fadeOut("slow")
    };
    var init = function() {
        index = 0;
        swiper();
    };
    init();

    var mouseEvent = function(event) {
        event.stopPropagation();
        if($(this)[0].nodeName == "A"){
            index = $(this).index();
        }else{
            return true;
        }
        swiper();
    };
    var keyEvent = function() {
        event.stopPropagation();
        if(event.keyCode == 37){
            index = index > 0 ? --index :$("a").length-1;
        }else if(event.keyCode == 39){
            index = index < $("a").length -1 ? ++index : 0;
        }else{
            return true;
        }
        swiper();
    };
    var events = {
        mouseenter : mouseEvent,
        keydown : keyEvent
    };
    $("a").add(document).on(events);
    // $("a").click(function () {
    //     $("img")
    //         .eq($(this).index())
    //         .css({ opacity: "1" })
    //         .siblings()
    //         .css({ opacity: "0" });
    // });
    // var alinks = $("a");
    // for(var i = alinks.length-1;i>=0;i--){
    //     // alinks[i].style.background = "red";
    //     // alinks[i].style.border = "5px solid yellow";
    //     // alinks[i].style.color = "#fff";
    //     alinks.eq(i).css({
    //         "background" : "red",
    //         "border" : "5px solid yellow",
    //         "color" : "#fff"
    //     }).html("<strong>七彩云南"+ i +"</strong>")
    //     // .text("云南旅游"+i)
    // }
});
