import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-end ">
      <div className="border border-white/20 border-r-0 border-t-0 p-2 rounded-bl-2xl">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-center space-x-1 focus:outline-none"
          >
            <img
              src="https://imgproxy.attic.sh/7ZD0xa-oZHH0P6gUAlxwFlC7a3QkBcu4JzKORTG3ZS4/rs:fit:768:768:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRp/Yy5zaC9jZTR4cTFr/NXM0eXJxbWs2dGZx/dWN2aWRlNjI3.png"
              alt="User Profile"
              className="size-12 lg:size-16"
            />
            <span className="material-symbols-outlined text-white hover:text-purple-500 pt-1">
              expand_more
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute -right-2 mt-2 md:w-48 w-44 rounded-lg shadow-lg bg-gray-50/50">
              <ul className="py-2 text-gray-700">
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-white/50 text-gray-900/80 cursor-pointer flex items-center gap-3"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3059/3059416.png"
                    alt="profile pic"
                    className="w-6"
                  />
                  Uday Sathwara
                </Link>
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-white/50 text-gray-900/80 cursor-pointer flex items-center gap-3"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png"
                    alt="linkedin"
                    className="w-6"
                  />
                  LinkedIn
                </Link>
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-white/50 text-gray-900/80 cursor-pointer flex items-center gap-3"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                    alt="intsagram"
                    className="w-6"
                  />
                  Instagram
                </Link>
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-white/50 text-gray-900/80 cursor-pointer flex items-center gap-3"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="github"
                    className="w-6"
                  />
                  Github
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
