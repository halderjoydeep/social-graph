interface PostCardContentProps {
  title: string;
  description: React.ReactNode;
}

const PostCardContent = ({ title, description }: PostCardContentProps) => {
  return (
    <div>
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-2 max-w-[90%] text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default PostCardContent;
