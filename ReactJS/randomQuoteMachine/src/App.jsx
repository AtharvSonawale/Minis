import './App.css'
import Twitter from '../png/sl_z_072523_61700_05-removebg-preview.png'
import Linkedin from '../png/linkedin-logo-png-2026.png'

function App() {
  return (
    <div>
      <div className='w-screen h-screen border-4 border-zinc-700 text-center flex flex-col'>
        <div id="quote-box" className=' w-40-screen h-auto mx-auto
        my-auto mb-0 border-2 border-zinc-700 rounded-lg bg-yellow-500'>
          <div id="quote-text">
            <p className="m-4 font-medium text-3xl text-white"><span id="text">Don't settle for what life gives   you, make life better and build something.
              </span></p>
          </div>

          <div className="flex justify-end mr-4 text-xl text-white">- Ashton Kutcher<span id="author"></  span></div>

          <div className="flex justify-between place">

            <div className="mx-4 my-4 flex p-1 items-center jus">
              <a href="" className="p-2 bg-white rounded-lg" id="tweet-quote" title='Tweet this quote!'   target='_top'>
              <img src={Twitter} alt="" className='w-4 h-4 transition duration-750 hover:opacity-75'/></a>

              <a href="" className="" id='linkedin-quote' title='Linkedin this quote!' target='_blank'>
              <img src={Linkedin} alt="" className='w-8 h-8 transition duration-750 hover:opacity-75 ml-2   rounded-lg'/></a>
          
              </div>

              <div className="right">
              <button className="m-4 border border-gray-300 rounded-lg p-2 text-gray-800 bg-white font-bold" id="new-quote">New quote</button>
              </div>
            </div>
          </div>
          <footer className='m-4 text-white mb-40'>by <a href="" target='_blank' className='font-bold'>Atharv Sonawale</a></footer>
        </div>
    </div>
  );
}

export default App
