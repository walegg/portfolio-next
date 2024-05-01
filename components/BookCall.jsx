const BookCall = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full text-center text-sm text-neutral-white font-body-p2-medium">
      <div className="w-[1120px] rounded-2xl [background:linear-gradient(90deg,_#1890ff,_#0050b3_24.5%,_#391085_74.5%,_#722ed1)] overflow-hidden shrink-0 flex flex-col items-start justify-start py-12 px-20 box-border max-w-full z-[2] lg:pl-10 lg:pr-10 lg:box-border mq450:pt-[31px] mq450:pb-[31px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border relative gap-[8px] min-h-[326px] max-w-full">
          <div className="w-[499px] flex flex-col items-start justify-start gap-[36px] max-w-full mq825:gap-[18px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="w-[168px] relative leading-[150%] font-medium inline-block">
                Need Help With a Project?
              </div>
              <h1 className="m-0 self-stretch relative text-21xl leading-[110%] font-bold font-heading-h3 text-left mq825:text-13xl mq825:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
                Secure Your Consultation Today.
              </h1>
            </div>
            <div className="w-[148px] rounded-lg box-border flex flex-row items-start justify-start py-[11px] px-[34px] text-left border-[2px] border-solid border-neutral-white">
              <b className="relative leading-[124%] inline-block min-w-[76px]">
                Book A Call
              </b>
            </div>
          </div>
          <div className="w-[554px] h-[369px] absolute !m-[0] top-[0px] left-[438px] z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[24px] top-[0px] [transform:scale(1.087)]"
              loading="lazy"
              alt=""
              src="/element.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
