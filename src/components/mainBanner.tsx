import { useScrollFadeIn } from "../hooks/useControlFadeIn";
import background from "../images/background.jpg"

const MainBanner = () => {

    const backAnimatedItem:any = useScrollFadeIn('', 1.5);
    const animatedItem:any = useScrollFadeIn('', 2, 0.5);

    return (
        // eslint-disable-next-line no-template-curly-in-string
        <div className="w-full h-[60vh] md:h-[100vh] mx-auto my-0 relative flex pt-[10rem]" {...backAnimatedItem}>
            <div className="text-white text-center z-20 text-[2rem] md:text-[2.75rem] xl:text-[3.75rem] w-[90rem] mx-auto" {...animatedItem}>경주, 신라천년 고도(古都)로서<p>찬란한 문화와 역사가 살아숨쉬는 민족문화의 발상지</p></div>
            <img src={background} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover"/>
        </div>
    )

}

export default MainBanner;