//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { tsPropertySignature } from "@babel/types";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0); 
  const [away, setAway] = useState(0); 
  const [time, setTime] = useState(0); 
  const [minute, setMinute] = useState(0);
  const [quarter, setQuarter] = useState(0); 
  
  //set game to be 1 minute quarters
  // after 4 quarters winner is declared but for our purposes we run the whole game in one quarter.
    
    useEffect(()=> { 
      setTimeout(() => {
      
        setTime(time => time + 1)
        // Minute(time)
        
      }, 1000)
      if(time != 0 && time % 59 == 0 ){ 
        setMinute(minute => minute + 1)
         
      }
      if(minute != 0 && minute % 1 == 0 ){
        setQuarter(quarter => quarter + 1) 
        setMinute(minute => minute * 0) 
      }

    },[time])
    if(time != 0 && time % 60 == 0 ){
      setTime(time => time * 0 )
    }
    // if(minute != 0 && minute == 1  ){
    //   setMinute(minute => minute * 0) 
    // }
    if(quarter != 0 && quarter % 4 == 0 ){
      setQuarter(quarter => quarter * 0) 
    }

    
    // function Minute(time) {
    //   if(time % 10){
    //       setMinute(minute =>  minute + 1)
    //   }
    // }
  
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{minute}:{time}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow key="minute" quarters = {quarter} score = {[home, away]} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => setHome( count => count +7)}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => setHome(home => home + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setAway( away + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setAway(away => away + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
