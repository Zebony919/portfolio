"use client";

import { useEffect, useRef } from "react";
import drawWireframe from "./renderer/renderer.js";
import Image from "next/image";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawWireframe(canvasRef.current);
    }
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="border-8 border-white">
        <canvas ref={canvasRef} id="game"/>
      </div>
    </div>
  );
}
