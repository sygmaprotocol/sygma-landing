import {
  PhoneIcon,
} from '@heroicons/react/20/solid';
import {
  BookOpenIcon,
  CommandLineIcon,
  Square3Stack3DIcon,
  WrenchScrewdriverIcon,
  WrenchIcon,
  ChatBubbleLeftEllipsisIcon,
  CursorArrowRaysIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline';

export type FooterLink = {
  name: string;
  img?: string;
  link: string;
}

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
    name: 'Sygma SDK',
    description: 'Build cross-chain dapps.',
    href: '#',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Sygma Explorer',
    description: 'Monitor cross-chain transactions.',
    href: '#',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Services',
    description: 'Engineering and research at your service.',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
];

export const navbarProductCTA = [
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];


export const navbarDeveloperOptions: MenuOption[] = [
   {
    name: 'Developer Resources',
    description: 'Start building on Sygma.',
    href: '#',
    icon: CommandLineIcon,
  },
  {
    name: 'Documentation',
    description: 'View examples, guides and more.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Discord',
    description: 'Join the developer community.',
    href: '#',
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

export const navbarDeveloperCTA = [
  { name: 'Builder\'s Program 2023', href: '#', icon: WrenchIcon },

];

export const navbarDiscoverOptions: MenuOption[] = [
   {
    name: 'Blog',
    description: 'Stay up to date with Sygma.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
   {
     name: 'Contact',
     description: 'Ask a question or make a request',
    href: '#',
    icon: ChatBubbleLeftEllipsisIcon,
  },
];


export const footerLinks: FooterLink[] = [
  {
    name: "Discord",
    link: "https://discord.gg/Qdf6GyNB5J"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/buildwithsygma"
  },
  {
    name: "Documentation",
    link: "https://docs.buildwithsygma.com/github-repositories"
  },
]