import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getAuthAdmin } from "../redux/kino/authSlice";

function Auth() {
  const dispatch = useDispatch();

  const { admins } = useSelector((s) => s.auth);
  const email = useRef();
  const password = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    admins.filter((admin) => {
      if (admin.email === email.current.value) {
        if (admin.password === password.current.value) {
          dispatch(getAuthAdmin(admin));
        } else {
          toast.error("parol esdan chiqgan bolsa sayt kodini almashtiring");
        }
      } else {
        toast.error("bunday emaildagi admin mavjud emas :(");
      }
    });
  };
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Faqat Admin kira oladi !</h1>
            <p className="py-6">
              Agar sizda login parol mavjud bolsa siz adminsiz agar sizda login
              parol mavjud bolmasa siz foydalanuvchisiz kinolarni saytimizdan
              ossongina topishingiz mumkun!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={email}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  ref={password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
