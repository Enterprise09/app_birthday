import { useEffect, useRef } from "react";

function Nav({ props }) {
  const nav = useRef(null);
  const hash = window.location.hash;

  useEffect(() => {
    console.log(window.scrollY);

    const children = [...nav.current.children];
    children.forEach((c) => c.classList.remove("nav-on"));
    if (hash) {
      switch (hash) {
        case "#intro":
          nav.current.children[0].classList.add("nav-on");
          break;
        case "#about":
          nav.current.children[1].classList.add("nav-on");
          break;
        case "#letter":
          nav.current.children[2].classList.add("nav-on");
          break;
        default:
          console.log("another page logic");
          break;
      }
    } else {
      nav.current.children[0].classList.add("nav-on");
    }
  }, [hash]);
  return (
    <div>
      <ul className="Nav-ul" ref={nav}>
        <li
          onClick={() => {
            window.location.href = "#intro";
          }}
        >
          처음으로
        </li>
        <li
          onClick={() => {
            window.location.href = "#about";
          }}
        >
          발자취
        </li>
        <li
          onClick={() => {
            window.location.href = "#letter";
          }}
        >
          마치는 글
        </li>
      </ul>
    </div>
  );
}

export default Nav;
