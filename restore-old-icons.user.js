// ==UserScript==
// @name         Restore old icons!
// @namespace    goodtube.github.io
// @version      1.0
// @description  Restores the old icons for YouTube
// @author       Kyle Boyd 
// @match        *.youtube.com/*
// @icon         https://www.youtube.com/favicon.ico
// @run-at document-start
// @grant        none
// ==/UserScript==
(function() {
    'use strict'
    window['yt'] = window['yt'] || {};
    yt['config_'] = yt.config_ || {};
    yt.config_['EXPERIMENT_FLAGS'] = yt.config_.EXPERIMENT_FLAGS || {};

    var iv = setInterval(function() {
        yt.config_.EXPERIMENT_FLAGS.kevlar_updated_icons = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_system_icons = false;
        yt.config_.EXPERIMENT_FLAGS.kevlar_watch_color_update = false;
    }, 1);

    var to = setTimeout(function() {
        clearInterval(iv);
    }, 1000)
})();
document.getElementsByTagName("html")[0].removeAttribute("system-icons");
