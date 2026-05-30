import CategoryPlaceholderPage from '../components/CategoryPlaceholderPage.js';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function AgriculturePage() {
  return <CategoryPlaceholderPage categoryId="agriculture" />;
}
