import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./Blinker";

export default function TextAnim() {
  const baseText = "$ edb get  --namespace movies --id 8 > movie.txt" as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}
