import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface HeaderIconProps {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const HeaderIcon = ({ Icon }: HeaderIconProps) => {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-full bg-background p-2.5 hover:bg-background-hover">
      <Icon className="h-5 w-5" />
    </div>
  );
};

export default HeaderIcon;
