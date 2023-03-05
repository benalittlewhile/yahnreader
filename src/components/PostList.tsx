import Post from "./Post";
import { Story } from "../lib/types";
import { Dispatch, SetStateAction } from "react";

export default function PostList({
  posts,
  changeStoryHandler,
}: {
  posts: (number | Story)[];
  changeStoryHandler: (post: Story) => void;
}) {
  // show a list of results of the given type
  return (
    <div className="max-h-screen overflow-scroll">
      <div className="bg-opacity-0 px-2 pb-1 text-hnTopOrange">y++ </div>
      {posts.length > 0 ? (
        posts.map(
          (post: number | Story) =>
            typeof post === "object" && (
              <Post
                story={post}
                key={post.id}
                changeStoryHandler={changeStoryHandler}
              />
            )
        )
      ) : (
        <div className="grid h-full w-full">
          <p className="m-auto">loading</p>
        </div>
      )}
    </div>
  );
}
