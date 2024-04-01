import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center font-Onest">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="flex justify-between items-center space-x-4 text-md text-gray-600"></div>
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
                  <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
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
                  <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
                  <h2 className="text-lg text-gray-700 font-semibold">
                    Analytics
                  </h2>
                </div>
              </Link>

              <Link to="/history">
                <div className="flex w-full justify-start items-center space-x-6">
                  <img className="h-5 opacity-60" src="/dashboard.png" alt="" />
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
            <h3 className="text-xl text-gray-700 font-semibold">Ankush Rao</h3>
          </div>
        </div>

        {/* main  */}

        <main className="h-screen w-full lg:w-[80%] px-8 py-10 shadow-gray-100 shadow-md font-Onest">
          <div className="h-[10%]">
            <Navbar />
          </div>
          <h1 className="text-4xl font-semibold">Random Forest Classifier</h1>
          <div className="flex flex-col md:flex-row">
            <img className="h-96 md:border-r-2 md:border-black md:pr-8" src="/figure1.jpg" alt="" />
            <img className="h-96 pl-8" src="/confusion-matrix.jpg" alt="" />
          </div>
          <p className="text-xl pl-8 pb-12 md:pb-0">
            Accuracy: 99.96% <br />
            Precision: 97.47% <br />
            Recall: 78.57% <br />
            F1 Score: 87.01% <br />
            Matthews Correlation Coefficient: 87.49%
          </p>
        </main>
      </div>
    </>
  );
}
