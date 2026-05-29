export const routeKeys = {
  home: 'home',
  products: 'products',
  categoryAgriculture: 'categoryAgriculture',
  categoryGrainProcessing: 'categoryGrainProcessing',
  categoryFoodIndustryEquipment: 'categoryFoodIndustryEquipment',
  solutions: 'solutions',
  about: 'about',
  contact: 'contact',
  quote: 'quote',
  privacyPolicy: 'privacyPolicy',
  cookiePolicy: 'cookiePolicy',
};

export const siteRoutes = {
  en: {
    [routeKeys.home]: '/',
    [routeKeys.products]: '/products',
    [routeKeys.categoryAgriculture]: '/products/agriculture',
    [routeKeys.categoryGrainProcessing]: '/products/grain-processing',
    [routeKeys.categoryFoodIndustryEquipment]: '/products/food-industry-equipment',
    [routeKeys.solutions]: '/solutions',
    [routeKeys.about]: '/about',
    [routeKeys.contact]: '/contact',
    [routeKeys.quote]: '/quote',
    [routeKeys.privacyPolicy]: '/privacy-policy',
    [routeKeys.cookiePolicy]: '/cookie-policy',
  },
  ro: {
    [routeKeys.home]: '/',
    [routeKeys.products]: '/produse',
    [routeKeys.categoryAgriculture]: '/produse/agricultura',
    [routeKeys.categoryGrainProcessing]: '/produse/procesarea-cerealelor',
    [routeKeys.categoryFoodIndustryEquipment]: '/produse/echipamente-industria-alimentara',
    [routeKeys.solutions]: '/solutii',
    [routeKeys.about]: '/despre-noi',
    [routeKeys.contact]: '/contact',
    [routeKeys.quote]: '/cerere-oferta',
    [routeKeys.privacyPolicy]: '/politica-de-confidentialitate',
    [routeKeys.cookiePolicy]: '/politica-cookie',
  },
};

export function getRoute(locale, routeKey) {
  return siteRoutes[locale]?.[routeKey] || null;
}
