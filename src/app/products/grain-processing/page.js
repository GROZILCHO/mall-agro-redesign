import CategoryLandingPage from '../components/CategoryLandingPage.js';

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function GrainProcessingPage() {
  return <CategoryLandingPage categoryId="grain-processing-handling" locale="en" />;
}
