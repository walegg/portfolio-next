const Portfolio = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full text-left text-29xl text-neutral-white font-heading-h3">
      <div className="w-[1120px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[6134px] w-[1227px] absolute !m-[0] right-[-54px] bottom-[-4324px]"
          alt=""
          src="/grid.svg"
        />
        <div className="flex-1 flex flex-col items-center justify-start gap-[80px] max-w-full z-[2] lg:gap-[40px] mq825:gap-[20px]">
          <div className="w-[565px] flex flex-col items-center justify-center gap-[24px] max-w-full text-center">
            <div className="self-stretch flex flex-row items-center justify-center max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit leading-[53px] font-bold font-inherit inline-block max-w-full mq825:text-19xl mq825:leading-[42px] mq450:text-10xl mq450:leading-[32px]">
                Latest Projects
              </h1>
            </div>
            <div className="self-stretch relative text-base leading-[150%] font-medium font-body-p2-medium text-darkgray">
              Explore my latest projects, showcasing innovative solutions
              crafted with a blend of functionality, aesthetics, and
              user-centric design principles.
            </div>
          </div>
          <div className="w-[480px] flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-sm font-body-p2-medium">
            <div className="w-20 rounded-lg bg-neutral-800 box-border flex flex-row items-center justify-center py-[5px] px-[22px] border-[2px] border-solid border-primary-600">
              <b className="relative leading-[124%] inline-block min-w-[32px]">
                SaaS
              </b>
            </div>
            <div className="w-[111px] rounded-lg bg-neutral-800 box-border flex flex-row items-center justify-center py-[5px] px-[22px] border-[2px] border-solid border-primary-600">
              <b className="relative leading-[124%] inline-block min-w-[63px]">
                Extension
              </b>
            </div>
            <div className="w-20 rounded-lg bg-neutral-800 box-border flex flex-row items-center justify-center py-[5px] px-[22px] border-[2px] border-solid border-primary-600">
              <b className="relative leading-[124%] inline-block min-w-[32px]">
                MVP
              </b>
            </div>
            <div className="flex-1 rounded-lg bg-neutral-800 box-border flex flex-row items-center justify-center py-[5px] px-[22px] min-w-[89px] whitespace-nowrap border-[2px] border-solid border-primary-600">
              <b className="relative leading-[124%] inline-block min-w-[89px]">
                Landing Page
              </b>
            </div>
          </div>
          <div className="self-stretch rounded-2xl overflow-hidden flex flex-row items-end justify-start pt-[271px] pb-12 pr-6 pl-20 box-border relative gap-[8px] bg-[url('/project.svg')] bg-cover bg-no-repeat bg-[top] min-h-[630px] max-w-full lg:pl-10 lg:box-border mq450:pt-44 mq450:pb-[31px] mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                {/* <h1 className="m-0 flex-1 relative text-inherit leading-[53px] font-bold font-inherit inline-block max-w-full mq825:text-19xl mq825:leading-[42px] mq450:text-10xl mq450:leading-[32px]">
                  Fit Learn
                </h1> */}
              </div>
              {/* <div className="w-[565px] relative text-base leading-[150%] font-medium font-body-p2-medium inline-block max-w-full">
                Innovative project integrating the memory palace technique with
                AI-driven flashcards for efficient learning and improved memory
                retention.
              </div> */}
            </div>
            <div className="h-[88px] w-[88px] absolute !m-[0] top-[271px] left-[1008px] rounded-21xl shrink-0 flex items-center justify-center z-[1]">
              <img
                className="h-full w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[4px] [transform:scale(1.909)]"
                alt=""
                src="/button.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
