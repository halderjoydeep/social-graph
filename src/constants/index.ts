import {
  BellIcon,
  BookmarkIcon,
  HelpCircleIcon,
  HomeIcon,
  MessageCircleMoreIcon,
  SettingsIcon,
  TrendingUpIcon,
  UserIcon,
  WorkflowIcon,
} from "lucide-react";

export const headerIcons = [HomeIcon, BellIcon, MessageCircleMoreIcon];

export const leftSidebarOptions: { icon: any; label: string; href: string }[] =
  [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/",
    },
    // {
    //   label: "Discover",
    //   icon: CompassIcon,
    //   href: "/discover",
    // },
    {
      label: "Nodes",
      icon: WorkflowIcon,
      href: "/nodes",
    },
    {
      label: "Bookmarks",
      icon: BookmarkIcon,
      href: "/bookmarks",
    },
    {
      label: "Profile",
      icon: UserIcon,
      href: "/profile",
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      href: "/settings",
    },
    {
      label: "Help",
      icon: HelpCircleIcon,
      href: "/help",
    },
  ];

export const rightSidebarOptions: { icon: any; label: string; href: string }[] =
  [
    {
      label: "Trending",
      icon: TrendingUpIcon,
      href: "/",
    },
  ];
