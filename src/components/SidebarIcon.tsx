import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SidebarIconProps {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
}

const SidebarIcon = ({ Icon, label }: SidebarIconProps) => {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-full px-3 py-2 hover:bg-primary hover:font-medium">
      <Icon className="h-5 w-5" />
      <div className="">{label}</div>
    </div>
  );
};

export default SidebarIcon;
