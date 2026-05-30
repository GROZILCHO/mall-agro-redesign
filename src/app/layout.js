// src/app/layout.js
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
    title: 'Mall Agro | B2B Equipment Catalog for Agriculture and Food Industry',
    description: 'Explore Mall Agro equipment categories for agriculture, grain processing and handling, and food industry applications.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-white text-gray-900">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="antialiased">
                <Header />
                {children} {/* Това е важно: тук се рендерират страниците */}
                <Footer />
            </body>
        </html>
    );
}
