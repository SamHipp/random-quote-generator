//Variables in DOM
let newQuoteBtn = document.getElementById("new-quote");
let root = document.documentElement;
let quoteText = document.getElementById("text");
let authorText = document.getElementById("author");
let quotesUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let twitterBtn = document.getElementById('tweet-button');
let twitterLink = document.getElementById('tweet-quote');
let tweetText = "";

//send async request for quote JSON data
let quotes = [];
async function getQuotes() {
    let quotesFetch = await fetch(quotesUrl);
    quotes = await quotesFetch.json();
    console.log(quotes);
    console.log(quotes.quotes[1]['quote'])
    let rando =Math.random();
    quoteText.innerText = quotes.quotes[Math.floor(rando * 102)]['quote'];
    authorText.innerText = quotes.quotes[Math.floor(rando * 102)]['author'];
    tweetText = `"${quoteText.innerText}" -${authorText.innerText}`;
    twitterLink.setAttribute("href", `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweetText}`);
    //New Quote Button
/* User Story #8: When the #new-quote button is clicked,
 my quote machine should fetch a new quote and display it in the #text element. */
    newQuoteBtn.addEventListener("click", () => {
        rando = Math.random();
        root.style.setProperty("--hue", rando * 360);
        quoteText.innerText = quotes.quotes[Math.floor(rando * 102)]['quote'];
        authorText.innerText = quotes.quotes[Math.floor(rando * 102)]['author'];
        tweetText = `"${quoteText.innerText}" -${authorText.innerText}`;
        twitterLink.setAttribute("href", `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweetText}`);
    })
  }
  getQuotes();
  
/* User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. 
This a element should include the "twitter.com/intent/tweet" path in its href attribute to
 tweet the current quote. */

twitterBtn.addEventListener('click', () => {
    console.log(tweetText);

})

