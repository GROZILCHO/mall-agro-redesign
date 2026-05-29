import { routeKeys } from '../routes/siteRoutes.js';

export const navigationItems = {
  en: [
    {
      id: 'home',
      label: 'Home',
      routeKey: routeKeys.home,
    },
    {
      id: 'products',
      label: 'Products',
      routeKey: routeKeys.products,
    },
    {
      id: 'solutions',
      label: 'Solutions',
      routeKey: routeKeys.solutions,
    },
    {
      id: 'about',
      label: 'About',
      routeKey: routeKeys.about,
    },
    {
      id: 'contact',
      label: 'Contact',
      routeKey: routeKeys.contact,
    },
    {
      id: 'quote',
      label: 'Request a Quote',
      routeKey: routeKeys.quote,
      isPrimary: true,
    },
  ],
  ro: [
    {
      id: 'home',
      label: 'Acasă',
      routeKey: routeKeys.home,
    },
    {
      id: 'products',
      label: 'Produse',
      routeKey: routeKeys.products,
    },
    {
      id: 'solutions',
      label: 'Soluții',
      routeKey: routeKeys.solutions,
    },
    {
      id: 'about',
      label: 'Despre noi',
      routeKey: routeKeys.about,
    },
    {
      id: 'contact',
      label: 'Contact',
      routeKey: routeKeys.contact,
    },
    {
      id: 'quote',
      label: 'Cerere ofertă',
      routeKey: routeKeys.quote,
      isPrimary: true,
    },
  ],
};
