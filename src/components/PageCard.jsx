import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getFetchData_pageCard } from "../store/appThunk";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { PageCardItem } from "./PageCardItem";
import { PageCardTransformations } from "./PageCardTransformations";




export const PageCard = () => {
  const { id } = useParams();

  const { dataCharacter, isLoading } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const query = `/${id}`;
    dispatch(getFetchData_pageCard(query));
  }, [id]);

  if (isLoading || dataCharacter==null) {
    return (
      <div className="loading"></div>
    )
  }

  return (
    
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper-slide"
      >


      <SwiperSlide>
        <div className="page-card">
        <PageCardItem {...dataCharacter}/>
        </div>
      </SwiperSlide>
      {
        !!dataCharacter.transformations?.length
        ?(
          dataCharacter.transformations.map( item => (
            <SwiperSlide key={ item.id }>
              <PageCardTransformations {...item}/>
            </SwiperSlide>
          ))
        )
        : null
      }
      </Swiper>


    
  );
};
