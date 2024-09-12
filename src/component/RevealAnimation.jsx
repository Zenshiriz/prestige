import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
function Reveal({ children,className, width = "fit-content" , delay = 0.25}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className={` relative  overflow-hidden=  w-fit ${className?className:""} `}style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
     
    </div>
  );
}

export default Reveal;