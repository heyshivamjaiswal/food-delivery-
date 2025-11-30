import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

export function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useSelector((state: RootState) => state.cart.items);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="w-full bg-amber-200 shadow-md relative z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            className="h-16 w-16 rounded-full object-cover shadow"
            src="https://static.vecteezy.com/system/resources/previews/021/953/308/large_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
            alt="logo"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "≡"}
        </button>

        {/* NAV */}
        <nav
          className={`
            ${menuOpen ? "block" : "hidden"} 
            lg:flex lg:items-center lg:gap-10
            w-full lg:w-auto
            text-lg font-medium
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 p-4 lg:p-0">

            <li className="text-gray-700">
              Status: {onlineStatus ? "🟢" : "🔴"}
            </li>

            <li><Link className="hover:text-red-500 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/about">About Us</Link></li>
            <li><Link className="hover:text-red-500 transition" to="/contact">Contact Us</Link></li>

            <li>
              <Link className="hover:text-red-500 transition" to="/cart">
                Cart ({items.length})
              </Link>
            </li>

            <li>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition-all"
                onClick={() =>
                  setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
                }
              >
                {btnNameReact}
              </button>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}
