// ==UserScript==
// @name            Scroll to Bottom Button
// @version         1.0.5
// @description	    페이지 아래로 바로 내려갈 수 있는 버튼을 추가합니다.
// @author          Luca_Tuna
// @icon            http://vocaro.wikidot.com/local--files/nav:side/logo.png
// @homepageURL     https://github.com/qlife1146/scroll-to-bottom/
// @supportURL      https://github.com/qlife1146/scroll-to-bottom/issues
// @downloadURL     https://qlife1146.github.io/scroll-to-bottom/scroll-to-bottom.user.js
// @updateURL       https://qlife1146.github.io/scroll-to-bottom/scroll-to-bottom.user.js
// @grant           none
// @match           http://vocaro.wikidot.com/*
// ==/UserScript==

(function () {
    "use strict";

    const button = document.createElement("button");
    button.textContent = "맨 아래로";
    button.onclick = scrollToBottom;
    button.style.position = "fixed";
    button.style.bottom = "0";
    button.style.right = "0";

    document.body.appendChild(button);
    function scrollToBottom() {
        const element = document.getElementById("page-options-bottom");
        if (element) {
            element.scrollIntoView({
                block: "center",
            });
        }
        // test text www
        // window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        // });
    }
})();
