import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center font-Onest">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="flex justify-between items-center space-x-4 text-md text-gray-600">
          {/* <a className="hover:text-black hover:text-lg" href="/login">
            Login
          </a>
          <a className="hover:text-black hover:text-lg" href="/signup">
            Signup
          </a> */}
        </div>
      </div>
    </>
  );
};

export default function Dashboard() {

  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [data,setData] = useState({
    "time": 0,
    "v1": 0.0, 
    "v2": 0.0,
    "v3": 0.0,
    "v4": 0.0,
    "v5": 0.0,
    "v6": 0.0,
    "v7": 0.0,
    "v8": 0.0,
    "v9": 0.0,
    "v10":0.0,
    "v11":0.0,
    "v12":0.0,
    "v13":0.0,
    "v14":0.0,
    "v15":0.0,
    "v16":0.0,
    "v17":0.0,
    "v18":0.0,
    "v19":0.0,
    "v20":0.0,
    "v21":0.0,
    "v22":0.0,
    "v23":0.0,
    "v24":0.0,
    "v25":0.0,
    "v26":0.0,
    "v27":0.0,
    "v28":0.0,
    "amount":0.0
});

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const url = "http://localhost:5000/predict";

      const res = await axios.post(url,data);
      console.log(res.data[0])

      //setPrediction(res.data.prediction);

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
      <div className="flex font-Onest">
        {/* Sidebar */}
        <div className="h-screen w-[20%] hidden bg-gray-100 lg:flex flex-col justify-between">
          {/* top */}
          <div className="flex flex-col p-4 space-y-14">
            <div className="w-full flex items-center justify-center space-x-3 py-4 px-2">
              <img
                className="h-20 object-cover bg-transparent rotate-"
                src="/icon.png"
                alt=""
              />
              <h2 className="font-semibold text-3xl">Fraud Detection</h2>
            </div>

            <div className="flex flex-col space-y-10 w-full pl-10">
              <Link to="/">
                <div className="flex w-full justify-start items-center space-x-6">
                  <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                  <h2 className="text-lg text-gray-700 font-semibold">Home</h2>
                </div>
              </Link>
              <div className="flex w-full justify-start items-center space-x-6">
                <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                <h2 className="text-lg text-gray-700 font-semibold">
                  Dashboard
                </h2>
              </div>
              <div className="flex w-full justify-start items-center space-x-6">
                <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                <h2 className="text-lg text-gray-700 font-semibold">
                  Analytics
                </h2>
              </div>
              <div className="flex w-full justify-start items-center space-x-6">
                <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                <h2 className="text-lg text-gray-700 font-semibold">History</h2>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="w-full flex justify-center items-center space-x-6 py-8">
            <img
              className="h-12 w-12 rounded-full"
              src="/headshot.jpeg"
              alt=""
              srcSet=""
            />
            <h3 className="text-xl text-gray-700 font-semibold">Ankush Rao</h3>
          </div>
        </div>

        {/* main  */}

        <main className="h-screen w-full lg:w-[80%] px-8 py-10 shadow-gray-100 shadow-md">
          <div className="h-[10%]">
            <Navbar />
          </div>

          <div className="flex flex-col justify-center items-center space-y-8 w-full h-[90%]">
            <h1 className="text-3xl font-semibold text-center">
              Detect Fraudulent transaction <br /> based on V1, V2
            </h1>
            <form
              className="flex w-full items-center max-w-xl mx-auto"
              onSubmit={handleSubmit}
            >
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="time"
                  onChange={handleChange}
                  value={data.time}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v1"
                  onChange={handleChange}
                  value={data.v1}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v2"
                  onChange={handleChange}
                  value={data.v2}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v3"
                  onChange={handleChange}
                  value={data.v3}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v4"
                  onChange={handleChange}
                  value={data.v4}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v5"
                  onChange={handleChange}
                  value={data.v5}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v6"
                  onChange={handleChange}
                  value={data.v6}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v7"
                  onChange={handleChange}
                  value={data.v7}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v8"
                  onChange={handleChange}
                  value={data.v8}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v9"
                  onChange={handleChange}
                  value={data.v9}
                  required
                />
              </div>

              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v10"
                  onChange={handleChange}
                  value={data.v10}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v11"
                  onChange={handleChange}
                  value={data.v11}
                  required
                />
              </div>

              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v12"
                  onChange={handleChange}
                  value={data.v12}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v13"
                  onChange={handleChange}
                  value={data.v13}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v14"
                  onChange={handleChange}
                  value={data.v14}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v15"
                  onChange={handleChange}
                  value={data.v15}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v16"
                  onChange={handleChange}
                  value={data.v16}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v17"
                  onChange={handleChange}
                  value={data.v17}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v18"
                  onChange={handleChange}
                  value={data.v18}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v19"
                  onChange={handleChange}
                  value={data.v19}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v20"
                  onChange={handleChange}
                  value={data.v20}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v21"
                  onChange={handleChange}
                  value={data.v21}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v22"
                  onChange={handleChange}
                  value={data.v22}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v23"
                  onChange={handleChange}
                  value={data.v23}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v24"
                  onChange={handleChange}
                  value={data.v24}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v25"
                  onChange={handleChange}
                  value={data.v25}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v26"
                  onChange={handleChange}
                  value={data.v26}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v27"
                  onChange={handleChange}
                  value={data.v27}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v28"
                  onChange={handleChange}
                  value={data.v28}
                  required
                />
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  name="v12"
                  onChange={handleChange}
                  value={data.amount}
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-center my-2">{error}</div>
              )}

              <button
                onClick={handleSubmit}
                type="submit"
                className="p-5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
