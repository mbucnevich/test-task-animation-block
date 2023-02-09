import React, { useEffect, useState } from "react";
import "./custom.less";

function App() {
  const [timer, setTimer] = useState(5);
  const [isCounting, setIsCounting] = useState(false);

  const resetTimer = () => {
    setTimer(5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimer((timer) => (timer >= 0 ? timer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      setIsCounting(false);
      resetTimer()
    }

    return () => clearInterval(interval);
  }, [isCounting, timer]);

  return (
    <div className="page-wrapper">
      <div className="block-container">
        <div className="moving-block">1</div>
        <div className="block-styled">2</div>
      </div>
      <div className="button-container">
        <button
          className={isCounting ? "disabled-button" : "start-button"}
          disabled={isCounting}
          onClick={() => setIsCounting(true)}
        >
          {!isCounting ? "START" : timer}
        </button>
      </div>
    </div>
  );
}

export default App;
