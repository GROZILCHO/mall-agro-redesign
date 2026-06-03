import { categories, categoryIds } from '../content/categories.js';
import { routeKeys, siteRoutes } from './siteRoutes.js';

const approvedCategoryPairIds = [
  categoryIds.agriculture,
  categoryIds.grainProcessingHandling,
  categoryIds.foodIndustryEquipment,
];

function buildCategoryRoutePair(categoryId) {
  const category = categories.find((item) => item.id === categoryId);

  return {
    type: 'category',
    categoryId,
    paths: {
      en: category?.locales.en.route || null,
      ro: category?.locales.ro.route || null,
    },
  };
}

export const routePairs = {
  home: {
    type: 'static',
    paths: {
      en: siteRoutes.en[routeKeys.home],
      ro: siteRoutes.ro[routeKeys.home],
    },
  },
  categories: Object.fromEntries(
    approvedCategoryPairIds.map((categoryId) => [
      categoryId,
      buildCategoryRoutePair(categoryId),
    ])
  ),
};

export function getRoutePairByKey(routePairKey) {
  if (routePairKey === 'home') {
    return routePairs.home;
  }

  return null;
}

export function getCategoryRoutePairById(categoryId) {
  return routePairs.categories[categoryId] || null;
}

export function getPairedPath({ currentLocale, targetLocale, path }) {
  const allRoutePairs = [
    routePairs.home,
    ...Object.values(routePairs.categories),
  ];

  const routePair = allRoutePairs.find(
    (pair) => pair.paths[currentLocale] === path
  );

  return routePair?.paths[targetLocale] || null;
}
