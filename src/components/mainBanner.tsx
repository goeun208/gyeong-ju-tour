import { useScrollFadeIn } from "../hooks/useControlFadeIn";
import background from "../images/background.webp"

const MainBanner = ({element}: any) => {

    const backAnimatedItem:any = useScrollFadeIn('', 1.5);
    const titleAnimatedItem:any = useScrollFadeIn('', 2, 0.5);
    const descAnimatedItem:any = useScrollFadeIn('', 2, 1);
    const [element1, element2, element3] = element;

    return (
        <div>
            <div className="w-full h-[70vh] md:h-[100vh] mx-auto my-0 relative flex flex-col text-center pt-[7.5rem]" {...backAnimatedItem}>
            <div className="text-white z-20 text-[1.25rem] xs:text-[2rem] md:text-[2.75rem] xl:text-[3.25rem] w-[22rem] xs:w-[30rem] md:w-[40rem] xl:w-[80rem] mx-auto" {...titleAnimatedItem}>경주, 신라천년 고도(古都)로서<p>찬란한 문화와 역사가 살아숨쉬는 민족문화의 발상지</p></div>
                <p className="z-20 px-[1.6rem] text-[1rem] md:text-[1.25rem] text-white pt-7" {...descAnimatedItem}>경주에서만 즐길 수 있는 먹거리, 야경, 한옥을 체험해보세요.</p>
                <img src={background} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" decoding="async"/>
                <nav className="flex justify-center items-center text-center text-[0.9rem] md:text-[1.25rem] z-20 pt-20 xs:pt-10">
                    <div className="w-[6rem] md:w-[10rem] h-[3rem] md:h-[5rem] flex items-center justify-center border text-white rounded-full mr-2 md:mr-10 cursor-pointer hover:bg-gray-900 font-sans" onClick={element1.onMoveToElement}>맛집 탐방</div>
                    <div className="w-[6rem] md:w-[10rem] h-[3rem] md:h-[5rem] flex items-center justify-center border text-white rounded-full mr-2 md:mr-10 cursor-pointer hover:bg-gray-900 font-sans" onClick={element2.onMoveToElement}>야간 명소</div>
                    <div className="w-[6rem] md:w-[10rem] h-[3rem] md:h-[5rem] flex items-center justify-center border text-white rounded-full cursor-pointer hover:bg-gray-900 font-sans" onClick={element3.onMoveToElement}>한옥 호텔</div>
                </nav>
            </div>
        </div>
        
    )

}

export default MainBanner;