import { HomeIcon } from "lucide-react";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-20 w-[16rem] bg-card p-6">
      <SidebarIcon Icon={HomeIcon} label="Home" />
    </aside>
  );
};

export default Sidebar;
