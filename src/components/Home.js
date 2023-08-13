import './Home.css'
import Image from "./image.png"
import ClipboardJS from "clipboard";

new ClipboardJS(".button");

function HomePage() {
  return (
    <div className="Home">
        <div className='text'>
          <h2>The World's Fastest Growing <br />
          <span>Token </span>
          Protocol</h2>

          <p>Einpunk Protocol is a decentralized application platform designed to make apps usable on the web.</p>
          <p>The network runs on a Proof-of-Stake (POS) consensus mechanism called Nightsade, which aims to offer scalability and stable fees.</p>
          <p>EinpunkUSD is the native utility token that is used for: 
            <br />Fees for processing transaction and storing data 
            <br />Running validator nodes on the network via staking EinpunkUSD token 
            <br />Used for governance votes to determine how network resources are allocated
            </p>
            <p>Einpunk Token Contract Address</p>
            <input type="text" id='copy' readOnly value="0x89a081999249407C1153e135A2Af7d323419A66A"/><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="copy-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-clipboard-action="copy" data-clipboard-target="#copy" className='button'><path d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"></path></svg> <img src="" alt="" onClick={copy}/> <br />
            <a href="https://t.me/+cBzvl0ZWRkxjYmMx" target='blank'><button>Join our Community</button></a>
        </div>
        <div className='image'>
          <img src={Image} alt="" srcset="" loading="lazy"/>
        </div>
    </div>
  );
}

function copy() {
  this.select();
  document.execCommand('copy');
  alert('This is a test...');
}

export default HomePage;
