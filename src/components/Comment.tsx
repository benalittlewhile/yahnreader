import { useState } from "react";
import { Comment } from "../lib/types";

export function ReaderComment({ comment }: { comment: Comment }) {
  let [isFolded, setIsFolded] = useState(false);

  function toggleFold() {
    setIsFolded(!isFolded);
  }

  return (
    <div
      className={isFolded ? "mb-4 w-full bg-orange-900 p-4" : ""}
      onClick={isFolded ? toggleFold : () => {}}
    >
      {!isFolded && (
        <>
          {comment.text && (
            <li
              onClick={toggleFold}
              className="mb-4 w-full bg-orange-900 p-4"
              key={comment.id}
            >
              <div className="mb-2 flex justify-between text-sm text-gray-300">
                {comment.by}
                {comment.score}
              </div>
              <div
                className="max-w-full text-white [&_a]:underline [&_pre]:whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: comment.text }}
                onClick={(e) => {
                  // this is horrid but it's an appropriate solution given the
                  // direct use of the comment body as html
                  let properElement = e.target as HTMLAnchorElement;
                  e.preventDefault();
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                  if (properElement.nodeName === "A") {
                    window.open(properElement.href, "_blank");
                  }
                  if (properElement.nodeName === "P") {
                    setIsFolded(!isFolded);
                  }
                }}
              ></div>
            </li>
          )}
          <div className="ml-4">
            {comment.kids.length > 1 &&
              comment.kids.map((comment) => (
                <ReaderComment comment={comment} key={comment.id} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
