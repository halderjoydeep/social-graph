import { AtomIcon, MoreVerticalIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface PostCardHeaderProps {
  topic: string;
  topicIcon?: string;
  userId: string;
  updatedAt: string;
}

const PostCardHeader = ({
  topic,
  userId,
  updatedAt,
  topicIcon,
}: PostCardHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <Avatar className="border p-1">
          <AvatarImage src={topicIcon} alt="@shadcn" className="object-cover" />
          <AvatarFallback>
            <AtomIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <div className="text-sm">t/{topic}</div>
            <div className="rounded-full bg-primary px-3 py-[1px] text-xs">
              Join
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-xs text-muted-foreground">@{userId}</div>
            <div className="text-xs text-muted-foreground">•</div>
            <div className="text-xs text-muted-foreground">{updatedAt}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* <div className="text-sm text-muted-foreground">{updatedAt}</div> */}
        <div className="relative flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden rounded-full p-1 hover:bg-background">
          <MoreVerticalIcon className="h-4 w-4 text-muted-foreground" />
          <div className="absolute inset-0 rounded-full border border-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default PostCardHeader;
