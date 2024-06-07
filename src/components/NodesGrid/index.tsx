import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { nodes } from "@/constants/data";
import { AtomIcon, ChevronRightIcon } from "lucide-react";

export default function NodesGrid() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {nodes.map((node) => (
        <div
          key={node.id}
          className="group flex cursor-pointer items-center gap-4 rounded-3xl bg-card p-6 hover:bg-primary"
        >
          <Avatar className="border p-1 group-hover:border-foreground group-hover:bg-foreground">
            <AvatarImage
              src={node.icon}
              alt={node.name}
              className="object-cover"
            />
            <AvatarFallback>
              <AtomIcon />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <div className="text-sm group-hover:font-semibold">{node.name}</div>
            <div className="text-xs text-muted-foreground group-hover:text-foreground">
              {node.members} members
            </div>
          </div>
          <ChevronRightIcon className="ml-auto h-8 w-8 text-muted-foreground group-hover:text-foreground" />
        </div>
      ))}
    </div>
  );
}
