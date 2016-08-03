/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date August 3, 2016
 * 
 * StudentID: 300818557
 * 
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var canvas;
    var stage;
    var helloLabel;

    // app entry function
    function init() {

        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }

    function gameLoop() {
        helloLabel.rotation += 5;
        stage.update(); // refresh the stage container
    }


    function main() {
        helloLabel = new createjs.Text("Hello World!", "40px Consolas","#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 160;
        helloLabel.y = 160;
        stage.addChild(helloLabel);
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();