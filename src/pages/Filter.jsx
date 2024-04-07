import React from "react";
import { useParams } from "react-router-dom";
import KinoFilters from "../components/KinoFilters";
import { useDispatch } from "react-redux";
import { getFiltersKino } from "../redux/kino/kinoSlice";

function Filter() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  dispatch(getFiltersKino(slug));
  return (
    <div>
      <KinoFilters />
    </div>
  );
}

export default Filter;
