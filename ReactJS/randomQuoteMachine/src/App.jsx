import { useState, useEffect } from 'react';
import axios from 'axios';
import Twitter from '../png/sl_z_072523_61700_05-removebg-preview.png';
import Linkedin from '../png/linkedin-logo-png-2026.png';

const colors = [
  '#9e0142',
  '#d53e4f',
  '#f46d43',
  '#fdae61',
  '#fee08b',
  '#e6f598',
  '#abdda4',
  '#66c2a5',
  '#3288bd',
  '#5e4fa2'
];

const QuoteBox = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    getQuotes();
  },[]);

  const getQuotes = async () => {
    try {
      const response = await axios.get(
        'https://gist.githubusercontent.com/AtharvSonawale/4f6d1c9ff95ed75357669d15e1d45e42/raw/1f3c3a6b3d18c9684cbc8448ac5429784d2cfcfb/10quotes.json'
      );
      setQuotesData(response.data.quotes);
      getQuote(response.data.quotes);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomQuote = () => {
    return quotesData[Math.floor(Math.random() * quotesData.length)];
  };

  const getQuote = () => {
    const randomQuote = getRandomQuote();
    setCurrentQuote(randomQuote.quote);
    setCurrentAuthor(randomQuote.author);
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
  };

  const handleNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      getQuote();
    }, 1500);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen flex-col ${isAnimating ? 'bg-transition' : ''}`}
      style={{ backgroundColor: color, color: color }}
    >
      <div
        id="quote-box"
        className="bg-white p-8 rounded shadow-md w-96"
        style={{ color: color }}
      >
        <div className="quote-text text-center text-2xl mb-4">
          <i className="fa fa-quote-left mr-2"></i>
          <span id="text"><q> {currentQuote} </q></span>
        </div>
        <div className="quote-author text-right mb-4">- <span id="author">{currentAuthor}</span></div>
        <div className="flex justify-between">
          <div className="w-auto h-auto flex p-0.5">
            <a
              className="button bg-gray-600 text-white py-2 px-2 rounded hover:opacity-75 mr-4"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
                currentQuote
              )}" ${encodeURIComponent(currentAuthor)}`}
            >
              <i className="fa fa-twitter"><img src={Twitter} alt="" className="w-5 h-5"/></i>
            </a>
            <a
              className="button text-white rounded hover:opacity-75"
              id="tumblr-quote"
              title="Post this quote on Linkedin!"
              target="_blank"
              href={`https://www.linkedin.com/in/overlay/?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
                currentAuthor
              )}&content=${encodeURIComponent(
                currentQuote
              )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            >
              <i><img src={Linkedin} alt="" className="w-9 h-9"/></i>
            </a>
          </div>
          <button
            className="button bg-gray-700 text-opacity-0 font-bold py-2 px-4 rounded hover:bg-opacity-75"
            id="new-quote"
            onClick={handleNewQuote}
          >
            New quote
          </button>
        </div>
      </div>
      <div className="footer text-white mt-8">
        by <a href="https://codepen.io/Atharv-Sonawale" className="font-bold">Atharv Sonawale</a>
      </div>
    </div>
  );
};

export default QuoteBox;
