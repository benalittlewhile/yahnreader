import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Reader from "./components/Reader";
import { StateContext } from "./components/StateContext";
import { fetchPost, fetchPostComments, fetchPosts } from "./lib/fetching";
import { storiesReducer } from "./lib/state";
import { Story } from "./lib/types";

function Bumper() {
  return <div className="h-full w-full bg-hnTopOrange " />;
}

function App() {
  const initialLoadRef = useRef(false);
  const [state, dispatch] = useReducer(storiesReducer, []);
  const [selectedPost, setSelectedPost] = useState<number | undefined>(
    undefined
  );

  function selectAndLoad(post: Story) {
    if (post?.kids === null) {
      fetchPostComments(post.id).then((comments) => {
        dispatch({
          type: "loadPostComments",
          body: { id: post.id, comments: comments },
        });
      });
    }
    setSelectedPost(post.id);
  }

  useEffect(() => {
    if (initialLoadRef.current === false) {
      initialLoadRef.current = true;
      fetchPosts().then((postIds) => {
        dispatch({ type: "addPosts", body: postIds });
        postIds.forEach((postId) => {
          fetchPost(postId).then((body) => {
            dispatch({ type: "loadPost", body: { ...body, kids: null } });
          });
        });
      });
    }
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch, selectedPost }}>
      <div className="flex max-h-full max-w-full flex-col items-center justify-center  bg-white text-black dark:bg-black dark:text-white">
        <div className="grid max-h-screen w-full grid-cols-[2fr_3px_6fr] ">
          <PostList
            posts={state ? state : []}
            changeStoryHandler={selectAndLoad}
          />
          <Bumper />
          <Reader />
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
