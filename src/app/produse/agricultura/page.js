import CategoryPlaceholderPage from '../../products/components/CategoryPlaceholderPage.js';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function AgriculturaPage() {
  return <CategoryPlaceholderPage categoryId="agriculture" locale="ro" />;
}
