import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
    element: lazy(() => import('./pages/Home')),
    private: false,
    restricted: false,
  },
  {
    path: '/user',
    label: 'UserPage',
    exact: true,
    element: lazy(() => import('./pages/User')),
    private: false,
    restricted: false,
  },

  //   {
  //     path: '/signin',
  //     label: 'SignIn',
  //     exact: true,
  //     element: lazy(() => import('./pages/Authorization/index')),
  //     private: false,
  //     restricted: false,
  //   },

  //   {
  //     path: '/signup',
  //     label: 'SignUp',
  //     exact: true,
  //     element: lazy(() => import('./pages/Authorization/index')),
  //     private: false,
  //     restricted: false,
  //   },

  //   {
  //     path: '/profile',
  //     label: 'ProfilePage',
  //     exact: false,
  //     element: lazy(() => import('./pages/Profile/index')),
  //     private: true,
  //     restricted: false,
  //   },

  {
    path: '/posts/:post_id',
    label: 'PostPage',
    exact: true,
    element: lazy(() => import('./pages/Post')),
    private: false,
    restricted: false,
  },

  {
    path: '/notfound',
    label: 'NotFound',
    exact: true,
    element: lazy(() => import('./pages/NotFound')),
    private: false,
    restricted: false,
  },
];

export const homeRoute = routes.find(route => route.label === 'HomePage');
export const postRoute = routes.find(route => route.label === 'PostPage');
// export const signInRoute = routes.find(route => route.label === 'SignIn');
// export const signUpRoute = routes.find(route => route.label === 'SignUp');
export const userRoute = routes.find(route => route.label === 'UserPage');
