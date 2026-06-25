import CategoryLandingPage from '../components/CategoryLandingPage.js';

export const metadata = {
  title: 'Agriculture Equipment | Field Operations, Material Handling & Equipment Planning | Mall Agro',
  description: 'Explore agricultural operations through workflow, material handling and equipment planning. Understand the operational context before discussing agricultural equipment.',
  alternates: {
    canonical: 'https://mallagro.com/products/agriculture',
  },
  openGraph: {
    title: 'Agriculture Equipment for Modern Agricultural Operations',
    description: 'Explore agricultural workflows, equipment planning and operational context before selecting agricultural equipment.',
    url: 'https://mallagro.com/products/agriculture',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AgriculturePage() {
  return <CategoryLandingPage categoryId="agriculture" locale="en" />;
}
