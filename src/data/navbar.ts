import { PhoneIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  Square3Stack3DIcon,
  WrenchScrewdriverIcon,
  WrenchIcon,
  ChatBubbleLeftEllipsisIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

export type FooterLink = {
  name: string;
  img?: string;
  link: string;
};

export type MenuOption = {
  name: string;
  href: string;
  description?: string;
  icon: SVGAElement | any;
};

export type CTA = {
  name: string;
  href: string;
  icon?: SVGAElement | any;
};

export const navbarProductOptions: MenuOption[] = [
  {
    name: "Sygma SDK",
    description: "Build cross-chain dapps.",
    href: "https://github.com/sygmaprotocol/sygma-sdk",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Solutions",
    description: "Engineering and research at your service.",
    href: "/solutions",
    icon: WrenchScrewdriverIcon,
  },
];

export const navbarProductCTA = [
  { name: "Contact", href: "/general-inquiry", icon: PhoneIcon },
];

export const navbarDeveloperOptions: MenuOption[] = [
  {
    name: "Documentation",
    description: "View examples, guides and more.",
    href: "https://docs.buildwithsygma.com/",
    icon: BookOpenIcon,
  },
  {
    name: "Discord",
    description: "Join the developer community.",
    href: "https://discord.gg/Qdf6GyNB5J",
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

export const navbarDeveloperCTA = [
  { name: "Apply to Builder's Program", href: "/builders-program", icon: WrenchIcon },
];

export const navbarDiscoverOptions: MenuOption[] = [
  {
    name: "Blog",
    description: "Stay up to date with Sygma.",
    href: "https://blog.buildwithsygma.com/",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Contact",
    description: "Ask a question or make a request",
    href: "/contact",
    icon: ChatBubbleLeftEllipsisIcon,
  },
];
