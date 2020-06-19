const {app, BrowserWindow} = require("electron")
const fs = require("fs")
const path = require('path')

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