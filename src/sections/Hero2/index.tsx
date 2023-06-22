// import "./styles.css";
import { useEffect, useRef, useState } from "react";
import ExternalButton from "@/components/Button/ExternalButton";
import Navbar from "@/components/Navbar";

const randomNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// const setRandomColor = () => {
//   var letters = "0123456789ABCDEF" as string;
//   var color1 = "#" as string;
//   var color2 = "#" as string;
//   for (var i = 0; i < 6; i++) {
//     color1 += letters[Math.floor(Math.random() * 16)];
//     color2 += letters[Math.floor(Math.random() * 16)];
//   }
//   return `linear-gradient(180deg, ${color1}, ${color2})`;
// };

const setRandomColor = () => {
  var colors = ["#FA7304", "#EE6732", "#D06135"];
  var color1 = "#" as string;
  var color2 = "#" as string;

  for (var i = 0; i < 6; i++) {
    color1 = colors[Math.floor(Math.random() * 3)];
    color2 = "#000000";
  }
  return `linear-gradient(180deg, ${color1}, ${color2})`;
};
const INITIAL_DIRECTION = randomNumberBetween(0, 2 * Math.PI);
const INITIAL_VELOCITY = 0.025 as number;
const MAX_SPEED = 0.02 as number;

export default function Hero2() {
  // Clock
  const clock = useRef<number>(0);
  // Ball
  const ballRef = useRef<HTMLDivElement>(null);
  const ballPos = useRef({
    x: 50 as number,
    y: 50 as number,
  });
  const ballDirection = useRef({
    x: Math.cos(INITIAL_DIRECTION) as number,
    y: Math.sin(INITIAL_DIRECTION) as number,
  });
  // Player Paddle
  const playerPaddleRef = useRef<HTMLDivElement>(null);
  const playerPaddlePos = useRef({
    y: 50 as number,
  });
  // Computer Paddle
  const computerPaddleRef = useRef<HTMLDivElement>(null);
  const computerPaddlePos = useRef({
    y: 50 as number,
  });
  // Lose state
  const [isLose, setIsLose] = useState<boolean>(false);

  const playerScoreCountRef = useRef<number>(0);
  const computerScoreCountRef = useRef<number>(0);
  const playerScoreRef = useRef<HTMLDivElement>(null);
  const computerScoreRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resetBall = () => {
      while (
        Math.abs(ballDirection.current.x) <= 0.2 ||
        Math.abs(ballDirection.current.y) >= 0.9
      ) {
        const currentDirection = randomNumberBetween(0, 2 * Math.PI);
        ballDirection.current.x += Math.cos(currentDirection);
        ballDirection.current.y += Math.cos(currentDirection);

        // make sure the paddle isn't null
        playerPaddleRef.current!.style.top = "50";
      }
      clock.current! = 0;
      setIsLose(false);
      console.log("reset ball");
    };
    resetBall();
  }, [isLose]);

  useEffect(() => {
    const isCollision = (rect1: any, rect2: any) => {
      return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
      );
    };
    const updateBall = () => {
      ballPos.current.x +=
        ballDirection.current.x * INITIAL_VELOCITY * clock.current;
      ballPos.current.y +=
        ballDirection.current.y * INITIAL_VELOCITY * clock.current;

      ballRef.current!.style.top = `${ballPos.current.y}%`;
      ballRef.current!.style.left = `${ballPos.current.x}%`;

      if (
        ballRef.current!.getBoundingClientRect().bottom >= window.innerHeight ||
        ballRef.current!.getBoundingClientRect().top <= 0
      ) {
        ballDirection.current.y *= -1;
        // document.body.style.background = `${setRandomColor()}`;
        backgroundRef.current!.style.background = `black`;
      }
      if (
        [
          playerPaddleRef.current!.getBoundingClientRect(),
          computerPaddleRef.current!.getBoundingClientRect(),
        ].some((r) => isCollision(r, ballRef.current!.getBoundingClientRect()))
      ) {
        ballDirection.current.x *= -1;
        backgroundRef.current!.style.background = `${setRandomColor()}`;
      }
    };

    // Player Paddle Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      playerPaddleRef.current!.style.top = `${
        (e.y / window.innerHeight) * 100
      }%`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Computer Paddle AI
    const handleBallFollow = () => {
      computerPaddleRef.current!.style.top = `${(computerPaddlePos.current.y +=
        MAX_SPEED *
        clock.current *
        (ballPos.current.y - computerPaddlePos.current.y))}%`;
    };

    const handleLose = () => {
      if (
        ballRef.current!.getBoundingClientRect().right >= window.innerWidth ||
        ballRef.current!.getBoundingClientRect().left <= 0
      ) {
        if (
          ballRef.current!.getBoundingClientRect().right >= window.innerWidth
        ) {
          playerScoreCountRef.current += 1;
          playerScoreRef.current!.textContent = `${playerScoreCountRef.current!}`;
        } else {
          setIsLose(true);
          computerScoreCountRef.current += 1;
          computerScoreRef.current!.textContent = `${computerScoreCountRef.current!}`;
        }
        ballDirection.current.x = Math.cos(INITIAL_DIRECTION) as number;
        ballDirection.current.y = Math.sin(INITIAL_DIRECTION) as number;
        ballPos.current.y = 50 as number;
        ballPos.current.x = 50 as number;
        playerPaddlePos.current.y = 50 as number;
        computerPaddlePos.current.y = 50 as number;
      }
    };

    let raf: any;
    let h: number, m: number, s: number;
    const update = (time: number) => {
      h = Math.floor(time / 1000 / 60 / 60);
      m = Math.floor((time / 1000 / 60 / 60 - h) * 60);
      s = Math.floor(((time / 1000 / 60 / 60 - h) * 60 - m) * 60);
      clock.current = s;
      updateBall();
      handleBallFollow();
      handleLose();
      raf = requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {" "}
      <Navbar />
      <div
        id="bg-hero"
        ref={backgroundRef}
        className="hide-scroll scrollbar h-[100vh] text-center"
      >
        <div className="flex">
          <div ref={playerScoreRef} className="player-score"></div>
          <div
            ref={computerScoreRef}
            className="computer-score text-gray-900"
          ></div>
        </div>
        <div
          ref={playerPaddleRef}
          className={
            "absolute left-[1vw] top-[1/2]  h-[10vh] w-[1vw] translate-y-[-50%] bg-white"
          }
        ></div>
        <div
          ref={computerPaddleRef}
          className={
            "absolute right-[1vw] top-[1/2] h-[10vh] w-[1vw] translate-y-[-50%] bg-white"
          }
        ></div>
        <div
          ref={ballRef}
          className={
            "absolute left-[50%] top-[50%] h-[15px] w-[15px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-primary-100"
          }
        ></div>
        <div className="absolute left-[50%] isolate translate-x-[-50%] px-2 pt-0 ">
          <div className="mx-auto max-w-3xl py-32 sm:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-primary-100 transition-all hover:text-gray-400 hover:ring-primary-200">
                Sygma is now LIVE on mainnet.{" "}
              </div>
            </div>
            <div className="z-10 text-center">
              <h1 className="text-4xl font-semibold text-gray-100 sm:text-6xl">
                Fast, secure, and reliable cross-chain communication
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Provide an any-to-any user experience with seamless connectivity
                across EVM, Substrate, and beyond.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <ExternalButton href="/developers" type="primary">
                  Start Building
                </ExternalButton>
                <ExternalButton href="/consulting" type="link">
                  Solutions <span aria-hidden="true">→</span>
                </ExternalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
