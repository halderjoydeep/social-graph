import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SidebarIconProps {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  href: string;
}

const SidebarIcon = ({ Icon, label, href }: SidebarIconProps) => {
  return (
    <Link
      className="flex cursor-pointer items-center gap-4 rounded-full px-3 py-2 hover:bg-primary hover:font-medium"
      href={href}
    >
      <Icon className="h-5 w-5" />
      <div className="">{label}</div>
    </Link>
  );
};

export default SidebarIcon;
