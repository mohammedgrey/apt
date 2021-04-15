import React, { useState, useEffect } from "react";

export default function ForTheHooks() {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [displayMe, setDisplayMe] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayMe(false);
    }, 5000);
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div className="for-the-hooks-class">
      <h1
        style={{
          color: `rgb(${color.r}, ${color.g}, ${color.b})`,
        }}
      >
        But can you change my color in a function based component?
      </h1>
      <button
        className="for-any-button "
        onClick={() => {
          setColor({ r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256) });
        }}
      >
        Yeah, why not! There are hooks now
      </button>
      {displayMe && <div className="only-here-to-go in-hooks">I am gonna disappear after 5 seconds. And I am in a function based component.</div>}
    </div>
  );
}
