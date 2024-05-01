import Hero from "../components/Hero";
import Techstack from "../components/Teckstack";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import TestimonialCard from "../components/TestimonialCard";
import Testimonials from "../components/Testimonials.jsx";
import BookCall from "../components/BookCall";
import SendMessage from "../components/SendMessage";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="w-full relative bg-neutral-800 overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border gap-[129px] leading-[normal] tracking-[normal] mq825:gap-[32px] mq450:gap-[16px] mq1425:gap-[64px]">
      <div className="w-full h-[460px] absolute !m-[0] right-[0px] bottom-[2040px] left-[0px] max-w-full shrink-0 z-[1] flex items-center justify-center">
        <img
          className="w-full h-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[0px] top-[5px] [transform:scale(1.109)]"
          alt=""
          src="/hero-eclipse.svg"
        />
      </div>

      <Hero />
      <Techstack />
      <Portfolio />
      <Services />
      <TestimonialCard />
      <Testimonials />
      <BookCall />
      <SendMessage />
      <Footer />
    </div>
  );
};

export default Homepage;
