import { AlgoliaComment, AlgoliaResult, Story, Comment } from "./types";

const baseUrl = "https://hacker-news.firebaseio.com/v0";

const fetchItem = async (id: number) => {};

export const fetchPosts = async (): Promise<number[]> => {
  const posts = await fetch(
    `${baseUrl}/topstories.json?limitToFirst=30&orderBy="$key"`
  ).then((res) => res.json());

  return posts;
};

export const fetchPost = async (id: number) => {
  const post: Story = await fetch(`${baseUrl}/item/${id}.json`).then((res) =>
    res.json()
  );
  return post;
};

export const fetchPostComments = async (id: number) => {
  const comments = await fetch(`https://hn.algolia.com/api/v1/items/${id}`)
    .then((res) => res.json())
    .then((item: AlgoliaResult) =>
      item.children.map((child: AlgoliaComment) => parseComment(child))
    );
  return comments;
};

export const parseComment = (comment: AlgoliaComment): Comment => {
  return {
    by: comment.author,
    id: comment.id,
    kids:
      comment.children.length > 0
        ? comment.children.map((comment) => parseComment(comment))
        : [],
    parent: comment.parent_id,
    text: comment.text,
    time: comment.created_at_i,
    type: comment.type,
    score: comment.points,
  } as Comment;
};
