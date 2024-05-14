import { PostCard } from "@/components";
import { posts } from "@/constants/data";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
