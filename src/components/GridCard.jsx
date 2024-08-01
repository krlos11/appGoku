import React, { useCallback, useState } from "react";
import { ItemCard } from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { moreData_pages } from "../store/appThunk";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getCountPages, setIsLoading } from "../store/appSlice";

export const GridCard = () => {
  const { data, isLoading, countPages } = useSelector((state) => state.appSlice);
  const [loop, setLoop] = useState(true);
  const dispatch = useDispatch();


  
  const moreDatas = useCallback(()=>{
    dispatch( getCountPages() )
    if(countPages<=60){
      dispatch( moreData_pages(`?limit=${countPages}`));
    }else{
      setLoop(false);
    }
  },[dispatch, countPages]);

  
  if(isLoading){
    return (
      <div className="loading"></div>
    )
  }
  
  
  return (
    <>
    <InfiniteScroll
          dataLength={data.length}
          hasMore={loop}
          next={moreDatas}
          loader={<div className="loading"></div>}
          style={{
            overflow:'none', 
            display: "flex",
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap"
          }}
      >
        
        {
          !isLoading && data != null
          ? data.map((item) => <ItemCard key={item.id} {...item} />)
          : null
        }
      </InfiniteScroll>
    </>
  );
};
