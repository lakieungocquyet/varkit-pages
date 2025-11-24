import { useState, useEffect } from "react";

function FlipCell({ frontText, backText, interval=5000 }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipped(prev => !prev);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="cell">
      <div className={`cell_inner ${flipped ? "show-back" : ""}`}>
        <div className="front">{frontText}</div>
        <div className="back">{backText}</div>
      </div>
    </div>
  );
}

export default FlipCell;
