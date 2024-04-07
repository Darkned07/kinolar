import React from "react";
import { useDispatch } from "react-redux";
import { themeChange } from "../redux/kino/kinoSlice";

function ChangeTheme() {
  const dispatch = useDispatch();
  const themes = [
    { id: "1", theme: "light", thName: "Light Mode" },
    { id: "2", theme: "dark", thName: "Dark Mode" },
    { id: "3", theme: "cupcake", thName: "Cupcake Mode" },
    { id: "4", theme: "bumblebee", thName: "Bumblebee Mode" },
    { id: "5", theme: "emrald", thName: "Emerald Mode" },
    { id: "6", theme: "corporate", thName: "Corporate Mode" },
    { id: "7", theme: "synthwave", thName: "Synthwave Mode" },
    { id: "8", theme: "retro", thName: "Retro Mode" },
    { id: "9", theme: "cyberpunk", thName: "Cyberpunk Mode" },
    { id: "10", theme: "valentine", thName: "Valentine Mode" },
    { id: "11", theme: "halloween", thName: "Halloween Mode" },
    { id: "12", theme: "garden", thName: "Garden Mode" },
    { id: "13", theme: "forest", thName: "Fantasy Mode" },
    { id: "14", theme: "aqua", thName: "Aqua Mode" },
    { id: "15", theme: "lofi", thName: "Lofi Mode" },
    { id: "16", theme: "pastel", thName: "Pastel Mode" },
    { id: "17", theme: "fantasy", thName: "Fantasy Mode" },
    { id: "18", theme: "wireframe", thName: "Wireframe Mode" },
    { id: "19", theme: "black", thName: "Black Mode" },
    { id: "20", theme: "luxury", thName: "Luxury Mode" },
    { id: "21", theme: "dracula", thName: "Dracula Mode" },
    { id: "22", theme: "cmyk", thName: "Cmyk Mode" },
    { id: "23", theme: "autumn", thName: "Autumn Mode" },
    { id: "24", theme: "business", thName: "Business Mode" },
    { id: "25", theme: "acid", thName: "Acid Mode" },
    { id: "26", theme: "lemonade", thName: "Lemonade Mode" },
    { id: "27", theme: "night", thName: "Night Mode" },
    { id: "28", theme: "coffee", thName: "Coffee Mode" },
    { id: "29", theme: "winter", thName: "Winter Mode" },
    { id: "30", theme: "dim", thName: "Dim Mode" },
    { id: "31", theme: "nord", thName: "Nord Mode" },
    { id: "32", theme: "sunset", thName: "Sunset Mode" },
  ];

  const handleTheme = (theme) => {
    dispatch(themeChange(theme));
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-[20px]">
      <ul className="py-[30px] px-[30px] flex flex-wrap   place-content-center  items-center justify-between  gap-5">
        {themes.map((t) => {
          return (
            <li className="mx-auto" key={t.id}>
              <button
                onClick={() => {
                  handleTheme(t.theme);
                }}
                className="btn btn-outline w-[200px]"
              >
                {t.thName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChangeTheme;
