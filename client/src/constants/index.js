import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'about us',
    imgUrl: payment,
    link: '/about_us',
  },
  // {
  //   name: 'withdraw',
  //   imgUrl: withdraw,
  //   link: '/',
  //   disabled: true,
  // },
  // {
  //   name: 'profile',
  //   imgUrl: profile,
  //   link: '/profile',
  // },
  // {
  //   name: 'logout',
  //   imgUrl: logout,
  //   link: '/',
  //   disabled: true,
  // },
];
