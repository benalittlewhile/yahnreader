import { Dispatch, SetStateAction } from "react";
import { getUrlFragment } from "../lib/strings";
import { Story } from "../lib/types";

export default function Post({
  story,
  changeStoryHandler,
}: {
  story: Story;
  changeStoryHandler: (post: Story) => void;
}) {
  let { by, descendants, id, kids, score, time, title, type, url } = story;
  return (
    <div
      className="border-b- flex flex-col overflow-hidden text-ellipsis border-b-2 border-gray-400 px-2 py-2 text-sm"
      key={id}
      onClick={() => {
        changeStoryHandler(story);
      }}
    >
      <span className="h-fit min-h-fit text-start font-bold">
        {title}
        {url && (
          <span className="float-right overflow-hidden text-ellipsis font-normal">
            (
            <a
              href={url}
              className="overflow-hidden text-ellipsis whitespace-nowrap text-xs underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getUrlFragment(url)}
            </a>
            )
          </span>
        )}
      </span>
      <span className="mt-1 text-start text-sm">
        by {by} with {descendants} comments
      </span>
    </div>
  );
}
