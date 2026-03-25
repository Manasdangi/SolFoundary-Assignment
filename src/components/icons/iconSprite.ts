import type React from "react";

import ChatIcon from "./ChatIcon";
import FolderIcon from "./FolderIcon";
import HashIcon from "./HashIcon";
import MessageIcon from "./MessageIcon";
import SparkleIcon from "./SparkleIcon";
import UserIncomingIcon from "./UserIncomingIcon";
import UserOutgoingIcon from "./UserOutgoingIcon";
import UsersIcon from "./UsersIcon";

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const ICON_SPRITE = {
  chat: ChatIcon,
  folder: FolderIcon,
  hash: HashIcon,
  message: MessageIcon,
  sparkle: SparkleIcon,
  userIncoming: UserIncomingIcon,
  userOutgoing: UserOutgoingIcon,
  users: UsersIcon,
} as const satisfies Record<string, IconComponent>;

export type IconKey = keyof typeof ICON_SPRITE;
