import React from 'react';
// Intro
import About from './components/home/pages/intro/About';
import Team from './components/home/pages/intro/Team';

// Learn
import HHO from './components/home/pages/learn/HHO';
import Electrolysis from './components/home/pages/learn/Electrolysis';

// Participate
import Pop from './components/home/pages/activities/Pop';
import Sear from './components/home/pages/activities/Sear';
import Launch from './components/home/pages/activities/Launch';

// Contact
import Location from './components/home/pages/contact/Location';
import Contact from './components/home/pages/contact/Contact';

const menu = {
  title: 'Project HH Uh-Oh',
  description: '3,2,1... ',
  homeLink: '/',
  docsLink: '/about',
  github: {
    user: 'lucasbassetti',
    repository: 'react-spa-boilerplate',
  },
  sections: [
    {
      title: 'Intro',
      icon: 'fa fa-asterisk',
      links: [
        {
          href: '/about',
          title: 'About',
          description: 'Psst!',
          component: <About />,
        },
        {
          href: '/team',
          title: 'The Team',
          component: <Team />,
        },
      ],
    },
    {
      title: 'Participate',
      icon: 'fa fa-bomb',
      links: [
        {
          href: '/pop',
          title: 'Pop',
          description: 'Bubbles that really pop',
          component: <Pop />,
        },
        {
          href: '/sear',
          title: 'Sear',
          description: 'Try out a DIY HHO torch!',
          component: <Sear />,
        },
        {
          href: '/launch',
          title: 'Rocket Launch',
          description: 'Dangerous Demos',
          component: <Launch />,
        },
      ],
    },
    {
      title: 'Learn About',
      icon: 'fa fa-book',
      links: [
        {
          href: '/hho',
          title: 'HHO',
          description: 'A clean and very explosive reactant',
          component: <HHO />,
        },
        {
          href: '/electrolysis',
          title: 'Electrolysis',
          description: 'Using electricity to...',
          component: <Electrolysis />,
        },
      ]
    },
    {
      title: 'Find Us',
      icon: 'fa fa-location-arrow',
      links: [
        {
          href: '/location',
          title: 'Location',
          description: 'We will be located at',
          component: <Location />,
        },
        {
          href: '/contact',
          title: 'Contact',
          description: 'You can reach us at',
          component: <Contact />,
        },
      ],
    },
  ],
};

export default menu;
