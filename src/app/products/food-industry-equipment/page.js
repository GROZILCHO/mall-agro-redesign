import CategoryLandingPage from '../components/CategoryLandingPage.js';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function FoodIndustryEquipmentPage() {
  return <CategoryLandingPage categoryId="food-industry-equipment" locale="en" />;
}
