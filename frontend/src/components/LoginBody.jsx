import img from "../assets/svg/login_img_left.jpg";
// Importing Lucide Icons
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

export default function Example() {
  return (
    <>
      {/* Complete Parent */}
      <div className="flex parent h-screen">
        {/* Left Elon Musk Image */}
        <div className="flex flex-1">
          <img src={img} alt="Your Company" className="rounded-xl" />
        </div>

        {/* Right Login Form Box  */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-900 rounded-xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          

          {/* Sign in using Social Links  */}
          <div className="flex justify-center pt-10">
            <a className="bg-white px-4 py-4 rounded-lg mx-2 hover:bg-gray-400" href="#">
              <Facebook />
            </a>
            <a className="bg-white px-4 py-4 rounded-lg mx-2 hover:bg-gray-400" href="#">
            <Twitter />
            </a>
            <a className="bg-white px-4 py-4 rounded-lg mx-2 hover:bg-gray-400" href="#">
            <Github />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
