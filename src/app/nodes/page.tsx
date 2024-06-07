import NodesGrid from "@/components/NodesGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between gap-8">
        <Input
          placeholder="Search Nodes..."
          className="rounded-full bg-card px-4 py-6"
        />
        <Button className="rounded-full">Create Node</Button>
      </div>

      <NodesGrid />
    </div>
  );
}
