const ProcessCard = ({ bulb, projectPlanning, strategizingProjectObject }) => {
  return (
    <div className="flex-1 rounded-2xl bg-neutral-700 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-[34px] box-border gap-[20px] min-w-[294px] max-w-full text-left text-lg text-neutral-white font-heading-h3">
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <div className="h-12 w-12 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-neutral-800 w-full h-full" />
          <img
            className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden z-[1]"
            alt=""
            src={bulb}
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
          <b className="relative tracking-[-0.04em] leading-[20px]">
            {projectPlanning}
          </b>
        </div>
      </div>
      <div className="self-stretch relative text-sm leading-[150%] font-medium font-body-p2-medium">
        {strategizingProjectObject}
      </div>
    </div>
  );
};

export default ProcessCard;
