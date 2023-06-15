import React, { useState, useEffect } from 'react';
import axios from "axios";
import MainBanner from './components/mainBanner';

function App() {
  const [data, setData] = useState<Array<any>>([]);

  const getQnaLists = async (course_id:number) => {
    await axios
      .get("/1360000/TourStnInfoService1/getTourStnVilageFcst1", {
        params: {
          ServiceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 6,
          pageNo: 10,
          dataType: "JSON",
          CURRENT_DATE: "2019071810",
          HOUR: 24,
          COURSE_ID: course_id,
        },
      })
      .then((res) => {
        setData(res.data.response.body.items.item);
        console.log("qna lists", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQnaLists(113)
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(data, 'data');
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="bg-zinc-100">
      <MainBanner />
      <h1 className='text-center text-[2rem] font-bold my-10'>관광 명소의 날씨를 한 눈에 확인해보세요.</h1>
      {data && 
        <div className='w-[80rem] mx-auto my-0 grid grid-cols-3'>
          {data.map((item:any, index:number) => (
            <div key={index} className='w-[25rem] h-[30rem] text-[1.5rem] text-[#002259] mx-2 my-5 p-4 border border-[#004FBE] rounded '>
              <div className='text-[#003873] font-bold'>{item.courseName}</div>
              <div>테마: {item.thema}</div>
              <div>장소: {item.spotName}</div>              
              <div>온도: {item.th3}</div>              
              <div>습도: {item.rhm}</div>              
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
