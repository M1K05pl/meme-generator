const fs = require("fs")
const path = require('path')
const $ = require('jquery')



function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("meme")
    imgtag.title = selectedFile.name

    reader.onload = function(event) {
        imgtag.src = event.target.result
    }
    reader.readAsDataURL(selectedFile)
}

$('#slider').on('change'), function() {
    var v = $(this).val();
   $('#topText').css('font-size', v + 'px')