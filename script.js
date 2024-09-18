// Getting Elements from the html

const typingForm = document.querySelector(".typing-form");
const chat = document.querySelector(".chat-list");
const suggestions = document.querySelector(".suggestion");
const toggleTheme = document.querySelector("#theme-toogle-button");
const deleteChat = document.querySelector("#delete-chat-button");


//API Configuration 
const API_KEY = "Your Api Key"
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`