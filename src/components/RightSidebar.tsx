import { TrendingUpIcon } from "lucide-react";
import SidebarIcon from "./SidebarIcon";

const RightSidebar = () => {
  return (
    <aside className="fixed bottom-0 right-0 top-20 w-[16rem] bg-card p-6">
      <nav className="flex flex-col space-y-4">
        <SidebarIcon Icon={TrendingUpIcon} label="Trending" href="/trending" />
      </nav>
    </aside>
  );
};

export default RightSidebar;
