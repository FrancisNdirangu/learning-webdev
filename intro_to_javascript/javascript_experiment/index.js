// This will show up in the "Console" tab of your browser
console.log("Success! The JavaScript file is officially linked.");

const title = document.getElementById('main-title');
const button = document.getElementById('magic-btn');

button.addEventListener('click', () => {
    title.textContent = "It's Working! 🎉";
    title.style.color = "orange";
    console.log("The button was clicked!");
});