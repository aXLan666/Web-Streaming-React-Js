import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/AuthSlice.js";
import foto1 from '../components/images/Foto.png';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/sidebar/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className='absolute w-screen h-screen bg-black900'>
          <img src={foto1} alt="" className='blur-dark-image w-screen h-screen' />
        </div>
        <div className="flex self-center w-[1296px] h-[714px] drop-shadow-2xl">
          <div className="w-[550px] h-[714px] bg-white rounded-l-[25px]">
            <div className="flex mt-[40px] ml-[64px] mb-[56px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="movie"
                className="w-[48px] h-[48px]"
              >
                <g data-name="Layer 2">
                  <path d="M14.28,24.67a1.11,1.11,0,0,1-1.11-1.11v-7a1.11,1.11,0,0,1,1.71-.93l5.44,3.51a1.11,1.11,0,0,1,0,1.86L14.88,24.5A1.12,1.12,0,0,1,14.28,24.67Zm.89-6.48v3.74l2.9-1.87Z"></path>
                  <path d="M27.85,29H4.15A3.15,3.15,0,0,1,1,25.85V11H31V25.85A3.15,3.15,0,0,1,27.85,29ZM3,13V25.85A1.15,1.15,0,0,0,4.15,27h23.7A1.15,1.15,0,0,0,29,25.85V13Z"></path>
                  <path d="M31,13H1V6.15A3.15,3.15,0,0,1,4.15,3h23.7A3.15,3.15,0,0,1,31,6.15ZM3,11H29V6.15A1.15,1.15,0,0,0,27.85,5H4.15A1.15,1.15,0,0,0,3,6.15Z"></path>
                  <polygon points="15.92 12.45 14.13 11.55 15.91 8 14.13 4.45 15.92 3.55 18.14 8 15.92 12.45"></polygon>
                  <polygon points="7.7 12.45 5.91 11.55 7.69 8 5.91 4.45 7.7 3.55 9.92 8 7.7 12.45"></polygon>
                  <polygon points="23.92 12.45 22.13 11.55 23.91 8 22.13 4.45 23.92 3.55 26.14 8 23.92 12.45"></polygon>
                </g>
              </svg>
              <h3 className="text-black900 font-mono text-[32px] ml-[16px]">
                Banglades
              </h3>
            </div>
            <div className="ml-[64px] mb-[16px]">
              <p className="text-[24px] font-extrabold text-black900">
                High-quality films for you,<br></br>
                Satisfying films just for you
              </p>
            </div>
            <div className="ml-[64px] mb-[32px]">
              <p className="text-black900">Login to your account</p>
            </div>
            <form className="ml-[64px]" onSubmit={Auth}>
              {isError && <p className="text-center text-2xl">{message}</p>}
              <div className="mb-[24px]">
                <h3 className="text-black900">Email</h3>
                <input
                  type="text"
                  placeholder="Email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-[422px] bg-inherit"
                />
              </div>
              <div className="mb-[24px]">
                <h3 className="text-black900">Password</h3>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={((e) => setPassword(e.target.value), handleInputChange)}
                    className="input input-bordered w-[422px] bg-inherit pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute left-[381px] top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="grid gap-2 grid-cols-2 w-[422px] mb-[24px]">
                <div className="form-control">
                  <label className="flex cursor-pointer text-black900">
                    <input
                      type="checkbox"
                      checkbox=""
                      className="checkbox checkbox-accent outline outline-2 border-0"
                    />
                    <p className="font-regular text-lg ml-[9px]">Remember me</p>
                  </label>
                </div>
                <p className="text-right font-regular text-lg text-black900 cursor-pointer underline underline-offset-2">
                  Forgot password?
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 w-[422px] mb-[24px]">
                <div
                  className="btn w-[199px] h-[48px] outline outline-success border-0 bg-success hover:bg-success text-white">
                  <button
                    type='submit'
                    className="w-[199px] h-[48px] outline outline-none border-0"
                  >
                    {isLoading ? <span className="loading loading-spinner"></span> : "Login"}
                  </button>
                </div>
                <div className="btn w-[199px] h-[48px] outline outline-success border-0 bg-transparent hover:bg-white text-black900">
                  Sign Up
                </div>
              </div>
            </form>

          </div>
          <div className="w-[746px] h-[714px] bg-purple500 rounded-r-[25px]"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
