import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./styles.css";

export default function App() {

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "KASHIYATRA 2022" },
    {
      type: "heading2",
      text: "IIT (BHU)VARANASI"
    }
  ];
  const paragraphText=[
    {
      type: "paragraph",
      text: "Kashiyatra is housed in the holy city of Varanasi, the city older than history and with a cultural canvas as intricate as its gullies and offers a window into the hidden turnings of the city's soul. Owing to the ongoing global pandemic, Kashiyatra this year resorted to the online medium. Its sponsors include some of the biggest companies like Ultratech, 9xm, Daily Hunt, Growfitter, Spartan Poker and SECL, opening the doors to its events to countless students who couldn't have attended otherwise."
    }
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };



  return (
    <>
    <motion.div
      className="App"
      initial="hidden"

      animate="visible" 
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      <div className="container">
        {paragraphText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
   
    </>
    
  );
}
