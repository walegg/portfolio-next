import Link from "next/link";

const Footer = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start max-w-full z-[1] text-left text-5xl text-neutral-white font-heading-h3">
      <div className="self-stretch bg-neutral-700 overflow-hidden flex flex-row items-start justify-between py-[45px] px-40 box-border max-w-full gap-[20px] mq825:pl-10 mq825:pr-10 mq825:box-border mq1425:flex-wrap mq1425:justify-center mq1425:pl-20 mq1425:pr-20 mq1425:box-border">
        <div className="w-[798.5px] flex flex-col items-start justify-start py-0 pr-[438.5px] pl-0 box-border gap-[8px] min-w-[798.5px] max-w-full lg:min-w-full mq1425:flex-1 mq1425:pr-0 mq1425:box-border">
          <div className="flex flex-row items-center justify-center gap-[9px]">
            <img
              className="h-[33px] w-[41px] relative"
              alt=""
              src="/logo-small.svg"
            />
            <h2 className="m-0 relative text-inherit tracking-[-0.04em] leading-[110%] font-bold font-inherit inline-block min-w-[117px] mq450:text-lgi mq450:leading-[21px]">
              Louis Mille
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full text-sm text-neutral-500 font-body-p2-medium">
            <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
              Crafting innovative solutions from frontend design to backend
              development. Elevate your digital presence with expert full stack
              development services.
            </div>
          </div>
        </div>
        <div className="w-[282px] flex flex-col items-start justify-center gap-[40px] mq450:gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <h2 className="m-0 relative text-inherit tracking-[-0.04em] leading-[110%] font-bold font-inherit inline-block min-w-[60px] mq450:text-lgi mq450:leading-[21px]">
              Links
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-sm font-body-p2-medium">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[38px]">
                Home
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[54px]">
                Portfolio
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[53px]">
                Services
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[39px]">{`About `}</div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-medium inline-block min-w-[34px]">
                FAQs
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-neutral-800 overflow-hidden flex flex-row items-start justify-between py-6 px-40 gap-[20px] text-sm text-white font-body-p2-medium mq825:flex-wrap mq825:pl-20 mq825:pr-20 mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[232px] relative leading-[150%] font-medium inline-block">
          All Right Reserved | Louis Mille 2024
        </div>
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <Link
            href={`https://www.youtube.com/channel/UCpCrTQI7gQY5ebETlzkHLwg`}
          >
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/logo-youtube.svg"
            />
          </Link>

          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/logo-twitter.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/logo-facebook.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/logo-instagram.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
