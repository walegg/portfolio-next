"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-5 px-5 box-border max-w-full text-left text-45xl text-neutral-white font-body-p2-medium">
      <div className="w-[1120px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <header className="self-stretch flex flex-row items-center justify-between gap-[20px] z-[1] text-left text-5xl text-neutral-white font-heading-h3">
          <div className="flex flex-row items-center justify-center gap-[9px]">
            <img
              className="h-[33px] w-[41px] relative"
              alt=""
              src="/logo.svg"
            />
            <h2 className="m-0 relative text-inherit tracking-[-0.04em] leading-[110%] font-bold font-inherit inline-block min-w-[117px] whitespace-nowrap">
              Louis Mille
            </h2>
          </div>
          <nav className="m-0 w-[282px] flex flex-row items-center justify-start gap-[16px] text-left text-sm text-neutral-white font-body-p2-medium mq825:hidden">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[38px]">
                <Link to="hero" smooth={true}>
                  Home
                </Link>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[54px]">
                <Link to="portfolio" smooth={true}>
                  Portfolio
                </Link>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[53px]">
                Services
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[39px] whitespace-nowrap">{`About `}</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[34px]">
                FAQs
              </div>
            </div>
          </nav>
          <div className="rounded-lg bg-primary-600 flex flex-row items-start justify-start py-3.5 px-9 whitespace-nowrap text-sm font-body-p2-medium">
            <b className="relative leading-[124%] inline-block min-w-[76px]">
              Book A Call
            </b>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-end justify-start gap-[20px] max-w-full lg:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[31px] box-border max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[460px] w-[1197px] absolute !m-[0] top-[-79px] right-[-459px] z-[1] flex items-center justify-center">
                <img
                  className="h-full w-full z-[1] object-contain absolute left-[-5px] top-[5px] [transform:scale(1.109)]"
                  alt=""
                  src="/hero-eclipse.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full z-[2]">
                <div className="self-stretch flex flex-row items-center justify-center max-w-full font-heading-h3">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[110%] font-bold font-inherit inline-block max-w-full mq825:text-32xl mq825:leading-[56px] mq450:text-19xl mq450:leading-[42px]">
                    Crafting Tomorrows Solutions, Today.
                  </h1>
                </div>
                <div className="w-[577px] flex flex-row items-center justify-center max-w-full text-base text-neutral-400">
                  <div className="h-[72px] flex-1 relative leading-[150%] font-medium inline-block max-w-full">
                    I'm Louis Mille, a seasoned MERN (MongoDB, Express.js,
                    React.js, Node.js) Full-Stack developer, passionate about
                    crafting robust and scalable web applications.
                  </div>
                </div>
                <div className="w-[344px] flex flex-row items-start justify-center gap-[24px] max-w-full text-sm mq450:flex-wrap">
                  <div className="flex-1 rounded-lg bg-neutral-800 box-border flex flex-row items-center justify-center py-2 px-[34px] gap-[10px] min-w-[104px] border-[2px] border-solid border-primary-600">
                    <b className="relative leading-[124%] inline-block min-w-[53px]">
                      Projects
                    </b>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                  <div className="rounded-lg bg-primary-600 flex flex-row items-center justify-center py-3.5 px-[54.5px] whitespace-nowrap">
                    <b className="relative leading-[124%] inline-block min-w-[51px]">
                      Hire me
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[400px] relative max-h-full object-cover max-w-full z-[2] lg:flex-1"
            loading="lazy"
            alt=""
            src="/me.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
