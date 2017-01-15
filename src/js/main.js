jQuery(document).ready(function ($) {
    $('.show-hint').on("click", function (e) {
        $('.tool_tip').fadeIn(500);


    //     e = e || window.event;
    //     e.preventDefault();
    //     var ypos = $(this).offset().top + 24;
    //     var xpos = $(this).offset().left;
    //     var RealHint = $(this).data('hint');
    //     $(RealHint).css('top', ypos);
    //     $(RealHint).css('left', xpos);
    //     $(RealHint).toggle('fast');
    //     return;
    // });
    //
    // $('.prm-cross').on('click', function () {
    //     $(this).parent().hide('fast');
    //     return false;
    // });
    //
    // document.onclick = function (e) {
    //     if ($(e.target).hasClass('real-hint') == false)
    //         $('.real-hint').hide('fast');
       // return;
    });
    $('.show-hint2').on("click", function (e) {
        e.preventDefault();
        // var ypos = $(this).position();
        // var xpos = $(this).position();
        var ypos = $(this).offset();
        var xpos = $(this).offset();
        // var RealHint = $(this).data('hint');
        // $(RealHint).css('top', ypos);
        // $(RealHint).css('left', xpos);
        // $(RealHint).toggle('fast');

        $('.tool_tip').fadeIn(500);


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
