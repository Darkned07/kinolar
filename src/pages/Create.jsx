import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";
import { createMovie } from "../function/createMovie";
import { useNavigate } from "react-router-dom";

function Create() {
  const { postData } = createMovie();
  const navigate = useNavigate();
  const name = useRef();
  const [janri, setJanri] = useState([]);
  const jan = useRef();
  const davomiyligi = useRef();
  const davlati = useRef();
  const tili = useRef();
  const yuklash = useRef();
  const image = useRef();
  const kanal = useRef();
  const ytcodes = useRef();
  const yili = useRef();
  const data = new Date().toDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    postData("http://localhost:3000/kino", {
      id: nanoid(),
      name: name.current.value,
      davlati: davlati.current.value,
      yili: yili.current.value,
      image: image.current.value,
      tili: tili.current.value,
      janri: janri,
      davomiyligi: davomiyligi.current.value,
      tgsilka: yuklash.current.value,
      tgkanali: kanal.current.value,
      ytcodes: ytcodes.current.value,
      time: data,
    }).then((data) => {
      console.log(data);
      toast.success("kino qo'shildi");
      navigate("/");
    });
  };

  return (
    <div className="my-[30px]  ">
      <h2 className="text-center text-[25px] text-secondary">Create Movie</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  items-center gap-5 place-content-center"
      >
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino nomi:</span>
          </div>
          <input
            ref={name}
            type="text"
            placeholder="kino nomi"
            className="input input-bordered input-accent w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino yili:</span>
          </div>
          <input
            ref={yili}
            type="text"
            placeholder="kino yili"
            className="input input-bordered input-accent w-full max-w-xl"
          />
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino janri:</span>
          </div>
          <input
            ref={jan}
            type="text"
            placeholder="kino janri"
            className="input input-bordered input-info w-full max-w-xl"
          />
          <div className="label">
            <span className="label-text-alt">Kino janri:</span>
            <span className="flex flex-wrap gap-2">
              {janri.length >= 1 &&
                janri.map((j) => {
                  return (
                    <p key={j} className="label-text-alt">
                      {j}
                    </p>
                  );
                })}
            </span>
          </div>
        </label>
        <button
          onClick={() => {
            if (!janri.includes(jan.current.value)) {
              setJanri((s) => {
                return [...s, jan.current.value];
              });
              setTimeout(() => {
                jan.current.value = "";
              }, 100);
            } else {
              toast.error("avval qoshilgan");
            }
          }}
          type="button"
          className="btn btn-outline btn-info w-full max-w-xl"
        >
          Add
        </button>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino davomiyligi:</span>
          </div>
          <input
            ref={davomiyligi}
            type="text"
            placeholder="kino davomiyligi"
            className="input input-bordered input-secondary w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino davlati:</span>
          </div>
          <input
            ref={davlati}
            type="text"
            placeholder="kino davlati"
            className="input input-bordered input-success w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino tili:</span>
          </div>
          <input
            ref={tili}
            type="text"
            placeholder="kino tili"
            className="input input-bordered input-warning w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino yuklash silkasi:</span>
          </div>
          <input
            ref={yuklash}
            type="url"
            placeholder="kino yuklash silkasi"
            className="input input-bordered input-primary w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino rasmi:</span>
          </div>
          <input
            ref={image}
            type="url"
            placeholder="kino rasmi"
            className="input input-bordered input-secondary w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Kino kanalimiz:</span>
          </div>
          <input
            ref={kanal}
            type="url"
            placeholder="kino kanalimiz"
            className="input input-bordered input-info w-full max-w-xl"
          />
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">
              Kino traileri youtube video kodi:
            </span>
          </div>
          <input
            ref={ytcodes}
            type="text"
            placeholder="youtube video kodi"
            className="input input-bordered input-secondary w-full max-w-xl"
          />
        </label>
        <button className="btn btn-outline btn-secondary w-full max-w-xl">
          Kino qo'shish
        </button>
      </form>
    </div>
  );
}

export default Create;
