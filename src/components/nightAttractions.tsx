import { useState, useEffect, RefObject } from 'react';
import axios from "axios";
import image1 from '../images/image1.jpg'
import image2 from '../images/cheomsungdae.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'


const NightAttractions = ({element2}: any) => {
    const [data, setData] = useState<Array<any>>([]);
    const imgs = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
    // http://apis.data.go.kr
    const getAttractionsLists = async () => {
      await axios
        .get("/5050000/theNightViewService/getTheNightView"
        , {
          params: {
            ServiceKey: process.env.REACT_APP_API_KEY,
          },}
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
    }, [])
  
    useEffect(() => {
    }, [data]);
  

    return (
    data && 
    <div ref={element2}>
      <p className='text-center mt-20 text-white'>*********</p>
      <h1 className='text-center text-white text-[1.5rem] md:text-[2.25rem] mb-20 font-semibold'>경주의 야간 명소를 한 눈에 확인해보세요.</h1>
        <div className='w-[22.5rem] md:w-[45rem] xl:w-[90rem] mx-auto my-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-20'>
        {data.map((item:any, index:number) => (
          <div key={index} className='w-[21.5rem] h-[25.5rem] bg-zinc-200 text-[1.125rem] text-black mx-2 my-5 pt-4 rounded cursor-pointer'>
            <div className='w-[20rem] h-[23.5rem] mx-auto rounded p-2 relative'>
              <img src={imgs[index]} alt="cheomsungdae" className='absolute top-0 left-0 z-0 rounded-t h-[13.5rem] object-cover'/>
              <div className='absolute top-[14rem]'>
                <div>장소: {item.NM}</div>
                <div>주소: {item.LC}</div>              
                { item.VIEWNG_BEGIN_TIME && <div>
                  운영시간: {item.VIEWNG_BEGIN_TIME}
                  { item.VIEWNG_END_TIME && <span> - {item.VIEWNG_END_TIME}</span> } 
                  </div> }               
                
                <div>야간개장 시작: {item.NIGHT_SCENE_LGHT_BEGIN_TIME}</div>
                <div>야간개장 마감: {item.NIGHT_SCENE_LGHT_END_TIME}</div>      
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

export default NightAttractions;