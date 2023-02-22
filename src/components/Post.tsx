import { getUrlFragment } from "../lib/strings";

export interface PostProps {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string; // later could/should be an enum?
  url: string;
}

export default function Post({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
}: PostProps) {
  return (
    <div
      className="m-2 mb-3 flex flex-col overflow-hidden text-ellipsis px-2 text-sm"
      key={id}
    >
      <span className="h-fit min-h-fit text-start font-bold">
        {title}
        <span className="float-right overflow-hidden text-ellipsis font-normal">
          (
          <a
            href={url}
            className="overflow-hidden text-ellipsis whitespace-nowrap text-xs underline"
          >
            {getUrlFragment(url)}
          </a>
          )
        </span>
      </span>
      <span
        className="mt-1 text-start text-sm
      "
      >
        by {by} with {descendants} comments
      </span>
    </div>
  );
}
