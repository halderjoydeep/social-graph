import {
  ArrowBigDownIcon,
  ArrowBigUpIcon,
  BookmarkIcon,
  MessageCircle,
} from "lucide-react";

interface PostCardFooterProps {
  vote: number;
  comments: number;
}

const PostCardFooter = ({ vote, comments }: PostCardFooterProps) => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {/* Like */}
        <div className="flex h-10 items-center gap-2 rounded-full bg-background px-2">
          <ArrowBigUpIcon className="cursor-pointer text-muted-foreground hover:fill-[#008000] hover:stroke-[#008000]" />
          <span className="block text-sm text-muted-foreground">{vote}</span>
          <ArrowBigDownIcon className="cursor-pointer text-muted-foreground hover:fill-[#c32020] hover:stroke-[#c32020]" />
        </div>

        {/* Comment */}
        <div className="flex h-10 items-center gap-2 rounded-full bg-background px-4">
          <MessageCircle className="h-5 w-5 text-muted-foreground" />
          <span className="block text-sm text-muted-foreground">
            {comments} Comments
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <BookmarkIcon className="text-muted-foreground" />
      </div>
    </div>
  );
};

export default PostCardFooter;
