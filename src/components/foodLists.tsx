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
import ListPagination from "./listPagenation";

const FoodLists = ({ element1 }: any) => {
  const [data, setData] = useState<Array<any>>([]);
  const [copyData, setCopyData] = useState<Array<any>>(data);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [counts, setCounts] = useState(1);
  const [blockNum, setBlockNum] = useState(0);
  const foods = [food1, food2, food3, food4, food5, food6, food7, food8];
  // http://apis.data.go.kr
  const getRestaurantLists = async () => {
    await axios
      .get(
        "/5050000/hwangridangilFoodHotPlaceService/getHwangridangilFoodHotPlace",
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
    page === 1 ? setCopyData(data.slice(0, limit * page))
    : page === 2 ? setCopyData(data.slice(limit, limit * page))
    : setCopyData(data.slice(limit + limit))
  }

  useEffect(() => {
    setCopyData(data)
    setCounts(data.length)
  }, [data])

  useEffect(() => {
    handlePage(page)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className="bg-[rgb(194, 202, 205)] pb-20" ref={element1} style={{ background: 'linear-gradient(180deg, rgba(194,202,205,1) 0%, rgba(238,252,255,1) 100%)' }}>
      <div>
        <img
          src={curve}
          alt="curve"
          className="w-full h-[1.5rem] md:h-[2.5rem]"
        />
      </div>
      <p className='text-center mt-20'>*********</p>
      <h1 className='text-center text-[1.5rem] md:text-[2.25rem] mb-8 font-semibold'>경주 황리단길 인기 맛집을 둘러보세요.</h1>
      <div  className='w-[22.5rem] md:w-[45rem] xl:w-[90rem] mx-auto mb-5 text-right pr-4 text-[1.125rem] font-sans font-semibold'>
        전체: <span className="text-[#DC761D]">{counts} </span>
      </div>
      <div className="w-[22.5rem] md:w-[45rem] xl:w-[90rem] mx-auto my-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-20">
        {copyData.map((item: any, index: number) => (
            index < limit &&
          <div className="bg-white w-[21rem] h-[19rem] rounded-lg mx-auto p-6 relative hover:bg-cyan-50 cursor-pointer" key={index}>
            <div className="text-[1.25rem] font-semibold bg-[#aadce8] p-1 rounded">{item.BSSH_NM}</div>
            <div className="text-[0.9rem] font-semibold pt-2">{item.ADRES}</div>
            <div className="text-[0.9rem]">{item.MBTLNUM}</div>
            <img src={foods[index]} alt="food" className="rounded-full absolute bottom-6 left-10 w-[15rem] mt-[1rem]" />
          </div>
        ))}
      </div>
      <ListPagination
        limit={limit} // 8개씩만
        page={page}
        setPage={setPage}
        blockNum={blockNum}
        setBlockNum={setBlockNum}
        counts={counts} // 전체
      />
    </div>
  );
};

export default FoodLists;
