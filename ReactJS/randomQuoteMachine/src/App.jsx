
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <img src="" alt="" />
      <div id="quote-box">
        <div id="quote-text">
          <p className=""><span id="text" className='text-3xl-bold'>Don't settle for what life gives you, make life better and build something.</span></p>
        </div>

        <div className="flex justify-end">- Ashton Kutcher<span id="author"></span></div>

        <div className="flex justify-between">

          <div className="left">
          <a href="" className="fa fa-twitter" id="tweet-quote" title='Tweet this quote!' target='_top'><i className="">&#xf099;
          </i></a>

          <a href="" className="button" id='linkedin-quote' title='Linkedin this quote!' target='_blank'><i className="">&#xf099;</i></a>
          
          </div>

          <div className="right">
          <button className="button" id="new-quote">New quote</button>
          </div>
        </div>
      </div>
        <footer className='footer'>by <a href="" target='_blank'>Atharv Sonawale</a></footer>
    </div>
  );
}

export default App
