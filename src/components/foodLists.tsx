import axios from "axios";
import { useState, useEffect } from "react";
import curve from "../images/curve.svg";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";
import food9 from "../images/food9.jpg";
import food10 from "../images/food10.jpg";
import food11 from "../images/food11.jpg";
import food12 from "../images/food12.jpg";
import food13 from "../images/food13.jpg";
import food14 from "../images/food14.jpg";
import food15 from "../images/food15.jpg";
import food16 from "../images/food16.jpg";
import food17 from "../images/food17.jpg";
import food18 from "../images/food18.jpg";
import food19 from "../images/food19.jpg";
import food20 from "../images/food20.jpg";
import food21 from "../images/food21.jpg";
import ListPagination from "./listPagenation";
import useMoveScroll from "../hooks/useMoveScroll";

const FoodLists = ({ element1 }: any) => {
  const [data, setData] = useState<Array<any>>([]);
  const [copyData, setCopyData] = useState<Array<any>>();
  const [page, setPage] = useState<number>(1);
  const [counts, setCounts] = useState<number>(1);
  const [blockNum, setBlockNum] = useState<number>(0);
  const limit: number = 8;
  const foods1: string[] = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
  ];
  const foods2: string[] = [
    food9,
    food10,
    food11,
    food12,
    food13,
    food14,
    food15,
    food16,
  ];
  const foods3: string[] = [food17, food18, food19, food20, food21];
  const [foodArr, setFoodArr] = useState<Array<string>>(foods1);
  const scrollTitle = useMoveScroll();
  const getRestaurantLists = async () => {
    await axios
      .get(
        "http://apis.data.go.kr/5050000/hwangridangilFoodHotPlaceService/getHwangridangilFoodHotPlace",
        {
          params: {
            serviceKey: process.env.REACT_APP_API_KEY,
            pageNo: 1,
            numOfRows: 21,
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
    getRestaurantLists();
  }, []);

  const handlePage = (page: number) => {
    page === 1
      ? setCopyData(data.slice(0, limit * page))
      : page === 2
      ? setCopyData(data.slice(limit, limit * page))
      : setCopyData(data.slice(limit + limit));
  };

  const handleFoodArr = (page: number) => {
    page === 1
      ? setFoodArr(foods1)
      : page === 2
      ? setFoodArr(foods2)
      : setFoodArr(foods3);
  };

  useEffect(() => {
    setCopyData(data.slice(0, 8));
    setCounts(data.length);
  }, [data]);

  useEffect(() => {
    handlePage(page);
    handleFoodArr(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div
      className="bg-[rgb(194, 202, 205)] pb-20"
      ref={element1}
      style={{
        background:
          "linear-gradient(180deg, rgba(194,202,205,1) 0%, rgba(238,252,255,1) 100%)",
      }}
    >
      <div ref={scrollTitle.element}>
        <img
          src={curve}
          alt="curve"
          className="w-full h-[1.5rem] md:h-[2.5rem]"
        />
      </div>
      <p className="text-center mt-20">*********</p>
      <h1 className="text-center text-[1.125rem] xs:text-[1.5rem] md:text-[2.25rem] mb-5 xs:mb-8 font-semibold">
        경주 황리단길 인기 맛집을 둘러보세요.
      </h1>
      <div className="w-[22.5rem] md:w-[45rem] xl:w-[90rem] mx-auto mb-5 text-right pr-4 text-[1rem] xs:text-[1.125rem] font-sans font-semibold">
        전체: <span className="text-[#DC761D]">{counts} </span>
      </div>
      <div className="w-[22.5rem] md:w-[45rem] xl:w-[90rem] mx-auto my-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-20">
        {copyData &&
          copyData.map((item: any, index: number) => (
            <div
              className="bg-white w-[21rem] h-[19rem] rounded-lg mx-auto p-5 relative hover:bg-cyan-50 cursor-pointer"
              key={index}
            >
              <div className="text-[1.25rem] font-semibold bg-[#aadce8] p-1 rounded text-center">
                {item.BSSH_NM}
              </div>
              <div className="text-[0.9rem] font-semibold pt-2">
                {item.ADRES}
              </div>
              <div className="text-[0.9rem]">{item.MBTLNUM}</div>
              <img
                src={foodArr[index]}
                alt="food"
                className="rounded-full absolute bottom-6 left-10 w-[15rem] mt-[1rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
      </div>
      <ListPagination
        limit={limit} // 8개씩
        page={page}
        setPage={setPage}
        blockNum={blockNum}
        setBlockNum={setBlockNum}
        counts={counts}
        moveScroll={scrollTitle.onMoveToElement}
      />
    </div>
  );
};

export default FoodLists;
