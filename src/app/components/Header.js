// src/app/components/Header.js
import TopBar from './TopBar';
import Navbar from './Navbar';

export default function Header() {
    return (
        <>
            {/* Топ бар */}
            <TopBar />

            {/* Основна навигация */}
            <Navbar />
        </>
    );
}