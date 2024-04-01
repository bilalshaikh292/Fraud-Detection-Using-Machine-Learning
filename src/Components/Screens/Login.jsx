import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
});
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/login";
      const res = await axios.post(url, data);
      console.log(res)
      window.location = "/dashboard";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.error);
      }
    }
  };
  return (
    <>
      <div className="py-6 px-8 font-Onest lg:flex lg:flex-row-reverse md:p-20 lg:p-0 ">
        <div className="h-32 w-32 bg-pattern bg-no-repeat bg-contain md:bg-cover bg-bottom-right lg:bg-center shadow-md m:bg-center bg-fixed lg:h-screen lg:w-1/2"></div>
        <div className="lg:w-1/2 lg:p-32">
          <form onSubmit={handleSubmit}>
          <h1 className="text-4xl mt-14 mb-8 font-semibold">Welcome back</h1>
          <input
            id="text"
            className="w-full mb-5 placeholder-dark border-2 border-dark rounded-md py-3 px-4"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
          />
              <input
              className="w-full mb-6 placeholder-dark border-2 border-dark rounded-md py-3 px-4"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
                      <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                className="w-4 h-4 accent-dark"
                type="checkbox"
                name="remember-p"
                id="remember-p"
              />
              <label htmlFor="remember-p" className="ml-2">Remember me</label>
            </div>
            <a href="#" className="hover:opacity-90">Forgot password</a>
          </div>
          {error && <div className="text-red-500 text-center my-2">{error}</div>}
          <button className="w-full mb-5 rounded-md bg-dark text-light py-3 hover:bg-opacity-90" onClick={handleSubmit}>Sign in</button>
          </form >


          <button className="flex items-center justify-center w-full mb-7 rounded-md border-2 border-dark py-3 space-x-2">
            <div className="h-5 w-5 mr-2">
              <img src="/google.png" alt="" />
            </div>
            <div>
              Sign in with Google
            </div>
          </button>

          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-700 mx-1">Dont have an account?</p>
            <a href="/signup" className="hover:opacity-90">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}
