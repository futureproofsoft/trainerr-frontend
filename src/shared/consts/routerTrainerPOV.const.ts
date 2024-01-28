import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faBell,
  faCog,
  faCommentMedical,
  faCubes,
  faDumbbell,
  faSackDollar,
  faUser,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { NavOption } from '@type/NavOption.type';

// TODO: Localize
export const trainerNavOptions: {
  topNavOptions: Array<NavOption>;
  bottomNavOptions: Array<NavOption>;
} = {
  topNavOptions: [
    {
      text: 'Training',
      icon: faDumbbell,
      to: '/trainer/training',
      navChildren: [
        {
          text: 'Plan',
          icon: null,
          to: '/trainer/training/plans',
          isChild: true,
        },
        {
          text: 'Exercises',
          icon: null,
          to: '/trainer/training/exercises',
          isChild: true,
        },
      ],
    },
    {
      text: 'Nutrition',
      icon: faApple,
      to: '/trainer/nutrition',
    },
    {
      text: 'Clients',
      icon: faUserFriends,
      to: '/trainer/clients',
    },
    {
      text: 'Notifications',
      icon: faBell,
      to: '/trainer/notifications',
    },
    {
      text: 'Profile',
      icon: faUser,
      to: '/trainer/profile',
    },
  ],
  bottomNavOptions: [
    {
      text: 'App',
      icon: faCubes,
      to: '/trainer/app',
    },
    {
      text: 'Monetization',
      icon: faSackDollar,
      to: '/trainer/monetization',
    },
    {
      text: 'Settings',
      icon: faCog,
      to: '/trainer/settings',
    },
    {
      text: 'Feedback',
      icon: faCommentMedical,
      to: '/trainer/feedback',
    },
  ],
};