import {
  AppointmentsIcon,
  DashboardIcon,
  MessagingIcon,
  ReferralsIcon,
  SettingsIcon,
} from '@/SVGs/CustomSVGs';

export const SidebarData = [
  {
    id: 'tab1',
    icon: <DashboardIcon />,
    title: 'Analytics',
    url: '/',
  },
  {
    id: 'tab2',
    icon: <ReferralsIcon />,
    title: 'Referrals',
    url: '/referrals',
  },

  {
    id: 'tab5',
    icon: <AppointmentsIcon />,
    title: 'Appointments',
    url: '/appointments',
  },
  {
    id: 'tab6',
    icon: <MessagingIcon />,
    title: 'Messages',
    url: '/messages',
  },

  {
    id: 'tab9',
    icon: <SettingsIcon />,
    title: 'Settings',
    url: '/settings',
  },
];
