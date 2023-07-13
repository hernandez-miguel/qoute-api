const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');

submitButton.addEventListener('click', () => {
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;
  const newQuote = document.createElement('div');

  if(quote && person) {
    fetch(`/api/quotes?quote=${quote}&person=${person}`, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(({quote}) => {
      newQuote.innerHTML = `
      <h3>Congrats, your quote was added!</h3>
      <div class="quote-text">${quote.quote}</div>
      <div class="attribution">- ${quote.person}</div>
      <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
      `
      newQuoteContainer.appendChild(newQuote);
    });
  } else {
    newQuote.innerHTML = `
    <p>Please enter quote and person.</p>
    `
    newQuoteContainer.appendChild(newQuote);
  }
});
