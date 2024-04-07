import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

function KinoOne() {
  const { kino } = useSelector((store) => store.kino);
  console.log(kino);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div className="my-[30px]">
      <div className="card lg:card-side bg-base-100 shadow-xl mb-[10px]">
        <figure>
          <img
            className="rounded-[20px]"
            src={kino && kino.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto lg:mx-0">{kino && kino.name}</h2>
          <div className="flex flex-col gap-2 mt-[10px] mx-auto lg:mx-0">
            <span className="flex flex-wrap gap-2 font-bold">
              Janri:
              <span className="flex capitalize flex-wrap gap-1 font-normal">
                {kino &&
                  kino.janri.map((l) => {
                    return <p key={l}>{l}</p>;
                  })}
              </span>
            </span>
            <span className="flex flex-wrap gap-2 font-bold">
              Tili:{" "}
              <p className="font-normal capitalize">{kino && kino.tili}</p>
            </span>
            <span className="flex flex-wrap gap-2 font-bold">
              Davlati:
              <p className="font-normal capitalize">{kino && kino.davlati}</p>
            </span>
            <span className="flex flex-wrap gap-2 font-bold">
              Yili:{" "}
              <p className="font-normal capitalize">{kino && kino.yili}</p>
            </span>
            <span className="flex flex-wrap gap-2 font-bold">
              Davomiyligi:
              <p className="font-normal capitalize">
                {kino && kino.davomiyligi}
              </p>
            </span>
          </div>
          <div className="flex flex-col mt-[20px] gap-5">
            <Link
              to={kino && kino.tgsilka}
              target="_blank"
              className="btn btn-success btn-outline "
            >
              Telegramdan yuklash
            </Link>
            <Link
              className="btn btn-secondary btn-outline"
              target="_blank"
              to={kino && kino.tgkanali}
            >
              Telegram kanalimiz
            </Link>
          </div>
        </div>
      </div>
      <h2 className="my-[10px] text-center font-bold capitalize text-[25px]">
        Kino traileri
      </h2>
      <hr className="border-[3px] rounded-[20px]" />
      <div className="card flex flex-col lg:card-side bg-base-100 p-[10px] h-[250px]  rounded-[20px] sm:h-[350px] md:h-[500px] shadow-xl">
        <YouTube
          className="w-full h-full"
          videoId={kino && kino.ytcodes}
          opts={opts}
          onReady={onReady}
        />
      </div>
    </div>
  );
}

export default KinoOne;
