'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // чакаме клиентския рендер
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Видео фон */} 
      <div className="absolute inset-0 z-[-2]">
        <video
          src="/Mall-Agro-video-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
      </div>

      {/* Overlay */} 
      <div className="absolute inset-0 bg-primary bg-opacity-50 z-[-1] pointer-events-none"></div>

      {/* Съдържание */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-20">
        <div className="text-white w-full md:w-3/5 lg:w-[60%]">
          <h1 className="responsive-h1 mb-4 md:mb-4 lg:mb-6 text-shadow-custom">
            Expert Solutions for Food and Agriculture Industries
          </h1>
          <h4 className="responsive-h4 mb-6 md:mb-8 lg:mb-12 text-shadow-custom">
            With over 10 years of experience, we provide tailored machinery and automation solutions for the agriculture and food processing industries.
          </h4>
          <Link
            href="#quote"
            className="inline-block button sm:button-sm md:button-md lg:button-lg hover:bg-yellow-600 hover:outline hover:outline-accent hover:outline-1 hover:text-accent transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
