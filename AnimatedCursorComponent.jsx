// src/components/AnimatedCursor.jsx
import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimatedCursorComponent() {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={20}
      color="255,180,0"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={4}
      style={{zIndex:"99999999999999999"}}
    />
  );
}

export default AnimatedCursorComponent;
