import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOne } from "../redux/kino/kinoSlice";
import KinoOne from "../components/KinoOne";

function CinemaOne() {
  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(getOne(id));

  return (
    <div>
      <KinoOne />
    </div>
  );
}

export default CinemaOne;
