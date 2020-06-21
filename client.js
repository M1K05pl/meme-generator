$('#slider').on('change'), function() {
    var v = $(this).val();
    $('#topText').css('font-size', v + 'px')
}