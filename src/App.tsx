import MainBanner from './components/mainBanner';
import NightAttractions from './components/nightAttractions';


function App() {
  return (
    <div className="bg-black">
      <MainBanner />
      <h1 className='text-center text-white text-[1.5rem] md:text-[2.25rem] my-20 font-semibold'>경주의 야간 명소를 한 눈에 확인해보세요.</h1>
      <NightAttractions />
    </div>
  );
}

export default App;
