import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <>
      <div className="firstSection">
        <motion.h1 animate={{ scale: [0, 1] }} transition={{ duration: 0.5 }}>
          First section
        </motion.h1>
      </div>
      <div className="secondSection">
        <motion.h1 ref={titleRef} animate={{ scale: titleInView ? 1 : 0 }} transition={{ duration: 0.5 }}>
          Second section
        </motion.h1>
      </div>
    </>
  );
}

export default App;
