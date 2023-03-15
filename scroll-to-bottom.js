// ==UserScript==
// @name		Scroll to Bottom Button
// @version		1.0.2
// @description	페이지 아래로 바로 내려갈 수 있는 버튼을 추가합니다.
// @author		Luca_Tuna
// @icon		http://vocaro.wikidot.com/local--files/nav:side/logo.png
// @downloadURL   https://raw.githubusercontent.com/qlife1146/scroll-to-bottom/master/scroll-to-bottom.js
// @grant		none
// @match		http://vocaro.wikidot.com/*
// ==/UserScript==


(function () {
    "use strict";

    const button = document.createElement("button");
    button.textContent = "맨 아래로";
    button.onclick = scrollToBottom;
    button.style.position = 'fixed';
    button.style.bottom = '0';
    button.style.right = '0';

    document.body.appendChild(button);
    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }
})();
