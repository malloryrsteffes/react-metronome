import React, { Component } from "react";
import Footer from "./Footer/Footer.js";
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
    console.log(this.state.bpm);
  };

  // Handles the time measure selection
  handleTimeSignature = event => {
    const beatsPerMeasure = event.target.value;
    this.setState({ beatsPerMeasure }, () =>
      console.log("Time Signature: " + this.state.beatsPerMeasure + "/4")
    );
  };

  // METRONOME CONTROL ===================>
  startStop = () => {
    // If PLAYING:
    if (this.state.playing) {
      // Clear the timer
      clearInterval(this.timer);
      // Set playing state to false + rerenders the app
      this.setState({
        playing: false
      });
    } else {
      // If NOT PLAYING:

      // Start a timer with the current BPM.
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          playing: true
        },
        this.playClick
      );
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    // Gives the first beat a different sound than others
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
    // Keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };
  render() {
    const { playing, bpm, beatsPerMeasure } = this.state;

    return (
      <div className="site-content">
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
            <div className="bpm-div">
              <label htmlFor="beatsPerMeasure">Time Signature: </label>
              <select
                id="beatsPerMeasure"
                name="beatsPerMeasure"
                value={beatsPerMeasure}
                onChange={this.handleTimeSignature}
              >
                <option value="3">3/4</option>
                <option value="4">4/4</option>
                <option value="6">6/4</option>
              </select>
            </div>
          </div>
          <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Metronome;
