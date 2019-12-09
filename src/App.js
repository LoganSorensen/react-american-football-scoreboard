//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);
  const [second, addSecond] = useState(0);
  const [tenSecond, addTenSecond] = useState(5);
  const [minute, addMinute] = useState(9);
  const [tenMinute, addTenMinute] = useState(0);

  setTimeout(() => {
    if(second < 9) {
    addSecond(second + 1)
    }else if(second === 9) {
      addSecond(0);
      addTenSecond(tenSecond + 1)
    }
    if(tenSecond === 5 && second === 9) {
      addTenSecond(0);
      addMinute(minute + 1)
    }
    if(minute === 9 && tenSecond ===5 && second === 9) {
      addMinute(0);
      addTenMinute(tenMinute + 1)
    }
  }, 1000)
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoreHome}</div>
          </div>
          <div className="timer">{tenMinute}{minute}:{tenSecond}{second}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoreAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setScoreHome(scoreHome + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setScoreHome(scoreHome + 3)}>Home Field Goal</button>
          <button className="homeButtons__reset" onClick={() => setScoreHome(0)}>Reset Home Score</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setScoreAway(scoreAway + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setScoreAway(scoreAway + 3)}>Away Field Goal</button>
          <button className="awayButtons__reset" onClick={() => setScoreAway(0)}>Reset Away Score</button>
        </div>        
      </section>
    </div>
  );
}

export default App;
