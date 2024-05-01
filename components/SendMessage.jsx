const SendMessage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full text-left text-sm text-neutral-500 font-body-p2-medium">
      <div className="w-[1120px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[2] lg:flex-wrap lg:justify-center">
        <div className="w-[408px] flex flex-col items-end justify-end gap-[48px] min-w-[408px] max-w-full lg:flex-1 mq825:min-w-full mq450:gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="w-[308px] flex flex-col items-start justify-start text-center text-29xl text-neutral-white font-heading-h3">
              <h1 className="m-0 relative text-inherit leading-[53px] font-bold font-inherit mq825:text-19xl mq825:leading-[42px] mq450:text-10xl mq450:leading-[32px]">
                Get In Touch
              </h1>
              <div className="self-stretch relative text-sm leading-[150%] font-medium font-body-p2-medium text-neutral-500 text-left">{`Feel free to leave a message with your questions. `}</div>
            </div>
            <div className="self-stretch rounded-lg bg-neutral-700 flex flex-row items-start justify-start p-4 whitespace-nowrap">
              <div className="relative leading-[150%] font-medium inline-block min-w-[96px]">
                Your Full Name
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-neutral-700 flex flex-row items-start justify-start p-4 whitespace-nowrap">
              <div className="relative leading-[150%] font-medium inline-block min-w-[121px]">
                Your Email Address
              </div>
            </div>
            <div className="self-stretch h-[156px] rounded-lg bg-neutral-700 flex flex-row items-start justify-start p-4 box-border whitespace-nowrap">
              <div className="relative leading-[150%] font-medium inline-block min-w-[88px]">
                Your Message
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-primary-600 flex flex-row items-start justify-start py-3.5 px-9 text-neutral-white">
            <b className="relative leading-[124%] inline-block min-w-[46px]">
              Submit
            </b>
          </div>
        </div>
        <img
          className="self-stretch w-[372px] relative max-h-full object-cover min-h-[501px] max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src="/me-1.svg"
        />
      </div>
    </section>
  );
};

export default SendMessage;
