import FoodLists from "./components/foodLists";
import HanokIntroduce from "./components/hanokIntroduce";
import MainBanner from "./components/mainBanner";
import NightAttractions from "./components/nightAttractions";
import useMoveScroll from "./hooks/useMoveScroll";
import arrow from "./images/arrow.png";

function App() {
  const element1 = useMoveScroll();
  const element2 = useMoveScroll();
  const element3 = useMoveScroll();
  const element = [element1, element2, element3];
  const scrollToTop = useMoveScroll();

  return (
    <div className="bg-[#0b1011] relative" ref={scrollToTop.element}>
      <MainBanner element={element} />
      <FoodLists element1={element1.element} />
      <NightAttractions element2={element2.element} />
      <HanokIntroduce element3={element3.element} />
      <div
        className="fixed bottom-5 right-5 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] z-20 rounded-full bg-[rgba(255,255,255,0.4)] cursor-pointer"
        onClick={scrollToTop.onMoveToElement}
      >
        <img
          src={arrow}
          alt="^"
          className="w-[2rem] md:w-[3rem] mx-auto pt-[0.4rem]"
        />
      </div>
    </div>
  );
}

export default App;
