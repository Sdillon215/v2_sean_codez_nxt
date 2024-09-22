'use client';

import Link from 'next/link';
import Image from 'next/image';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import ContinuousTransitionImage from './ui/animated_bg/animated_bg';

const Home: React.FC = () => {
  const [isInverted, setIsInverted] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  useEffect(() => {
    const transitionDuration = 20000; // 10 seconds
    const steps = 100; // Number of steps for the transition

    const intervalDuration = transitionDuration / steps;
    let currentStep = 0;

    const transitionInterval = setInterval(() => {
      let progress = currentStep / steps;

      // Adjust the speed near the middle
      if (progress > 0.35 && progress < 0.55) {
        currentStep += 2; // Speed up near the middle
      } else {
        currentStep += 1; // Normal speed
      }

      progress = currentStep / steps;

      if (progress >= 1) {
        if (direction === 'forward') {
          setIsInverted(true);
          setDirection('backward');
        } else {
          setIsInverted(false);
          setDirection('forward');
        }
        currentStep = 0;
        setTransitionProgress(0);
      } else {
        setTransitionProgress(progress);
      }
    }, intervalDuration);

    return () => clearInterval(transitionInterval);
  }, [direction]);

  const filterValue = `invert(${!isInverted ? transitionProgress * 100 : (1 - transitionProgress) * 100}%)`;

  return (
    <main className="h-screen w-screen relative">

      <ContinuousTransitionImage transitionProgress={transitionProgress} isInverted={!isInverted} />
      <div className="grid content-end text-center min-h-[42%] md:min-h-[40%] opacity-80 z-1">
        <h1 className="text-5xl md:text-6xl font-bold" style={{ filter: filterValue, transition: "filter 0.1s ease" }}>Sean Dillon</h1>
        <h4 className="md:text-2xl font-bold" style={{ filter: filterValue, transition: "filter 0.1s ease" }}>Nomad | Full Stack Engineer | Climber</h4>
      </div>
      <div className="grid content-start place-content-center min-h-[58%] md:min-h-[60%] z-1">
        <Link
          key="About-home"
          href="/about"
          className="flex justify-center items-center w-40 gap-2 rounded-lg border border-white hover:border-black bg-slate-500 hover:bg-sky-100 opacity-60 hover:text-black text-white p-2 px-3 m-4 md:m-6"
          style={{ filter: filterValue, transition: "filter 0.1s ease" }}
        >
          <h4 className="font-bold">Learn More</h4>
          <ArrowRightIcon className="w-5" />
        </Link>
      </div>
      <div className="absolute items-center bottom-0 left-0 p-2">
        <p className="text-xs">
          by Sean_Codez
        </p>
      </div>
    </main>
  );
};

export default Home;