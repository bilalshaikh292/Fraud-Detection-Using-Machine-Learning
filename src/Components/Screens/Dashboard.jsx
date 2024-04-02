import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center font-Onest">
        <h1 className="text-3xl font-bold">Analytics</h1>

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

  const [predition, setPredition] = useState(null);

  const [data, setData] = useState({
    time: 0,
    v1: 0.0,
    v2: 0.0,
    v3: 0.0,
    v4: 0.0,
    v5: 0.0,
    v6: 0.0,
    v7: 0.0,
    v8: 0.0,
    v9: 0.0,
    v10: 0.0,
    v11: 0.0,
    v12: 0.0,
    v13: 0.0,
    v14: 0.0,
    v15: 0.0,
    v16: 0.0,
    v17: 0.0,
    v18: 0.0,
    v19: 0.0,
    v20: 0.0,
    v21: 0.0,
    v22: 0.0,
    v23: 0.0,
    v24: 0.0,
    v25: 0.0,
    v26: 0.0,
    v27: 0.0,
    v28: 0.0,
    amount: 0.0,
  });

  const handleChange = ({ currentTarget: input }) => {
    const value = parseFloat(input.value);

    setData({ ...data, [input.name]: value });
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Assuming the Excel file has headers and the data starts from the second row
      const [headers, ...rowData] = data;
      const newData = {};
      headers.forEach((header, index) => {
        newData[header.toLowerCase()] = rowData[0][index];
      });

      setData(newData);
    };

    reader.readAsBinaryString(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/predict";

      const res = await axios.post(url, data);
      setPredition(res.data[0]);
      console.log(res.data[0]);

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
        <div className="h-screen w-[20%] hidden bg-gray-100 lg:flex flex-col justify-between">
          <div className="flex flex-col p-4 space-y-14">
            <a href="/">
              <div className="w-full flex items-center justify-center space-x-3 py-4 px-2 cursor-pointer">
                <img
                  className="h-20 object-cover bg-transparent rotate-"
                  src="/icon.png"
                  alt=""
                />
                <h2 className="font-semibold md:text-2xl lg:text-3xl">
                  Fraud Detection
                </h2>
              </div>
            </a>

            <div className="flex flex-col space-y-10 w-full pl-10">
              <Link to="/">
                <div className="flex w-full justify-start items-center space-x-6">
                  <img className="h-5 opacity-60" src="/home.png" alt="" />
                  <h2 className="text-lg text-gray-700 font-semibold">Home</h2>
                </div>
              </Link>
              <Link to="/report">
                <div className="flex w-full justify-start items-center space-x-6">
                  <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                  <h2 className="text-lg text-gray-700 font-semibold">
                    Dashboard
                  </h2>
                </div>
              </Link>
              <Link to="/dashboard">
                <div className="flex w-full justify-start items-center space-x-6">
                  <img className="h-5 opacity-60" src="/chart.png" alt="" />
                  <h2 className="text-lg text-gray-700 font-semibold">
                    Analytics
                  </h2>
                </div>
              </Link>

              <Link to="/history">
                <div className="flex w-full justify-start items-center space-x-6">
                  <img className="h-5 opacity-60" src="/history.png" alt="" />
                  <h2 className="text-lg text-gray-700 font-semibold">
                    History
                  </h2>
                </div>
              </Link>
            </div>
          </div>

          {/* bottom */}
          <div className="w-full flex justify-center items-center space-x-6 py-8 cursor-pointer">
            <img
              className="h-12 w-12 rounded-full"
              src="/headshot.jpeg"
              alt=""
              srcSet=""
            />
            <h3 className="text-xl text-gray-700 font-semibold">Bilal Shaikh</h3>
          </div>
        </div>

        {/* main  */}

        <main className="py-10 h-screen w-full lg:w-[80%] px-8  shadow-gray-100 shadow-md overflow-y-auto">
          <div className="h-[10%]">
            <Navbar />
          </div>

          <div className="flex flex-col justify-center items-center space-y-8 w-full h-[90%]">
            {/* <h1 className="text-3xl font-semibold text-center">
              Detect Fraudulent transaction <br /> based on V1, V2
            </h1> */}
            <form
              className="flex flex-col w-full items-center max-w-xl mx-auto "
              onSubmit={handleSubmit}
            >
              <label htmlFor="simple-search" className="sr-only font-Onest">
                Search
              </label>

              {/* START */}

              <div className="grid grid-cols-5 gap-4">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="time"
                    name="time"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V1"
                    name="v1"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V2"
                    name="v2"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V3"
                    name="v3"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V4"
                    name="v4"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="v5"
                    name="v5"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="v6"
                    name="v6"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="v7"
                    name="v7"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V8"
                    name="v8"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V9"
                    name="v9"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V10"
                    name="v10"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V11"
                    name="v11"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V12"
                    name="v12"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V13"
                    name="v13"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V14"
                    name="v14"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V15"
                    name="v15"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V16"
                    name="v16"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V17"
                    name="v17"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V18"
                    name="v18"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V19"
                    name="v19"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V20"
                    name="v20"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V21"
                    name="v21"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V22"
                    name="v22"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V23"
                    name="v23"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V24"
                    name="v24"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V25"
                    name="v25"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V26"
                    name="v26"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V27"
                    name="v27"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="V28"
                    name="v28"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Amount"
                    name="amount"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>

                <h2 className="text-2xl text-center my-8 font-semibold font-Onest">OR</h2>
                <input
                  className=" bg-[#209CEE] text-black w-96"
                  type="file"
                  onChange={handleFileUpload}
                />
              </div>

              {/* END */}

              {error && (
                <div className="text-red-500 text-center my-2 font-semibold">{error}</div>
              )}

              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full flex justify-center items-center mt-4 text-center p-5 text-lg font-medium text-white bg-[#209CEE] rounded-lg border  hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
                <svg
                  className="w-4 h-4 mx-3"
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

              {predition !== null && (
                <div className="text-center my-10 text-lg font-Onest">
                  {predition === 0 ? (
                    <div className="text-green-500 ">
                      This is a proper transaction.
                    </div>
                  ) : (
                    <div className="text-red-600 ">
                      This is a fraudulent transaction.
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
