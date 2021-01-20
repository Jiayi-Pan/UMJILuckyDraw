// ==UserScript==
// @name         UMJI Lucky Draw
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       Jiayi Pan
// @match        http://coursesel.umji.sjtu.edu.cn/welcome.action
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log("Lucky Draw Load Successfully.")
    let wantedlessonTaskID = ["C926C3CA-F100-0001-F6A7-3FE552D04190"]; // Replace the elements of the array with the lessontaskid of your wanted courses (the  lessontaskid can be found by inspect
    var timeVar = setInterval(() => { doItEveryTime(); }, 5000);
    function doItEveryTime() {
        let allClass = document.querySelectorAll("div[lessontaskid]")
        console.log("=== A round begins ===")
        for (let i = 0; i < allClass.length; i++) {
            let thisID = allClass[i].getAttribute("lessontaskid");
            if (wantedlessonTaskID.includes(thisID)) {
                console.log("Find the course!")
                console.log(i);
                let thisButton = allClass[i].getElementsByTagName("button")[0]
                let thisCourse = allClass[i];
                let state = thisButton.innerHTML
                console.log(state)
                if (state == "Register") {
                    console.log("Find available!")
                    thisButton.click();
                    console.log("Done Registration.")
                }
            }
        }
        let refresh = document.getElementsByClassName("refresh")
        refresh[0].click();
        // Refresh the courses
    }
})();