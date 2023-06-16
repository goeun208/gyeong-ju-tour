import React, { useState, useEffect } from 'react';
import axios from "axios";
import MainBanner from './components/mainBanner';

function App() {
  const [data, setData] = useState<Array<any>>([]);

  const getQnaLists = async () => {
    await axios
      .get("/5050000/theNightViewService/getTheNightView"
      , {
        params: {
          ServiceKey: process.env.REACT_APP_API_KEY,
      //     numOfRows: 6,
      //     pageNo: 10,
      //     dataType: "JSON",
      //     CURRENT_DATE: "2019071810",
      //     HOUR: 24,
      //     COURSE_ID: course_id,
        },}
      )
      .then((res) => {
        console.log(res);
        setData(res.data.response.body.items.item);
        console.log("qna lists", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQnaLists()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(data, 'data');
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="bg-black">
      <MainBanner />
      <h1 className='text-center text-white text-[2.25rem] my-20 font-semibold'>경주의 야간 명소를 한 눈에 확인해보세요.</h1>
      {data && 
        <div className='w-[90rem] mx-auto my-0 grid grid-cols-4'>
          {data.map((item:any, index:number) => (
            <div key={index} className='w-[21.5rem] h-[25.5rem] bg-[#c2c2c2] text-[1.125rem] text-white mx-2 my-5 pt-4 rounded cursor-pointer'>
              <div className='w-[20rem] h-[23.5rem] mx-auto bg-black rounded p-2 relative'>
                <img src={process.env.PUBLIC_URL + '/assets/images/cheomsungdae.jpg'} alt="cheomsungdae" className='absolute top-0 left-0 z-0 rounded-t'/>
                <div className='absolute top-[14rem]'>
                  <div>장소: {item.NM}</div>
                  <div>주소: {item.LC}</div>              
                  { item.VIEWNG_BEGIN_TIME && <div>
                    운영시간: {item.VIEWNG_BEGIN_TIME}
                    { item.VIEWNG_END_TIME && <span> - {item.VIEWNG_END_TIME}</span> } 
                    </div> }               
                  
                  <div>야간개장 일시: {item.NIGHT_SCENE_LGHT_BEGIN_TIME}</div>
                  <div>야간개장 마감: {item.NIGHT_SCENE_LGHT_END_TIME}</div>      
                </div>
                
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
