import byimg1 from "../imgs/1by1/1.JPG";
import byimg2 from "../imgs/1by1/2.JPG";
import EmblaCarousel from "./Carousel/EmblaCarousel";
import "../css/embla.css";

import vimg1 from "../imgs/vertical/vimg(1).JPG";
import vimg2 from "../imgs/vertical/vimg(2).JPG";
import vimg3 from "../imgs/vertical/vimg(3).JPG";
import vimg4 from "../imgs/vertical/vimg(4).JPG";
import vimg5 from "../imgs/vertical/vimg(5).JPG";
import vimg7 from "../imgs/vertical/vimg(7).JPG";
import vimg8 from "../imgs/vertical/vimg(8).JPG";
import vimg9 from "../imgs/vertical/vimg(9).JPG";
import vimg10 from "../imgs/vertical/vimg(10).JPG";
import vimg11 from "../imgs/vertical/vimg(11).JPG";

import wimg1 from "../imgs/with/wimg(1).JPG";
import wimg2 from "../imgs/with/wimg(2).JPG";
import wimg3 from "../imgs/with/wimg(3).JPG";
import wimg4 from "../imgs/with/wimg(4).JPG";
import wimg5 from "../imgs/with/wimg(5).JPG";
import wimg6 from "../imgs/with/wimg(6).JPG";
import wimg7 from "../imgs/with/wimg(7).JPG";
import wimg8 from "../imgs/with/wimg(8).JPG";
import wimg9 from "../imgs/with/wimg(9).JPG";
import wimg10 from "../imgs/with/wimg(10).JPG";

import img1 from "../imgs/img(2).JPG";
import img4 from "../imgs/img(4).JPG";
import img7 from "../imgs/img(7).JPG";
import img11 from "../imgs/img(11).JPG";
import img15 from "../imgs/img(15).JPG";
import img25 from "../imgs/img(25).JPG";
import img27 from "../imgs/img(27).JPG";
import img29 from "../imgs/img(29).JPG";
import img33 from "../imgs/img(33).JPG";
import img45 from "../imgs/img(45).JPG";

import img2 from "../imgs/img(2).JPG";
import img3 from "../imgs/img(3).JPG";
import img19 from "../imgs/img(19).JPG";
import img22 from "../imgs/img(22).JPG";
import img24 from "../imgs/img(24).JPG";
import img31 from "../imgs/img(31).JPG";
import img36 from "../imgs/img(36).JPG";
import img52 from "../imgs/img(52).JPG";
import img53 from "../imgs/img(53).JPG";
import img56 from "../imgs/img(56).JPG";
import img57 from "../imgs/img(57).JPG";
import img58 from "../imgs/img(58).JPG";
import img60 from "../imgs/img(60).JPG";
import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  const OPTIONS = { dragFree: false, loop: true };
  const vimg_arr = [
    vimg1,
    vimg2,
    vimg3,
    vimg4,
    vimg5,
    vimg7,
    vimg8,
    vimg9,
    vimg10,
    vimg11,
  ];
  const wimg_arr = [
    wimg1,
    wimg2,
    wimg3,
    wimg4,
    wimg5,
    wimg6,
    wimg7,
    wimg8,
    wimg9,
    wimg10,
  ];

  const img_arr = [
    img1,
    img4,
    img7,
    img11,
    img15,
    img25,
    img27,
    img29,
    img33,
    img45,
  ];

  return (
    <div id="about" className="about" ref={ref}>
      <h1 style={{ textAlign: "center" }}>👑 발자취 👑</h1>
      <br />
      <p>
        먼저 김이화 선생님의
        <br />
        발자취를 돌아보며
        <br />
        기쁨과 행복 가득한 날,
        <br />
        더욱 행복해져봐요
        <br />
      </p>
      <br />
      <img src={byimg2} alt="img" />
      <img src={img2} alt="img" />
      <img src={img3} alt="img" />
      <img src={img19} alt="img" />
      <EmblaCarousel slides={vimg_arr} options={OPTIONS} />
      <img src={img22} alt="img" />
      <img src={img24} alt="img" />
      <img src={img36} alt="img" />
      <img src={img52} alt="img" />
      <EmblaCarousel slides={img_arr} options={OPTIONS} />
      <img src={img53} alt="img" />
      <img src={img56} alt="img" />
      <img src={img58} alt="img" />
      <img src={img60} alt="img" />
      <EmblaCarousel slides={wimg_arr} options={OPTIONS} />
      <img src={img57} alt="img" />
    </div>
  );
});

export default About;
