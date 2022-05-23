const newQuote = document.getElementById("new-quote");

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const quoteContainer = document.getElementById("quote-container");
const loader = document.querySelector(".loader");

const tweetQuote = document.getElementById("tweet-quote");

loader.style.display = "none";

const showLoadingSpinner = () => {
    quoteContainer.hidden = true;
    loader.style.display = "inline-block";
}

const removeLoadingSpinner = () => {
    quoteContainer.hidden = false;
    loader.style.display = "none";
}


const getQuotes = async () => {
    const data = await fetch('https://type.fit/api/quotes');
    const quotes = await data.json();
    return quotes;
}



const getRandomQuote = async () => {
    const quotes = await getQuotes();
    return quotes[Math.floor(Math.random() * quotes.length)];
}

newQuote.addEventListener("click", async function () {

    showLoadingSpinner();
    const randomQuote = await getRandomQuote();
    removeLoadingSpinner();

    quoteText.innerHTML = randomQuote.text;
    authorText.innerHTML = randomQuote.author;

});

tweetQuote.addEventListener("click", function () {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
});





