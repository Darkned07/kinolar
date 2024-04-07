import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const sahifa = [
    { id: "1", kname: "jangari", name: "jangari" },
    { id: "2", kname: "fantatsika", name: "fantastika" },
    { id: "3", kname: "komediya", name: "komediya" },
    { id: "4", kname: "qorqinchli", name: "qorqinchli" },
    { id: "5", kname: "melodrama", name: "melodrama" },
  ];
  return (
    <div className="max-container py-[10px] ">
      <ul className="md:flex hidden justify-between  flex-row  px-[20px]">
        {sahifa.map((s) => {
          return (
            <li key={s.id}>
              <Link
                className="capitalize btn btn-outline btn-sm text-[18px]"
                to={`/filters-cinema/${s.kname}`}
              >
                {s.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="md:hidden flex menu bg-base-200 w-56 rounded-box mx-auto">
        <li>
          <details open>
            <summary className="text-[20px] font-bold">Kino Janrlari</summary>
            <ul className="flex flex-col gap-3 mt-[10px]">
              {sahifa.map((s) => {
                return (
                  <li key={s.id}>
                    <Link
                      className="capitalize btn btn-outline btn-sm text-[18px]"
                      to={`/filters-cinema/${s.kname}`}
                    >
                      {s.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
