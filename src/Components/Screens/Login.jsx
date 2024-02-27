
export default function Login() {
  return (
    <>
      <div className="py-6 px-8 font-Onest lg:flex lg:flex-row-reverse md:p-20 lg:p-0 ">
        <div className="h-32 w-32 bg-pattern bg-no-repeat bg-cover bg-center shadow-md m:bg-center bg-fixed lg:h-screen lg:w-1/2"></div>
        <div className="lg:w-1/2 lg:p-32">
          <h1 className="text-4xl mt-14 mb-8 font-semibold">Welcome back</h1>
          <input
            id="email"
            className="w-full mb-5 placeholder-dark border-2 border-dark rounded-md py-3 px-4"
            placeholder="Enter your email"
            type="text"
          />
          <input
            className="w-full mb-6 placeholder-dark border-2 border-dark rounded-md py-3 px-4"
            placeholder="Enter your password"
            type="password"
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
          <button className="w-full mb-5 rounded-md bg-dark text-light py-3 hover:bg-opacity-90">Sign in</button>
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
