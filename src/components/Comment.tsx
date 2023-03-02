import { Comment } from "../lib/types";

export function ReaderComment({ comment }: { comment: Comment }) {
  return (
    <div>
      <li
        className="mb-4 w-full bg-orange-900 p-4"
        dangerouslySetInnerHTML={{ __html: comment.text }}
        key={comment.id}
      ></li>
      <div className="ml-4">
        {comment.kids.length > 1 &&
          comment.kids.map((comment) => <ReaderComment comment={comment} />)}
      </div>
    </div>
  );
}
