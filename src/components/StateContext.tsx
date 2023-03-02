import { createContext, Dispatch } from "react";
import { StoriesReducerAction, Story } from "../lib/types";

export const StateContext = createContext<{
  state: (number | Story)[];
  dispatch: Dispatch<StoriesReducerAction>;
  selectedPost: number | undefined;
}>({ state: [], dispatch: () => null, selectedPost: undefined });
// export const DispatchContext = createContext<Dispatch<StoriesReducerAction>>(
//   () => null
// );
