import React from 'react';
import Wave from 'react-wavify';

import './styles.css';


var pauseStatus = false;

const wavePos1 = {
  position: "absolute",
  bottom: "-600px",
  width: "100%"
};

const wavePos2 = {
  position: "absolute",
  bottom: "-650px",
  width: "100%"
};

const wavePos3 = {
  position: "absolute",
  bottom: "-680px",
  width: "100%"
};



export default function Waveform(){
    return (
      <div>
      <div style={wavePos1}>
        <Wave
          fill="#2b2d42"
          paused={pauseStatus}
          options={{
            height: 15,
            amplitude: 5,
            speed: 0.5,
            points: 4
          }}
        />
      </div>
      <div style={wavePos2}>
        <Wave
          fill="#8d99ae"
          paused={pauseStatus}
          options={{
            height: 1,
            amplitude: 5,
            speed: 0.3,
            points: 5
          }}
        />
      </div>
      <div style={wavePos3}>
        <Wave
          fill="#edf2f4"
          paused={pauseStatus}
          options={{
            height: 10,
            amplitude: 10,
            speed: 0.3,
            points: 3
          }}
        />
      </div>
    </div>
      );

}
