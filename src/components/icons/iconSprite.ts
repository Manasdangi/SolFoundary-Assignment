import type React from "react";

import ChatIcon from "./ChatIcon";
import FolderIcon from "./FolderIcon";
import HashIcon from "./HashIcon";
import MailIcon from "./MailIcon";
import MessageIcon from "./MessageIcon";
import SparkleIcon from "./SparkleIcon";
import UserCheckIcon from "./UserCheckIcon";
import UsersIcon from "./UsersIcon";

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const ICON_SPRITE = {
  chat: ChatIcon,
  folder: FolderIcon,
  hash: HashIcon,
  mail: MailIcon,
  message: MessageIcon,
  sparkle: SparkleIcon,
  userCheck: UserCheckIcon,
  users: UsersIcon,
} as const satisfies Record<string, IconComponent>;

export type IconKey = keyof typeof ICON_SPRITE;
