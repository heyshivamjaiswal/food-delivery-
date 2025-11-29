import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

export function Header(){
    const[btnNameReact , setBtnNameReact] = useState("Login");

    // const {loggedInUser} = useContext(UserContext)
    // console.log(loggedInUser);
 
    //subscring to the store using a selector 
  const items = useSelector((state: RootState) => state.cart.items);

    const onlineStatus = useOnlineStatus();
         return (
  <header className="w-full bg-amber-200 shadow-md">
    <div className="max-w-6xl h-40 mx-auto flex items-center justify-between py-4 px-6">

      <div className="flex items-center">
      <Link to="/"><img
          className="h-30 w-30S rounded-full object-cover shadow"
          src="https://static.vecteezy.com/system/resources/previews/021/953/308/large_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
          alt="logo"
        /></Link>
      </div>

      <nav>
        <ul className="flex items-center gap-8 text-lg font-medium">

          <li className="text-gray-700">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>

          <li>
            <Link className="hover:text-red-500 transition " to="/">Home</Link>
          </li>

          <li>
            <Link className="hover:text-red-500 transition " to="/about">About Us</Link>
          </li>

          <li>
            <Link className="hover:text-red-500 transition " to="/contact">Contact Us</Link>
          </li>

         <li className="hover:text-red-500 transition">
         <Link to="/cart">
          Cart- ({items.length}items)
          </Link> 
          </li>

          <li>
          <button
              className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition-all duration-300 focus:border-transparent hover:-translate-y-0.5 hover:shadow-xl"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
}
