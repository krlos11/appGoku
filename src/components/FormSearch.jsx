import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridCard } from "./GridCard";
import { getFetchData } from "../store/appThunk";

export const FormSearch = () => {
  const [search, setSearch] = useState("");

  let query = search !== "" ? `?name=${search}` : "";

  const { isLoading } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query === "") {
      dispatch(getFetchData(query));
    }
  }, [query]);

  useEffect(() => {
    dispatch(getFetchData());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFetchData(query));
  };


  return (
    <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Searching"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <input type="submit" value="Search" />
        </form>
    </>
  );
};
