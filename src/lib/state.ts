import { StoriesReducerAction, Story } from "./types";

export function storiesReducer(
  state: (number | Story)[],
  action: StoriesReducerAction
) {
  switch (action.type) {
    case "addPosts": {
      return [...state, ...action.body];
    }

    case "loadPost": {
      return state.map((item: number | Story) => {
        return typeof item === "number" && item === action.body.id
          ? action.body
          : item;
      });
    }

    case "loadPostComments": {
      return state.map((item) => {
        return typeof item === "object" && item?.id === action.body.id
          ? { ...item, kids: action.body.comments }
          : item;
      });
    }
  }
}
