import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.to(".download-btn", {
      scale: 1.1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    });
  });
  return (
    <main className="flex flex-col justify-center items-center min-h-[100vh] gap-[20px]">
      <h1 className="text-[32px] leading-[100%] text-center">
        Download Document
      </h1>
      <a
        href="/Programme.docx"
        target="_blank"
        className="bg-black rounded-[8px] text-[16px] px-[30px] py-[8px] text-white download-btn"
        aria-label="download document"
      >
        Download
      </a>
    </main>
  );
}

export default App;
