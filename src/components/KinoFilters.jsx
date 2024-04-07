import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function KinoFilters() {
  const { filters } = useSelector((store) => store.kino);
  return (
    <div className="my-[20px]">
      <ul className="flex  gap-[20px] flex-wrap gap-x-9 gap-y-5 place-content-center ">
        {filters &&
          filters.map((cinema) => {
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
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default KinoFilters;
