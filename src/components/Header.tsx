import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

export function Header() {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useSelector((state: RootState) => state.cart.items);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="w-full bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center z-20 relative">
            <img
              className="h-14 w-14 rounded-full object-cover shadow-sm"
              src="https://static.vecteezy.com/system/resources/previews/021/953/308/large_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
              alt="logo"
            />
            <span className="ml-3 font-bold text-xl text-gray-800">FoodApp</span>
          </Link>

          {/* Hamburger button for mobile */}
          <button
            className="lg:hidden text-3xl text-gray-800 relative z-30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "×" : "≡"}
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-10 text-base font-medium">
            <ul className="flex items-center gap-6">
              <li className="text-gray-700 font-medium">
                Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}
              </li>
              <li>
                <Link className="hover:text-gray-900 px-2 py-1 transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900 px-2 py-1 transition" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900 px-2 py-1 transition" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900 px-2 py-1 transition" to="/cart">
                  Cart ({items.length})
                </Link>
              </li>
              <li>
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-700 transition-all duration-300"
                  onClick={() =>
                    setBtnName(btnName === "Login" ? "Logout" : "Login")
                  }
                >
                  {btnName}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 p-4 bg-gray-50 rounded-b-xl shadow-md">
            <li className="text-gray-700 font-medium">
              Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-gray-900 block px-2 py-1 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-900 block px-2 py-1 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-900 block px-2 py-1 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-gray-900 block px-2 py-1 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Cart ({items.length})
              </Link>
            </li>
            <li>
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-700 transition-all duration-300 w-full"
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
