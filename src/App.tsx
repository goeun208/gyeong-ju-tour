import FoodLists from './components/foodLists';
import HanokIntroduce from './components/hanokIntroduce';
import MainBanner from './components/mainBanner';
import NightAttractions from './components/nightAttractions';
import useMoveScroll from './hooks/useMoveScroll';


function App() {

  const element1 = useMoveScroll()
  const element2 = useMoveScroll()
  const element3 = useMoveScroll()
  const element = [element1, element2, element3];

  return (
    <div className="bg-[#081113]">
      <MainBanner element={element}/>
      <FoodLists  element1={element1.element}/>
      <NightAttractions element2={element2.element}/>
      <HanokIntroduce element3={element3.element} />
    </div>
  );
}

export default App;
