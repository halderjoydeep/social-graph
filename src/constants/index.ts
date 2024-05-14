import {
  BellIcon,
  BookmarkIcon,
  CompassIcon,
  HelpCircleIcon,
  HomeIcon,
  MessageCircleMoreIcon,
  SettingsIcon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
export const headerIcons = [HomeIcon, BellIcon, MessageCircleMoreIcon];

export const leftSidebarOptions: { icon: any; label: string }[] = [
  {
    label: "Home",
    icon: HomeIcon,
  },
  {
    label: "Discover",
    icon: CompassIcon,
  },
  {
    label: "Communities",
    icon: UsersIcon,
  },
  {
    label: "Bookmarks",
    icon: BookmarkIcon,
  },
  {
    label: "Profile",
    icon: UserIcon,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
  {
    label: "Help",
    icon: HelpCircleIcon,
  },
];

export const rightSidebarOptions: { icon: any; label: string }[] = [
  {
    label: "Trending",
    icon: TrendingUpIcon,
  },
];
