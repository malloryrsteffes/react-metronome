import React, { Component } from "react";
import "./Metronome.css";

// Sound imports
import click1 from "./audio/click1.wav";
import click2 from "./audio/click2.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);

    // Initialize state so we can use the variables in the
    // render function
    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    // Create Audio objects
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  // Makes slider work. Passed as the onChange prop of the input
  handleBPMChange = event => {
    const bpm = event.target.value;
    this.setState({ bpm });
  };

  // Audio files tester
  startStop = () => {
    this.click1.play();
  };
  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBPMChange}
          ></input>
        </div>
        <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;
