const {app, BrowserWindow} = require("electron")
const fs = require("fs")
const path = require('path')
const html2canvas = require('html2canvas')

app.on("ready", () =>{
    runWin()

})

function runWin() {
    this.appWin = new BrowserWindow({
        width: 1000,
        height: 1000,
        show: true,
        frame: true,
        menu: null,
        autoHideMenuBar: true
    })
    this.appWin.loadURL(`file://${__dirname}/index.html`)
}

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

function renderImage() {
    html2canvas(document.getElementById("wholeMeme")).then(function(canvas) {
        // Export the canvas to its data URI representation
        var base64image = canvas.toDataURL("image/png");
    
        // Open the image in a new window
        window.open(base64image , "_blank");
    });
    
}