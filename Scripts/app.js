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

    // app entry function
    function init() {

        canvas = document.getElementById("canvas");
        stage = createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame


    }

    function gameLoop() {
        stage.update(); // refresh the stage container
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();