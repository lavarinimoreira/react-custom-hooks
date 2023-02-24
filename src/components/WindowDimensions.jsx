import React, { useEffect, useState } from "react";

function useWindowDimensions() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [width, height]);

  return { width, height };
}

const WindowDimensions = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </div>
  );
};

export default WindowDimensions;
