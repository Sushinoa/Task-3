jQuery(document).ready(function ($) {

    $('.show-hint_img').on("click", function (e) {
        e.preventDefault();
        var tool_tip = $('.tool_tip');
        var ypos = $(this).offset().top;
        var xpos = $(this).offset().left;
        tool_tip.css({"top": ypos, "left": xpos - 100});
        tool_tip.fadeIn(500);

    });
    $('.show-hint_name').on("click", function (e) {
        e.preventDefault();
        var tool_tip = $('.tool_tip');
        var ypos = $(this).offset().top;
        var xpos = $(this).offset().left;
        tool_tip.css({"top": ypos-5, "left": xpos - 180});
        tool_tip.fadeIn(500);

    });
    $('.tool_tip').on('click',function (e) {
        $('.tool_tip').fadeOut(500);

    });
    // document.onclick = function (e) {
    //     if ($(e.target).hasClass('.content') == false)
    //         $('.tool_tip').fadeOut(300);
    //
    // };
});
