import React, { useEffect, useState } from "react";

const useWait = (delay) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true);
    }, delay);

    return () => window.clearTimeout(id);
  }, [delay]);

  return show;
};

const Wait = ({ delay = 1000, placeholder, ui }) => {
  const show = useWait(delay);

  return show === true ? ui : placeholder;
};

export default Wait;
