import ProcessCard from "./ProcessCard.jsx";

const Process = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[30.7px] box-border max-w-full text-left text-29xl text-neutral-white font-heading-h3">
      <div className="w-[1216px] flex flex-col items-start justify-start gap-[7.4px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[16.6px]">
          <h1 className="m-0 relative text-inherit leading-[53px] font-bold font-inherit z-[1] mq825:text-19xl mq825:leading-[42px] mq450:text-10xl mq450:leading-[32px]">
            My Development Process
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[273px] pb-[72.6px] box-border max-w-full text-center text-base text-neutral-400 font-body-p2-medium mq825:pl-[68px] mq825:pr-[68px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1425:pl-[136px] mq1425:pr-[136px] mq1425:box-border">
          <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full z-[1]">
            Discover my full-stack development process, from strategic planning
            and user-centric design to scalability and business growth
            strategies.
          </div>
        </div>
        <div className="w-[613.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-[59.7px] w-[383.5px] relative max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/arrow.svg"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full z-[1] text-lg">
          <ProcessCard
            bulb="/bulb.svg"
            projectPlanning="Project Planning"
            strategizingProjectObject="Strategizing project objectives and timelines, aligning technology solutions with business goals for efficient project management and successful outcomes."
          />
          <ProcessCard
            bulb="/bulb-1.svg"
            projectPlanning="User-Centric Design"
            strategizingProjectObject="Crafting intuitive interfaces, integrating functionality seamlessly for engaging user experiences across platforms with a focus on user needs."
          />
          <ProcessCard
            bulb="/bulb-2.svg"
            projectPlanning={`Scalability & Growth`}
            strategizingProjectObject="Driving digital transformation, optimizing systems for scalability and performance, ensuring continuous improvement and business growth opportunities."
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[243px] box-border max-w-full mq825:pl-[121px] mq825:box-border mq450:pl-5 mq450:box-border">
          <img
            className="h-[59.7px] w-[400.5px] relative max-w-full z-[1]"
            alt=""
            src="/arrow-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
