'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { heroContent } from '../../lib/content/hero.js';

const locale = 'en';
const content = heroContent[locale];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // чакаме клиентския рендер
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative flex min-h-[100svh] max-w-full items-center overflow-x-hidden py-24 md:min-h-screen md:py-20 lg:py-0">
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
      <div className="absolute inset-0 bg-primary bg-opacity-70 z-[-1] pointer-events-none"></div>

      {/* Съдържание */}
      <div className="relative z-20 mx-auto w-full max-w-full min-w-0 px-4 md:px-10 lg:px-16">
        <div className="w-full max-w-[34rem] min-w-0 text-white md:w-3/5 md:max-w-full lg:w-[60%]">
          <p className="body mb-3 text-accent text-shadow-custom md:mb-4">
            {content.eyebrow}
          </p>
          <h1 className="responsive-h1 mb-4 break-words text-[1.8rem] leading-[1.14] text-shadow-custom sm:text-[2.35rem] md:mb-5 md:text-[3.25rem] md:leading-[1.06] lg:mb-6 lg:text-[4.5rem]">
            {content.title}
          </h1>
          <p className="mb-4 break-words text-[1.15rem] font-semibold leading-[1.3] text-accent text-shadow-custom sm:text-[1.35rem] md:mb-5 md:text-[1.75rem] lg:text-[2rem]">
            {content.subline}
          </p>
          <h4 className="mb-6 break-words text-[1rem] leading-[1.6] [overflow-wrap:anywhere] text-shadow-custom sm:text-[1.08rem] md:mb-8 md:text-[1.25rem] md:leading-[1.45] lg:mb-12 lg:text-[1.5rem]">
            {content.body}
          </h4>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={content.primaryCta.href}
              className="button inline-flex min-h-[44px] w-full items-center justify-center text-center sm:w-auto sm:button-sm md:button-md lg:button-lg hover:bg-yellow-600 hover:outline hover:outline-accent hover:outline-1 hover:text-accent transition-all"
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="button inline-flex min-h-[44px] w-full items-center justify-center text-center sm:w-auto sm:button-sm md:button-md lg:button-lg hover:bg-yellow-600 hover:outline hover:outline-accent hover:outline-1 hover:text-accent transition-all"
            >
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
