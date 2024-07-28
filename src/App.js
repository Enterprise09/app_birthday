import About from "./Components/About";
import Intro from "./Components/Intro";
import Letter from "./Components/Letter";
import Nav from "./Components/Nav";

import intro_audio from "./audios/intro-fade.mp3";
import about_audio from "./audios/about-fade.mp3";
import letter_audio from "./audios/letter-fade.mp3";

import "./css/app.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const audio_ref = useRef(null);
  const [ref_about, inView_about] = useInView();
  const [ref_letter, inView_letter] = useInView();
  const [menu, setMenu] = useState(0);

  useEffect(() => {
    if (inView_about) {
      audio_ref.current.src = about_audio;
      audio_ref.current.play();
    }
  }, [inView_about]);

  useEffect(() => {
    if (inView_letter) {
      audio_ref.current.src = letter_audio;
      audio_ref.current.play();
    }
  }, [inView_letter]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // 927 - about
      // 5800 - letter
      // console.log(window.scrollY);
      const pos = window.scrollY;
      if (pos >= 927 && pos < 5800) {
        // console.log("about page");
        setMenu(1);
      } else if (pos >= 5800) {
        // console.log("letter page");
        setMenu(2);
      }
    });
  }, []);

  return (
    <div className="App">
      <audio ref={audio_ref} loop autoPlay></audio>
      <Nav current={menu} />
      <Intro />
      <About ref={ref_about} />
      <Letter ref={ref_letter} />
      <footer>&copy; All right resolved by Teaho Kim. Since 2024</footer>
    </div>
  );
}

export default App;
