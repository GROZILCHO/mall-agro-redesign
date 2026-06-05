import CategoryLandingPage from '../components/CategoryLandingPage.js';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function AgriculturePage() {
  return <CategoryLandingPage categoryId="agriculture" locale="en" />;
}
