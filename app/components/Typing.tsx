import React from "react";
import Typed from "typed.js";

export default function Typing() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '$&nbsp; Welcome to <span class="text-primary">Code Mastery</span>👨 💻<br/><span class="text-primary"> let i = code;</span><br/><span class="text-primary"> let i = learn;</span><br/><span class="text-primary"> let i = master;</span><br/><span class="text-primary"> let i = repeat;🚀</span>',
        '$&nbsp; for (let i = 0; i < 100; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Welcome to Code Mastery");<br/>}',
        '$&nbsp; <span className="text-success">while</span> (true) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Welcome to Code Mastery");<br/>}',
        '$&nbsp; <span className="text-success text-yellow-500" >Happy Coding!🚀</span>',
      ],
      typeSpeed: 50,
      backSpeed: 0,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className=" text-white" />
    </div>
  );
}