require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.API;
console.log(token);
let emj = require('../emoji/files');
const bot = new TelegramBot(token,{
    polling:true
});

bot.on("polling_error", console.log);
bot.onText(/\/Hi/,(msg, match) => {
    const chatId = msg.chat.id;
    const text = match.input.split('~')[1];
    let dt = '';
    if(text){
       dt = text;
    }
    let first_name = msg.from.first_name || ''
    let last_name = msg.from.last_name || ''
    bot.sendMessage(chatId, `Hi ${first_name} ${last_name} ${emj.smile} ~${dt}`);
});

bot.onText(/hi/,(msg, match) => {
    const chatId = msg.chat.id;
    const text = match.input.split('~')[1];
    let dt = '';
    if(text){
       dt = text;
    }
    console.log(match.input)
    let first_name = msg.from.first_name || ''
    let last_name = msg.from.last_name || ''
    bot.sendMessage(chatId, `Hi ${first_name} ${last_name} ${emj.smile} ~${dt}`);
});

bot.onText(/\/JSON/,(msg, match) => {
    const chatId = msg.chat.id;
    const text = match.input.split('~')[1];    
    let first_name = msg.from.first_name || ''
    let last_name = msg.from.last_name || ''
    bot.sendMessage(chatId, `JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.`);
});


bot.onText(/\/JAVASCRIPT/,(msg, match) => {
    const chatId = msg.chat.id;
    const text = match.input.split('~')[1];    
    let first_name = msg.from.first_name || ''
    let last_name = msg.from.last_name || ''
    bot.sendMessage(chatId, `JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user`);
});

bot.onText(/\/REACTHOOK/,(msg, match) => {
    const chatId = msg.chat.id;
    const text = match.input.split('~')[1];
    let key = ''
    if(text) {
        key = text.split(' ')[0]
    }
    let ans = ''
    if (key == 'useState') {
        ans = `useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.`
    } else if(key == 'useEffect'){
        ans = `What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.`
    } else {
        ans = `Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

        Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.`
    }
    bot.sendMessage(chatId, `${ans}`);
});
