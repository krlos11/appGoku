import React from "react";
import { FormSearch } from "../components/FormSearch";
import { GridCard } from "../components/GridCard";
import { Headers } from "../components/Headers";

export const MainPage = () => {
  return (
    
    <div className="main-page">

      <Headers>
        <FormSearch />
      </Headers>
      
      <div className="grid-card">
        <GridCard />
      </div>



    </div>
  );
};
