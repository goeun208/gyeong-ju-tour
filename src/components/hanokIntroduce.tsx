import axios from "axios";
import { useEffect, useState } from "react";
import hanok1 from "../images/hanok1.jpg";
import hanok2 from "../images/hanok2.jpg";
import hanok3 from "../images/hanok3.webp";
import hanok4 from "../images/hanok4.jpg";
import hanok5 from "../images/hanok5.jpg";
import hanok6 from "../images/hanok6.jpg";
import hanok7 from "../images/hanok7.jpg";
import back2 from "../images/back2.jpg";

const HanokIntroduce = ({ element3 }: any) => {
  const [data, setData] = useState<Array<any>>([]);
  const hanok: string[] = [
    hanok1,
    hanok2,
    hanok3,
    hanok4,
    hanok5,
    hanok6,
    hanok7,
  ];
  const getHanokLists = async () => {
    await axios
      .get("https://apis.data.go.kr/5050000/hanOgHotelService/getHanOgHotel", {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          pageNo: 1,
          numOfRows: 7,
        },
      })
      .then((res) => {
        setData(res.data.response.body.items.item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHanokLists();
  }, []);

  useEffect(() => {}, [data]);

  return (
    data && (
      <div ref={element3} className="bg-zinc-50 py-20 relative overflow-hidden">
        <img
          src={back2}
          alt="banner"
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20"
          loading="lazy"
          decoding="async"
        />
        <p className="text-center relative">*********</p>
        <h1 className="text-center text-[1.125rem] xs:text-[1.5rem] md:text-[2.25rem] mb-5 md:mb-20 font-semibold relative">
          한옥만의 멋과 아름다움을 느껴보세요.
        </h1>
        <div className="md:w-[45rem] xl:w-[90rem] mx-auto my-0 flex overflow-auto relative">
          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="w-[21.5rem] md:w-[29.5rem] h-[25.5rem] bg-zinc-200 text-[1.125rem] text-black ml-4 my-2 md:mx-2 rounded cursor-pointer"
            >
              <div className=" w-[21.5rem] md:w-[29.5rem] h-[25.5rem] mx-auto rounded relative">
                <img
                  src={hanok[index]}
                  alt="hanok"
                  className="absolute w-full h-full top-0 left-0 z-0 rounded-t object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-0 py-5 left-0 pl-5 bg-[rgba(0,0,0,0.4)] w-full h-[30%] text-[#e4eaec]">
                  <div className="font-bold pb-1">{item.HOTEL_NM}</div>
                  <div>{item.ADRES}</div>
                </div>
                {item.HMPG_NM && (
                  <button className="bg-[rgba(255,255,255,0.4)] px-3 py-1 rounded-lg absolute top-5 right-5 text-[0.9rem]">
                    <a href={item.HMPG_NM}>상세보기</a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default HanokIntroduce;
