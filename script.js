// Getting Elements from the html

const typingForm = document.querySelector(".typing-form");
const chat = document.querySelector(".chat-list");
const suggestions = document.querySelector(".suggestion");
const toggleTheme = document.querySelector("#theme-toogle-button");
const deleteChat = document.querySelector("#delete-chat-button");

//Default state for api handling.
let userMessage = null;
let apiResponse = false;

//API Configuration

const API_KEY = "AIzaSyBAIoCR6Z7_AsLA4Yr_hdBVNvLZyeD1Lv4";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

// saving the theme in the local storage

const loadData = () => {
    const savedChats = localStorage.getItem("savedchats");
  const isLightMode = localStorage.getItem("themeColor") === "light_mode";
  document.body.classList.toggle("light_mode", isLightMode);
  toggleTheme.innerText = isLightMode ? "dark_mode" : "light_mode";

  //clear the chat when clicking delete || restoring the chats
  chat.innerHTML = savedChats || "";
  document.body.classList.toggle("hide-header", savedChats)
  chat.scrollTo(0, chat.scrollHeight); // scroll to bottom
};

//darkmode lightmode toggle theme

toggleTheme.addEventListener("click", () => {
  const isLightMode = document.body.classList.toggle("light_mode");
  localStorage.setItem("themeColor", isLightMode ? "light_mode" : "dark_mode");
  toggleTheme.innerText = isLightMode ? "dark_mode" : "light_mode";
});

//creating a div element for messages

const createMessage = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

//creating the typing effect for displaying words one by one

const typingEffect = (text, textElement, messageDiv) => {
  const words = text.split(" ");
  let currentWordIndex = 0;

  //append the words one by one with space

  const typingInterval = setInterval(() => {
    textElement.innerText +=
      (currentWordIndex === 0 ? "" : " ") + words[currentWordIndex++];
    messageDiv.querySelector(".icon").classList.add("hide");

    //if all the words are displayed
    if (currentWordIndex === words.length) {
      clearInterval(typingInterval);
      apiResponse = false;
      messageDiv.querySelector(".icon").classList.remove("hide");
      localStorage.setItem("savedchats", chat.innerHTML);
    }
    chat.scrollTo(0, chat.scrollHeight); // scroll to bottom
  }, 100);
};


// Fetching the data from the api based on the user prompt



















loadData();
