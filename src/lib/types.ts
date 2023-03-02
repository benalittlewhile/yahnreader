export enum listType {
  best = "best",
  top = "top",
  new = "bew",
  ask = "ask",
  show = "show",
  jobs = "jobs",
  comments = "comments",
}

// TODO
export enum itemTypeEnum {}

// this is only one type of post, need to also do ask and job
export interface Story {
  by: string;
  descendants: number; // the number of kids
  id: number;
  // doing it this way suggests that we could only load the post body once,
  // then mutate the kids array to contain the actual kids as we load them.
  kids: Comment[] | null;
  score: number;
  text?: string;
  time: EpochTimeStamp;
  title: string;
  type: string;
  url: string;
}

export interface Comment {
  by: string;
  id: number;
  kids: Comment[];
  parent: number;
  text: string;
  time: number;
  type: string; // this should probably be an enum
}

export interface AlgoliaResult {
  [otherProperties: string]: unknown;
  children: AlgoliaComment[];
}

export interface AlgoliaComment {
  id: number;
  created_at: string;
  created_at_i: EpochTimeStamp;
  type: string;
  author: string | null;
  title: null;
  url: null;
  text: string | null;
  points: number | null;
  parent_id: number;
  story_id: number;
  children: AlgoliaComment[];
  options: string[];
}

const testPost: Story = {
  by: "Ben",
  descendants: 2,
  id: 1,
  kids: null,
  score: 15,
  time: 0,
  title: "a test post",
  type: "Story",
  url: "https://benhickey.dev",
};

export type StoriesReducerAction =
  | { type: "addPosts"; body: number[] }
  | { type: "loadPost"; body: Story }
  | { type: "loadPostComments"; body: { id: number; comments: Comment[] } };
