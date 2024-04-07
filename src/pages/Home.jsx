import React from "react";
import KinoList from "../components/KinoList";
import { data } from "../function/data";

function Home() {
  const { docs } = data();

  return (
    <div className="py-[40px] ">
      <h2 className="font-bold text-center text-[25px]">Kinolar</h2>
      <hr className="border-[2px]" />
      {docs && <KinoList kino={docs} />}
      {!docs && (
        <p className="flex flex-row gap-1 items-center place-content-center text-[20px]">
          Loading
          <span className="loading loading-bars loading-xs"></span>
        </p>
      )}
    </div>
  );
}

export default Home;
