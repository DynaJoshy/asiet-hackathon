import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({
  once,
  animation,
  className,
  threshold,
  children,
}) => {
  const [ref, inView] = useInView({
    threshold: threshold ? threshold : 0,
    triggerOnce: once,
  });

  return (
    <div ref={ref} className={`${className}`}>
      <div
        className={`  animate__animated 
       ${inView ? animation : "invisible"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedComponent;
