import { useState } from "react";
import { head_LOGO } from "../util/logo";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";   

import { changeuser } from "../util/loginSlice";
const Header = () => {

  const [login,setLogin] = useState("Login");
  
  const cartItems = useSelector((store)=> store.cart.items)

  const dispatch = useDispatch() ;

  const LoggedInUser = useSelector((store)=> store.loggedUser.loggedInUser)


  const handleClick = () => {

    if(login === "Login"){
      setLogin("Logout")

      dispatch(changeuser("hi User"))   
      
    }
    
    else{
      setLogin("Login")

    
      dispatch(changeuser(""))
      
    }

   

  }


    return (
      <div className="flex justify-between bg-pink-200 shadow-lg m-2 ">
        <div className="head-logo">
          <img
            className="w-40 "
            src={head_LOGO}
          />
        </div>
  
        <div className="flex items-center">
          <ul className="flex p-4 m-4 gap-4 ">
            <Link to ="/"><li className= "relative group text-gray-800 hover:text-blue-500 text-lg">Home</li></Link>  
            <Link to="/about"><li className="relative group text-gray-800 hover:text-blue-500 text-lg">About us</li></Link>
            <Link to="/contact"><li className="relative group text-gray-800 hover:text-blue-500 text-lg">Contact us</li></Link>
           <Link to="/cart"> <li className="text-lg relative group text-gray-800 hover:text-blue-500" >Cart({cartItems.length})items</li> </Link>
            <li > <button className= " text-lg bg-purple-300 px-1 rounded-md" onClick={handleClick}> {login} </button> </li>

            <li className="text-lg">{LoggedInUser}</li>
          </ul>
        </div>
      </div>
    );
}
  export default Header;