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
  return (
    <>
      <div className="flex font-Onest">
      {/* Sidebar */}
        <div className="h-screen w-[20%] hidden bg-gray-100 lg:flex flex-col justify-between">
          {/* top */}
          <div className="flex flex-col p-4 space-y-14">
            <div className="w-full flex items-center justify-center space-x-3 py-4 px-2">
                <img className="h-20 object-cover bg-transparent rotate-" src="/icon.png" alt="" />
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
                    <h2 className="text-lg text-gray-700 font-semibold">Dashboard</h2>
                </div>
                <div className="flex w-full justify-start items-center space-x-6">
                    <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                    <h2 className="text-lg text-gray-700 font-semibold">Analytics</h2>
                </div>
                <div className="flex w-full justify-start items-center space-x-6">
                    <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                    <h2 className="text-lg text-gray-700 font-semibold">History</h2>
                </div>
            </div>
          </div>

          {/* bottom */}
          <div className="w-full flex justify-center items-center space-x-6 py-8">
            <img className="h-12 w-12 rounded-full" src="/headshot.jpeg" alt="" srcset="" />
            <h3 className="text-xl text-gray-700 font-semibold">Ankush Rao</h3>
          </div>
        </div>

        {/* main  */}

        <main className="h-screen w-full lg:w-[80%] px-8 py-10 shadow-gray-100 shadow-md">
          <div className="h-[10%]">
            <Navbar />
          </div>

          <div className="flex h-[90%]">
            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-700 dark:hover:bg-bray-800 dark:bg-gray-400 hover:bg-gray-600 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-200 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-200 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
