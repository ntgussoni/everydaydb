"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { BeNotified } from "./_components/be-notified";
import TextAnim from "./TextAnim";
import { AnimatePresence, motion } from "framer-motion";
const texts = ["every day data", "makers", "developers", "everyone", "you"];
export const Hero = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      const next = index + 1;
      setIndex(next % texts.length);
    }, 3 * 1000);
  }, [index, setIndex]);
  return (
    <section className="container grid place-items-center gap-10 py-20 md:py-32">
      <div className="z-10 flex flex-col items-center space-y-8 text-center">
        <main className="relative text-6xl font-bold text-primary-foreground md:text-7xl">
          <h1 className="inline drop-shadow-2xl">
            Easy store API for
            <br />
            <div className="relative  h-[120px]  text-transparent drop-shadow-2xl  ">
              <AnimatePresence mode="wait">
                <motion.span
                  className="absolute left-0 top-4 h-full w-full bg-gradient-to-r from-[#bc2d0d]  to-[#d70303] bg-clip-text"
                  key={index}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 100 },
                    opacity: { duration: 0.5 },
                  }}
                  variants={{
                    enter: (direction) => {
                      return {
                        y: 20,
                        opacity: 0,
                      };
                    },
                    center: {
                      zIndex: 1,
                      y: 0,
                      opacity: 1,
                    },
                    exit: (direction) => {
                      return {
                        zIndex: 0,
                        opacity: 0,
                      };
                    },
                  }}
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>{" "}
        </main>

        <p className="mx-auto max-w-xl items-center justify-center text-center text-xl text-primary-foreground lg:mx-0">
          <span>
            Effortlessly set and retrieve data, empowering you to streamline
            your workflows and enhance productivity.{" "}
          </span>
        </p>

        <div className="mt-2 flex w-full ">
          <div className="flex w-full items-center justify-center space-x-2">
            <BeNotified />
          </div>
        </div>
      </div>

      <div className="shadow"></div>
    </section>
  );
};
