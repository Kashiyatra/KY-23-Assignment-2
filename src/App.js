import React from 'react'
import './App.css'
import pic from './Images/up-arrow-png-27176.png'
import pic2 from './Images/logo_jpg-removebg-preview.png'

function App() {
  
  return (
    <div className="App">
     <div className='heading'>
        <img className='logo' src={pic2} />
        <img className='left' src='https://kashiyatra-2022.netlify.app/SVG/LEFT%20WHITE.svg'></img>
        <h1>CONTACT</h1>
        <img className='right' src='https://kashiyatra-2022.netlify.app/SVG/LEFT%20WHITE.svg'></img>
        <img className='up' src={pic} />
      </div>

      <div className='video'>
        <div className='box'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mrLQ_TPQ6tI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='box2'>
          <div className='info-heading'>Marketing</div>
          <div className='info-heading'>Publicity</div>
          <div className='info-heading'>Public Relations</div>
          <div className='info'>Priyashu Raj</div>
          <div className='info'>Sharad Ghodke</div>
          <div className='info'>Sharad Ghodke</div>
          <div className='info'>9876543219</div>
          <div className='info'>9876543210</div>
          <div className='info'>9876543210</div>
          <a className='mail' href='mailto:webmaster@example.com'>Mail</a>
          <a className='mail' href='mailto:webmaster@example.com'>Mail</a>
          <a className='mail' href='mailto:webmaster@example.com'>Mail</a>
        </div>
      </div>

      <footer className='footer1'>
        <a className='elements' href="#Theme">Theme</a>
        <a className='elements' href="#Events">Events</a>
        <a className='elements' href="#F.A.Q">F.A.Q</a>
        <a className='elements' href="#Login">Login</a>
        <a className='elements' href="#Team">Team</a>
        <a className='elements' href="#Sponsers">Sponsers</a>
    </footer>

    <footer className='footer2'>
      <a href='https://www.instagram.com/kashiyatra_iitbhu/'>
             <img src='https://kashiyatra-2022.netlify.app/SVG/insta.svg' className='insta'></img> 
      </a> 

      <a href='https://www.youtube.com/user/kashiyatraiitbhu'>
             <img src='	https://kashiyatra-2022.netlify.app/SVG/yt.svg' className='yt'></img>
      </a> 
      
      <a href='https://www.facebook.com/kashiyatra.IITBHU/'>
             <img src='	https://kashiyatra-2022.netlify.app/SVG/fb.svg' className='fb'></img>
      </a> 

      <a href='https://www.twitter.com/ky_iitbhu?lang=en'>
             <img src='	https://kashiyatra-2022.netlify.app/SVG/twitter.svg' className='tw'></img> 
      </a> 
      
    </footer>



      



      
      
    </div>
  );
}

export default App;
