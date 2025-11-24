function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    botReply(message);

    input.value = "";
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chatBox");

    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText) {
    userText = userText.toLowerCase();

    let reply = "";

    if (userText.includes("hello") || userText.includes("hi")) {
        reply = "Hello! How can I help you?";
    }
    else if (userText.includes("date")) {
        reply = "Today's date is " + new Date().toLocaleDateString();
    }
    else if (userText.includes("time")) {
        reply = "Current time is " + new Date().toLocaleTimeString();
    }
    else if (userText.includes("your name")) {
        reply = "My name is Simple Chatbot.";
    }
    else if (userText.includes("friends")) {
        reply = "harshal,vinit,mayur.";
    }
     else if (userText.includes("best friend")) {
        reply = "no one is your best friend.";
    }

    else {
        reply = "Sorry, I didn't understand that!";
    }

    addMessage(reply, "bot");
}

