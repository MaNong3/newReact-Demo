import React, { useState,useEffect } from "react"
function Example() {
  const [count, setCount] = useState(0);
  //默认情况下 它会在第一次 render 和之后的每次 update 后运行
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      🔴
     </button>
    </div>
  );
}
export default Example