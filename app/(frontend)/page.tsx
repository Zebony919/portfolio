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
    <div className="flex flex-col flex-1 items-center justify-center gap-40 bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full pt-10 pb-8 flex flex-wrap gap-28 justify-center bg-black font-nova text-3xl">
            <a href="#about" className="hover:underline hover:cursor-pointer">About</a>
            <a href="#projects" className="hover:underline hover:cursor-pointer">Projects</a>
            <a href="#skills" className="hover:underline hover:cursor-pointer">Skills</a>
            <a href="#contacts" className="hover:underline hover:cursor-pointer">Contacts</a>
      </div>

      <div className="p-10 mt-10 mb-10 border-8 border-white">
        <canvas ref={canvasRef} id="game"/>
      </div>

      <div id="about" className="w-full mb-30 font-nova">
        <h1 className="w-full pl-60 text-4xl">About</h1>
        <p className="w-[60%] mt-10 justify-self-center text-2xl text-center">
          Loren sel ars wel Loren sel ars wel Loren sel ars wel
          Loren sel ars wel Loren sel ars wel Loren sel ars wel
          Loren sel ars wel Loren sel ars wel Loren sel ars wel
          Loren sel ars wel Loren sel ars wel Loren sel ars wel
          Loren sel ars wel Loren sel ars wel Loren sel ars wel
          Loren sel ars wel Loren sel ars wel Loren sel ars wel
        </p>
      </div>

      <div id="projects" className="w-full font-nova">
        <h1 className="w-full pl-60 pb-20 text-4xl">Projects - Click to learn more</h1>

        <div className="pl-60 flex flex-wrap gap-10">
          <div className="w-100 md:w-100 h-200 md:h-170 flex justify-center items-center bg-green-900 
                        transition duration-300 hover:opacity-50 hover:cursor-pointer">
            <h1 className="font-bold text-5xl text-black">LC3 - Emulator</h1>
          </div>

          <div className="flex flex-col gap-10">
            <div className="w-100 md:w-200 h-200 md:h-80 flex justify-center items-center bg-purple-900 
                          transition duration-300 hover:opacity-50 hover:cursor-pointer">
              <h1 className="font-bold text-5xl text-black">WDCC - Rapture</h1>
            </div>

            <div className="w-100 md:w-200 h-200 md:h-80 flex justify-center items-center bg-yellow-700 
                          transition duration-300 hover:opacity-50 hover:cursor-pointer">
              <h1 className="font-bold text-5xl text-black">The Odin Project</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="w-full flex flex-col items-center font-nova">
        <h1 className="w-full pl-60 text-4xl">Skills</h1>

        <div className="w-[60%] grid grid-cols-4 place-items-center gap-5 mt-10">
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>

          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
          <div className="w-50 h-10 bg-red-600 rounded-2xl"></div>
        </div>
      </div>

      <div id="contacts" className="w-full flex flex-col items-center mb-30 font-nova">
        <h1 className="w-full pl-60 text-4xl">Contacts</h1>

        <div className="flex gap-20 mt-10">
          <div className="w-60 h-15 flex justify-center items-center bg-blue-800 rounded-2xl transition duration-300 hover:bg-blue-400">
            <a href="https://www.gmail.com" target="_blank" className="text-xl text-black font-bold">Zebony9@gmail.com</a>
          </div>

          <div className="w-60 h-15 flex justify-center items-center bg-blue-800 rounded-2xl transition duration-300 hover:bg-blue-400">
            <a href="https://github.com/Zebony919" target="_blank" className="text-xl text-black font-bold">Github</a>
          </div>
          <div className="w-60 h-15 bg-blue-800 rounded-2xl transition duration-300 hover:bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
}
