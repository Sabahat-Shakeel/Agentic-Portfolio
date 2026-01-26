"use client";
import { useEffect, useState } from "react";
import {Sour_Gummy} from "next/font/google"

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

export default function AskAssistant() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`${sour_gummy.className} text-white/80 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      Ask Assistant
      </p>
  );
}
