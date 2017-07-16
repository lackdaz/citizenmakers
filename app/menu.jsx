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
      icon: 'fa fa-arrow-right',
      links: [
        {
          href: '/about',
          title: 'About',
          description: 'We are makers',
          component: <About />,
        },
        {
          href: '/team',
          title: 'The Team',
          description: 'The Team',
          component: <Team />,
        },
      ],
    },
    {
      title: 'Participate',
      icon: 'fa fa-arrow-right',
      links: [
        {
          href: '/pop',
          title: 'Pop',
          description: 'You can...',
          component: <Pop />,
        },
        {
          href: '/sear',
          title: 'The Team',
          description: 'The Team',
          component: <Sear />,
        },
        {
          href: '/launch',
          title: 'Dangerous Demos',
          description: '3,2,1... ',
          component: <Launch />,
        },
      ],
    },
    {
      title: 'Find Us',
      icon: 'fa fa-code',
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
