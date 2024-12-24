'use strict';

const adviceId = document.querySelector('.id');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('.btn');

let lastAdviceId = null;

const updateAdvice = function (data) {
    const { slip } = data;
    adviceId.textContent = slip.id;
    adviceText.textContent = slip.advice;
};

const fetchAdvice = async function () {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) throw new Error('API Unavailable');

        const data = await response.json();
        updateAdvice(data);
    } catch (e) {
        adviceText.textContent = 'Could not fetch advice, try again later';
        console.error(e);
    }
};

btn.addEventListener('click', function (e) {
    if (e.target.closest('.btn')) fetchAdvice();
});
