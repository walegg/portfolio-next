import TestimonialCard from "./TestimonialCard.jsx";

const Testimonials = () => {
  return (
    <section className="ml-[-80px] mb-[31px] w-[1600px] overflow-hidden flex flex-col items-center justify-start gap-[80px] max-w-[112%] shrink-0 z-[2] text-left text-29xl text-neutral-white font-heading-h3 mq825:gap-[40px] mq450:gap-[20px]">
      <div className="w-[768px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full">
        <div className="flex flex-row items-center justify-start max-w-full">
          <h1 className="m-0 relative text-inherit leading-[53px] font-bold font-inherit mq825:text-19xl mq825:leading-[42px] mq450:text-10xl mq450:leading-[32px]">
            Client Testimonials
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-center text-base text-neutral-400 font-body-p2-medium">
          <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full">
            Discover what clients say about working with me, showcasing my
            expertise, dedication, and ability to exceed expectations in
            full-stack development projects.
          </div>
        </div>
      </div>
      <div className="w-[1480px] overflow-x-auto flex flex-row items-center justify-start py-0 px-5 box-border gap-[80px] max-w-full text-lg font-body-p2-medium mq825:gap-[40px] mq450:gap-[20px]">
        <TestimonialCard
          pic="/client.svg"
          mikeBisping="Mike Bisping"
          designer="Designer"
          iconIoniconsFilledStar="/star.svg"
          iconIoniconsFilledStar1="/star.svg"
          iconIoniconsFilledStar2="/star.svg"
          iconIoniconsFilledStar3="/star.svg"
          iconIoniconsFilledStar4="/star.svg"
          reliableAndTalented="Reliable and Talented"
          louissExpertiseInFullStac="Louis's expertise in full-stack development is impressive. He takes the time to understand the project's nuances and delivers solutions that exceed expectations. Working with him has been a smooth and productive experience. Highly recommended!"
        />
        <TestimonialCard
          pic="/client-1.svg"
          mikeBisping="John Johnes"
          designer="Back-End"
          iconIoniconsFilledStar="/star.svg"
          iconIoniconsFilledStar1="/star.svg"
          iconIoniconsFilledStar2="/star.svg"
          iconIoniconsFilledStar3="/star.svg"
          iconIoniconsFilledStar4="/star.svg"
          reliableAndTalented="Smooth Collaboration"
          louissExpertiseInFullStac="Working with Louis was a breeze. He's a great communicator and always kept us updated on the project progress. His technical expertise and dedication ensured a successful outcome. Definitely a top-notch developer!"
          propPadding="20px 24px"
        />
        <TestimonialCard
          pic="/client-2.svg"
          mikeBisping="Alex Pereirra"
          designer="CTO"
          iconIoniconsFilledStar="/star.svg"
          iconIoniconsFilledStar1="/star.svg"
          iconIoniconsFilledStar2="/star.svg"
          iconIoniconsFilledStar3="/star.svg"
          iconIoniconsFilledStar4="/star.svg"
          reliableAndTalented="Outstanding Results"
          louissExpertiseInFullStac="Louis is an exceptional developer who consistently delivers outstanding results. He understands our requirements thoroughly and translates them into functional solutions. It's a pleasure working with someone so reliable and talented."
          propPadding="20px 24px"
        />
        <TestimonialCard
          pic="/client-3.svg"
          mikeBisping="Mike Bisping"
          designer="Designer"
          iconIoniconsFilledStar="/star.svg"
          iconIoniconsFilledStar1="/star.svg"
          iconIoniconsFilledStar2="/star.svg"
          iconIoniconsFilledStar3="/star.svg"
          iconIoniconsFilledStar4="/star.svg"
          reliableAndTalented="Reliable and Talented"
          louissExpertiseInFullStac="Louis's expertise in full-stack development is impressive. He takes the time to understand the project's nuances and delivers solutions that exceed expectations. Working with him has been a smooth and productive experience. Highly recommended!"
          propPadding="8px 24px"
        />
        <TestimonialCard
          pic="/client-4.svg"
          mikeBisping="Alex Hitchens"
          designer="Front-End"
          iconIoniconsFilledStar="/star.svg"
          iconIoniconsFilledStar1="/star.svg"
          iconIoniconsFilledStar2="/star.svg"
          iconIoniconsFilledStar3="/star.svg"
          iconIoniconsFilledStar4="/star.svg"
          reliableAndTalented="Exceptional Expertise"
          louissExpertiseInFullStac="Louis is a phenomenal developer. His attention to detail and problem-solving skills are unmatched. He delivered our project on time and exceeded our expectations. Highly recommended for any software development needs!"
          propPadding="20px 24px"
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-5 gap-[16px]">
        <img
          className="h-16 w-16 relative min-h-[64px]"
          loading="lazy"
          alt=""
          src="/scroll.svg"
        />
        <img
          className="h-16 w-16 relative min-h-[64px]"
          alt=""
          src="/scroll-1.svg"
        />
      </div>
    </section>
  );
};

export default Testimonials;
