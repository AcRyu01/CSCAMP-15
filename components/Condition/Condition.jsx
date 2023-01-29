import Container from "@/components/Layout/Container";
import cards from "./cards";
import FlipCard from "./FlipCard";

const Condition = () => {
  return (
    <div id="condition">
      <Container className="flex flex-col items-center mb-64 md:mb-0 2xl:mb-56">
        <h2 className="text-3xl md:text-4xl 2xl:text-8xl md:mb-12 2xl:mb-10 text-[#F2F2F2] font-bold">
          เงื่อนไขการสมัคร
        </h2>
        <Container className="flex justify-around flex-wrap">
          <div className="w-[40vw] h-[60vw] md:w-1/3 md:max-w-[200px] xl:max-w-[300px] p-3">
            <FlipCard imgBack={cards.bCards[0]} imgFront={cards.fCards[0]} />
          </div>
          <div className="w-[40vw] h-[60vw] md:w-1/3 md:max-w-[200px] xl:max-w-[300px] p-3">
            <FlipCard imgBack={cards.bCards[1]} imgFront={cards.fCards[1]} />
          </div>
          <div className="w-[40vw] h-[60vw] md:w-1/3 md:max-w-[200px] xl:max-w-[300px] p-3">
            <FlipCard imgBack={cards.bCards[2]} imgFront={cards.fCards[2]} />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Condition;
