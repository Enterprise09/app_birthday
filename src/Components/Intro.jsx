import Typewriter from "typewriter-effect";
import vimg6 from "../imgs/vertical/vimg(6).JPG";
import React, { forwardRef } from "react";

const Intro = forwardRef((props, ref) => {
  return (
    <div
      id="intro"
      className="intro container"
      style={{ textAlign: "center" }}
      ref={ref}
    >
      <h1 className="h1-title">🎉경축🎉</h1>
      <br />
      <Typewriter
        options={{
          wrapperClassName: "intro-typed",
          strings: "❤생일을 축하합니다❤",
          autoStart: true,
          loop: true,
        }}
      />
      <img alt="intro-pic" src={vimg6} />
      <p>
        🎤아아🎤
        <br />
        명장 김이화 선생님의
        <br />
        2024년 생신축하가 있겠습니다.
      </p>
      <br />
      {/* <button
        className="btn"
        onClick={() => {
          window.location.href = "#about";
        }}
      >
        진행하기
      </button> */}
    </div>
  );
});

export default Intro;
