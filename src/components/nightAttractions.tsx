import { useState, useEffect } from "react";
import axios from "axios";
import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";
import image5 from "../images/image5.webp";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.webp";
import image8 from "../images/image8.webp";
import image9 from "../images/image9.webp";
import image10 from "../images/image10.webp";
import back from "../images/back.webp";

const NightAttractions = ({ element2 }: any) => {
  const [data, setData] = useState<Array<any>>([]);
  const imgs: string[] = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const getAttractionsLists = async () => {
    await axios
      .get(
        "http://apis.data.go.kr/5050000/theNightViewService/getTheNightView",
        {
          params: {
            ServiceKey: process.env.REACT_APP_API_KEY,
            numOfRows: 8,
          },
        }
      )
      .then((res) => {
        setData(res.data.response.body.items.item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAttractionsLists();
  }, []);

  useEffect(() => {}, [data]);

  return (
    data && (
      <div ref={element2} className="relative">
        <img
          src={back}
          alt="banner"
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-30"
          loading="lazy"
          decoding="async"
          role="presentation"
        />
        <p className="text-center pt-20 text-white relative">*********</p>
        <h1 className="text-center text-white text-[1.125rem] xs:text-[1.5rem] md:text-[2.25rem] mb-5 md:mb-20 font-semibold relative">
          경주의 야간 명소를 한 눈에 확인해보세요.
        </h1>
        <div className="w-[22.5rem] md:w-[45rem] xl:w-[90rem] mx-auto my-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-20 relative">
          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="w-[21.5rem] h-[25.5rem] bg-zinc-200 text-[1.125rem] text-black mx-2 my-5 pt-4 rounded cursor-pointer"
            >
              <div className="w-[20rem] h-[23.5rem] mx-auto rounded p-2 relative">
                <img
                  src={imgs[index]}
                  alt="cheomsungdae"
                  className="absolute top-0 left-0 z-0 rounded-t h-[13.5rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-[14rem]">
                  <div>장소: {item.NM}</div>
                  <div>주소: {item.LC}</div>
                  {item.VIEWNG_BEGIN_TIME && (
                    <div>
                      운영시간: {item.VIEWNG_BEGIN_TIME}
                      {item.VIEWNG_END_TIME && (
                        <span> - {item.VIEWNG_END_TIME}</span>
                      )}
                    </div>
                  )}
                  <div>야간개장 시작: {item.NIGHT_SCENE_LGHT_BEGIN_TIME}</div>
                  <div>야간개장 마감: {item.NIGHT_SCENE_LGHT_END_TIME}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default NightAttractions;
