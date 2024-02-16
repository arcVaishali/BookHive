import logo from '../assets/svg/libsign_in.jpg'; // Tell webpack this JS file uses this image

const UserBody = () => {
  return (
    <div>
      {/* Parent */}
      <div className="flex bg-zinc-900">

        {/* Left Image */}
        <div className="w-2/4">
          <img src={logo} alt="Logo" className='rounded-3xl' />
        </div>

        {/* Right Form */}
        <div className="sm:mx-auto sm:max-w-sm rounded-3xl pt-20 pb-20">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign Up to your account</h2>
          <div className="mt-10 w-[350px]">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pt-5" placeholder='Full name' />
                </div>
              </div>
              <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pt-5" placeholder='Email address' />
                </div>
              <div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pt-5" placeholder='Password'/>
                </div>
              </div>
              <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pt-5">Sign Up</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserBody;
