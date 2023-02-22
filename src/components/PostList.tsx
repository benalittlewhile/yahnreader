import Post from "./Post";
import { placeholderPosts as posts } from "../test/placeholderData";

export default function PostList() {
  // show a list of results of the given type
  return (
    <div className="max-h-screen overflow-scroll">
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}
