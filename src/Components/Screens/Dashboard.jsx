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
              srcset=""
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

            <h1 className="text-3xl font-semibold text-center">Detect Fraudulent transaction <br /> based on V1, V2</h1>
            <form class="flex w-full items-center max-w-xl mx-auto">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-800 border border-gray-700 text-gray-200 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Value of versions"
                  required
                />
              </div>
              <button
                type="submit"
                class="p-5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
