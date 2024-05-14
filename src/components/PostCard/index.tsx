import { Post } from "@/constants/data";
import PostCardContent from "./PostCardContent";
import PostCardFooter from "./PostCardFooter";
import PostCardHeader from "./PostCardHeader";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="rounded-3xl bg-card p-6">
      <PostCardHeader
        topic={post.topic}
        topicIcon={post.topicIcon}
        userId={post.user.id}
        updatedAt={post.updatedAt}
      />
      <PostCardContent title={post.title} description={post.description} />
      <PostCardFooter vote={post.vote} comments={post.comments} />
    </div>
  );
};

export default PostCard;
