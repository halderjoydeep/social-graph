import { leftSidebarOptions } from "@/constants";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-20 w-[16rem] bg-card p-6">
      <nav className="mt-6 flex flex-col space-y-4">
        {leftSidebarOptions.map((option) => (
          <SidebarIcon
            key={option.label}
            Icon={option.icon}
            label={option.label}
            href={option.href}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
