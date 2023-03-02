import { useContext } from "react";
import { ReaderComment } from "./Comment";
import { StateContext } from "./StateContext";

// passing the reader the current parent object when it is selected..
export default function Reader() {
  let { state, dispatch, selectedPost } = useContext(StateContext);
  let parent = state.find(
    (post) => typeof post === "object" && post.id === selectedPost
  );
  return (
    <div className="mx-36 max-h-screen overflow-auto px-2 py-2">
      {typeof parent === "object" && selectedPost && (
        <>
          {parent?.text && (
            <div>
              <p>{parent.text}</p>
            </div>
          )}
          <ul>
            {parent?.kids?.map((kid) => (
              <ReaderComment comment={kid} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
