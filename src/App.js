import Acordian from "./Acordian";
import "./App.css";
import sample from "./faqVid.mp4";
import sample2 from "./last2.mp4";
import audioClip from "./audio.mp3";
var audio = new Audio(audioClip);
function App() {
  let accordianEnabled = () => {
    setTimeout(function () {
      document.querySelector(".content2").style.display = "block";
    }, 3000);
    document.querySelector(".myVideo").play();
    audio.play();
    document.querySelector(".content").style.display = "none";
    setTimeout(function () {
      document.querySelector(".myVideo").style.display = "none";
      document.querySelector(".myVideo2").style.display = "block";
    }, 3540);
  };

  let start = () => {
    document.querySelector(".myVideo").play();
    audio.play();
    document.querySelector(".content3").style.display = "none";
    setTimeout(function () {
      document.querySelector(".myVideo").pause();
      audio.pause();
    }, 8490);
    setTimeout(function () {
      document.querySelector(".content").style.display = "block";
    }, 7490);
  };

  return (
    <div>
      <video autoPlay muted className="myVideo">
        <source src={sample} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video autoPlay muted loop className="myVideo2">
        <source src={sample2} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content2">
        <Acordian />
      </div>
      <div className="content">
        <button id="myBtn" onClick={accordianEnabled}>
          ENTER FAQ
        </button>
      </div>
      <div className="content3" style={{ display: "block" }}>
        <button id="myBtn" onClick={start}>
          START THE RIDE
        </button>
      </div>
      {setTimeout(function () {
        document.querySelector(".myVideo").pause();
        audio.pause();
      }, 0)}
    </div>
  );
}

export default App;
