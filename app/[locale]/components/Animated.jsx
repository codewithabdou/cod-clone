"use client";

import { useRef } from "react";

import useIsVisible from "@hooks/useIsVisible";

const Animated = ({ children }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  return (
    <div
      ref={ref}
      id="animated-component"
      className={`${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      } transition-all duration-1000 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default Animated;
