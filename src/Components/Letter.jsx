import React, { forwardRef } from "react";
import Typewriter from "typewriter-effect";

const Letter = forwardRef((props, ref) => {
  return (
    <div id="letter" className="Letter container" ref={ref}>
      <h1 style={{ textAlign: "center" }}>🎧 글 속에서 🎧</h1>
      <div className="letter-text-box">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Happy Birthday!!!<br /><br />오늘 함께 있지 못하지만<br />함께 있는 것처럼 <br />행복한 시간이 되었으면 좋겠어<br /><br />지금까지 함께했고,<br />앞으로 함께할꺼고,<br />영원히 함께할거니까<br />그 때가 영원히 함께할테니까<br />영원히 행복한 일만 가득하자<br /><br />행복한 일이<br />누군가를 통해서<br />또 우리를 통해서<br />다른 사람들에게도 전해지는<br />그리스도의 향기를 발하자<br /><br />지금보다도 더욱 아름다워질👍<br />엄마의 지금을 응원하면서✨<br /><br /><br />아들 태호가🎁"
              )
              .pauseFor(2500)
              .typeString("<br /><br />생일 축하해<br />")
              .pauseFor(5000)
              .start();
          }}
          options={{ wrapperClassName: "letter-text", loop: true }}
        />
      </div>
    </div>
  );
});

export default Letter;
