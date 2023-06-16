const MainBanner = () => {
    return (
        // eslint-disable-next-line no-template-curly-in-string
        <div className="w-full h-[100vh] mx-auto my-0 relative flex items-end pb-[10rem] ">
            <div className="text-white z-20 text-[3rem] w-[90rem] mx-auto">경주, 신라천년 고도(古都)로서 <p className="font-bold">찬란한 문화와 역사가 살아숨쉬는</p> 민족문화의 발상지</div>
            <img src={process.env.PUBLIC_URL + '/assets/images/banner.jpg'} alt="banner" className="absolute top-0 left-0 w-full h-full object-cover"/>
        </div>
    )

}

export default MainBanner;