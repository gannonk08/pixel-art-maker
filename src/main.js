$(function() {
    'use strict';
    var brush
    var currentColor

    function newCanvas() {
        var pixel;
        var canvas = $('#canvas')
        for (var i = 0; i < 1539; i++) {
            canvas.append($('<div class="pixel"></div>'));
        }
    }
    newCanvas();

    function coloredPixel() {
        $('.pixel').mousedown(function() {
            console.log("clicked pixel");
            $(this).css('background-color', brush);
        })
    }
    coloredPixel();

    function colorSelector() {
        $('#pallete > div').mousedown(function() {
            brush = $(this).css("background-color")
            console.log(brush);
            $('html,body').css('cursor', 'crosshair');
            $('#currentColor').css('background-color', brush)
        })
    }
    colorSelector();


}());
