import { useMemo } from "react";

const TestimonialCard = ({
  pic,
  mikeBisping,
  designer,
  iconIoniconsFilledStar,
  iconIoniconsFilledStar1,
  iconIoniconsFilledStar2,
  iconIoniconsFilledStar3,
  iconIoniconsFilledStar4,
  reliableAndTalented,
  louissExpertiseInFullStac,
  propPadding,
}) => {
  const cardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-[300px] shadow-[4px_4px_64px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] rounded-2xl bg-neutral-700 overflow-hidden shrink-0 flex flex-col items-start justify-center py-2 px-6 box-border gap-[40px] text-left text-lg text-neutral-white font-body-p2-medium mq450:gap-[20px]"
      style={cardStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
        <img
          className="h-20 w-20 relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={pic}
        />
        <div className="flex-1 flex flex-col items-start justify-center gap-[8px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[150%] font-medium">
                {mikeBisping}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center text-neutral-500">
              <div className="flex-1 relative leading-[150%] font-medium">
                {designer}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src={iconIoniconsFilledStar}
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src={iconIoniconsFilledStar1}
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src={iconIoniconsFilledStar2}
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src={iconIoniconsFilledStar3}
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src={iconIoniconsFilledStar4}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-5xl font-body-p1-medium">
        <div className="self-stretch flex flex-row items-center justify-start">
          <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] leading-[110%] font-bold font-inherit mq450:text-lgi mq450:leading-[21px]">
            {reliableAndTalented}
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start text-base">
          <div className="flex-1 relative leading-[150%] font-medium">
            {louissExpertiseInFullStac}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
