'use strict';

const lang = document.querySelector('html').lang;
const toggleLangBtn = document.getElementById('toggle-lang-btn');

function updateButton() {
    if (lang === 'ja') {
        toggleLangBtn.textContent = 'English';
    } else if (lang === 'en') {
        toggleLangBtn.textContent = '日本語';
    }
}

toggleLangBtn.onclick = function() {
    if (lang === 'ja') {
        location.href = 'index.html';
    } else if (lang === 'en') {
        location.href = 'index-ja.html';
    }
};

updateButton();