import {
  shield,
  send,
  star,
  quotes,
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  dropbox,
  instagram,
  facebook,
  twitter,
  linkedin,
} from '../public/assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    link: '/',
  },
  {
    id: 'features',
    title: 'Features',
    link: '/#features',
  },
  {
    id: 'solution',
    title: 'Solution',
    link: '/#features',
  },
  {
    id: 'about',
    title: 'About us',
    link: '/#about-us',
  },
];

export const stats = [
  {
    id: 'stats-1',
    value: '3800+',
    title: 'user active',
  },
  {
    id: 'stats-2',
    value: '230+',
    title: 'trusted by company',
  },
  {
    id: 'stats-3',
    value: '230m+',
    title: 'transition',
  },
];

export const features = [
  {
    id: 'features-1',
    icon: star,
    title: 'Rewards',
    text: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'features-2',
    icon: shield,
    title: '100% Secured',
    text: 'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'features-3',
    icon: send,
    title: 'Balance Transfer',
    text: 'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];

export const feedbacks = [
  {
    id: 'Herman Jensen',
    icon: quotes,
    text: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    image: people01,
    clientName: 'Herman Jensen',
    clientPosition: 'Founder & Leader',
  },
  {
    id: 'Steve Mark',
    icon: quotes,
    text: 'Money makes your life easier. If you`re lucky to have it, you`re lucky.',
    image: people02,
    clientName: 'Steve Mark',
    clientPosition: 'Founder & Leader',
  },
  {
    id: 'Kenn Gallagher',
    icon: quotes,
    text: 'It is usually people in the money business, finance, and international trade that are really rich.',
    image: people03,
    clientName: 'Kenn Gallagher',
    clientPosition: 'Founder & Leader',
  },
];

export const clients = [
  {
    id: 'airbnb',
    title: 'airbnb',
    logo: airbnb,
  },
  {
    id: 'coinbase',
    title: 'coinbase',
    logo: coinbase,
  },
  {
    id: 'binance',
    title: 'binance',
    logo: binance,
  },
  {
    id: 'dropbox',
    title: 'dropbox',
    logo: dropbox,
  },
];

export const usefullLinks = [
  {
    title: 'Usefull Links',
    links: [
      {
        id: 'content',
        item: 'Content',
      },
      {
        id: 'how it works',
        item: 'How it works',
      },
      {
        id: 'create',
        item: 'Create',
      },
      {
        id: 'explore',
        item: 'Explore',
      },
      {
        id: 'Term & services',
        item: 'Term & services',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        id: 'help Center',
        item: 'Help Center',
      },
      {
        id: 'partners',
        item: 'Partners',
      },
      {
        id: 'suggestions',
        item: 'Suggestions',
      },
      {
        id: 'blog',
        item: 'Blog',
      },
      {
        id: 'newsletters',
        item: 'Newsletters',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        id: 'our Partner',
        item: 'Our Partner',
      },
      {
        id: 'become a Partner',
        item: 'Become a Partner',
      },
    ],
  },
];

export const social = [
  {
    id: 'instagram',
    icon: instagram,
  },
  {
    id: 'facebook',
    icon: facebook,
  },
  {
    id: 'twitter',
    icon: twitter,
  },
  {
    id: 'linkedin',
    icon: linkedin,
  },
];
