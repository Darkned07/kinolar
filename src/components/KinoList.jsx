import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getKino } from "../redux/kino/kinoSlice";

function KinoList({ kino }) {
  const dispatch = useDispatch();
  const { admin } = useSelector((a) => a.auth);

  dispatch(getKino(kino));
  const moviDelete = (id, movi) => {
    const deleteData = async () => {
      const response = await fetch(`https://api-u9ii.onrender.com/kino/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    deleteData();
  };
  return (
    <div className="">
      <ul className="flex  gap-[20px] flex-wrap gap-x-9 gap-y-5 place-content-center ">
        {kino.map((cinema) => {
          return (
            <li
              key={cinema.id}
              className="rounded-xl bg-base-100 shadow-2xl max-w-[350px] flex flex-col px-[15px] py-[10px] items-center"
            >
              <Link to={`/cinema/${cinema.name}/${cinema.id}`}>
                <img
                  className="rounded-md  mt-[20px]"
                  src={cinema.image}
                  alt={cinema.name}
                />
                <div className="py-[20px]">
                  <h2 className="text-secondary text-center text-xl">
                    {cinema.name}
                  </h2>
                </div>
              </Link>
              {admin && (
                <button
                  onClick={() => {
                    moviDelete(cinema.id, cinema);
                  }}
                  className="btn btn-outline"
                >
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default KinoList;
