
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <div>
      <Player/>
      <div id='challenges'>
        <TimerChallenge level="Easy" targetTime={1}/>
        <TimerChallenge level="Not Easy" targetTime={5}/>
        <TimerChallenge level="Getting tough" targetTime={10}/>
        <TimerChallenge level="Pros only" targetTime={15}/>
      </div>
    </div>
  );
}

export default App;
