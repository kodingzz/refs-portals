import { useRef, useState } from "react";
import ResultsModal from "./ResultsModal";
import { createPortal } from "react-dom";

//  변수로 setTimeout값을 설정하면 안되는 이유
//  모든 컴포넌트가 timer 변수를 공유한다. 즉 여러 컴포넌트가 동시에 타이머를 실행하고 정지하였을 때 원하지 않은 결과가 나올 수 있다.
// let intervalTimer;

export default function TimerChallenge({ level, targetTime }) {
  const dialog = useRef();
  const intervalTimer = useRef();

  // 밀리초 단위로 상태가 업데이트 되므로 밀리초로 변환
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStartTimer() {
    intervalTimer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  //   게임을 이긴 경우
  function handleStopTimer() {
    clearInterval(intervalTimer.current);
    dialog.current.open();
  }
  //   timeReaming 값 초기화
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  //  시간 오버(게임을 진 경우)
  if (timeRemaining <= 0) {
    clearInterval(intervalTimer.current);
    dialog.current.open();
  }

  return (
    <>
      {createPortal(
        <ResultsModal
          ref={dialog}
          restTime={timeRemaining}
          targetTime={targetTime}
          onReset={handleReset}
        />,
        document.getElementById("modal")
      )}

      <section className="challenge">
        <h2>{level}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p>{timerIsActive ? "Timer running..." : "Timer inactive"}</p>
      </section>
    </>
  );
}
