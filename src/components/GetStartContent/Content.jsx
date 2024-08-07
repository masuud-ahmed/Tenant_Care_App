import {AiOutlineCheckCircle, AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="p-12 max-[400px]:p-8 md:p-20 text-center">
      <div>
        <h1 className="text-3xl font-bold text-[#0D025E] cursor-pointer">
          Create Account
        </h1>
      </div>
      <div class="flex flex-wrap justify-center gap-7 mt-10 ">

        <div class="max-[400px]:w-[94%] w-[260px]  overflow-hidden shadow-lg rounded-3xl border-2  border-[#00befe] p-5">
           <div class="px-2 md:px-3 py-2">
             <h1 className="text-3xl font-bold text-[#0D025E]">Renter</h1>
              <span className="text-slate-900">Account</span>
                <ul className="mt-3">
                  <li className="flex items-center gap-1">
                    <AiOutlineCheckCircle className="text-[#409725]"/>
                    View All Properties
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    Send Requests
                  </li>
                  <li className="flex items-center gap-1">
                    <AiOutlineCheckCircle className="text-[#409725]"/>
                    Update Account
                  </li>
                  <li className="flex items-center gap-1">
                      <AiOutlineCloseCircle className='text-[#FF6746]'/>
                    Add property
                  </li>

                  <li className="flex items-center gap-1">
                      <AiOutlineCloseCircle className='text-[#FF6746]'/>
                    property management
                  </li>
                </ul>
              </div>
            <div className="px-6 py-2">
              <Link to='/signUp'>
                <button 
                className='w-full bg-[#4949DB] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-[#0D025E] shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3]'>Register</button>
              </Link>
              <p className="mt-2 text-sm text-gray-700 padding-right:16">
                Already have account?
              </p>
              <div className="mt-2">
                <Link to='/signIn'>
               <p className="text-sm cursior-pointer text-[#00befe]">Sign in</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-[400px]:w-[94%] w-[260px]  overflow-hidden shadow-lg rounded-3xl border-2  border-[#00befe] p-5">
            <div class="px-2 md:px-3 py-2">
              <h1 className="text-3xl font-bold text-[#0D025E]">Owner</h1>
              <span className="text-slate-900">Account</span>
                <ul className="mt-3">
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    Approve Requests 
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    Property management
                  </li>
                  <li className="flex items-center gap-1">
                     <AiOutlineCheckCircle className="text-[#409725]"/>
                    Add property
                  </li>
                  <li className="flex items-center gap-1">
                    <AiOutlineCheckCircle className="text-[#409725]"/>
                    Update Account
                  </li>

                  <li className="flex items-center gap-1">
                    <AiOutlineCheckCircle className="text-[#409725]"/>
                    Tenant management
                  </li>
                </ul>
              </div>
            <div className="px-6 py-2">
              <Link to='/Owner/signUp'>
                <button className='w-full bg-[#4949DB] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-[#0D025E] shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3]'>
                  Register
                </button>
              </Link>
              <p className="mt-2 text-sm text-gray-700 padding-right:16">
               Already have account?
              </p>
              <div className="mt-2">
                <Link to='/Owner/signIn'>
               <p className="text-sm cursior-pointer text-[#00befe]">Sign in</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Content;
