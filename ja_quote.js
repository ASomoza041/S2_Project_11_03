"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Alex A Somoza
   Date: 2-13-19  
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
//The size variable sets how many quotes can be selcted.
var size = 10;
//sets the value of the variable called randomQ by creating the range of randomInt.
var randomQ = randomInt(0, size);
//This code takes the quote randomly slected and inputs it into the HTML doc.
document.getElementById("quote").innerHTML = getQuote(randomQ);
//This code genreates a random number between zero and nine.
function randomInt(lowest, size) {
    return Math.floor(Math.random() * size);
}




function getQuote(n) {
    var quotes = [
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
        "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
        "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
        "Life seems but a quick succession of busy nothings.",
        "Our scars make us know that our past was for real.",
        "I cannot speak well enough to be unintelligible.",
        "One cannot be always laughing at a man without now and then stumbling on something witty.",
        "Men were put into the world to teach women the law of compromise.",
        "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
    ];

    return quotes[n];
}