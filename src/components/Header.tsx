import {
  BellIcon,
  HomeIcon,
  MessageCircleMoreIcon,
  Search,
} from "lucide-react";
import Link from "next/link";
import HeaderIcon from "./HeaderIcon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <div className="bg-card/90 fixed inset-0 z-10 flex h-20 items-center justify-between border-b px-10 backdrop-blur">
      <div className="text-2xl font-bold">
        Social<span className="text-primary">Graph</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
          <Input
            className="w-[20rem] rounded-full px-10"
            placeholder="Search"
          />
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/">
            <HeaderIcon Icon={HomeIcon} />
          </Link>
          <HeaderIcon Icon={BellIcon} />
          <HeaderIcon Icon={MessageCircleMoreIcon} />
        </nav>

        <Button className="rounded-full">Login</Button>
      </div>
    </div>
  );
};

export default Header;
