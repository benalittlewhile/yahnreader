import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Reader from "./components/Reader";

function Bumper() {
  return <div className="h-full w-1/12 bg-hnTopOrange " />;
}

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  return (
    <div className="flex max-h-full max-w-full flex-col items-center justify-center  bg-white text-black dark:bg-black dark:text-white">
      <div className="grid max-h-screen max-w-full grid-cols-[2fr_0.1fr_6fr] ">
        <PostList />
        <Bumper />
        <Reader />
      </div>
    </div>
  );
}

export default App;
