import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1"></div>
          <div className="flex gap-4">
            <div className="header_icon_wrapper p-2 hover:text-blue-500 bg-gray-200 rounded-md p-6px text-14px cursor-pointer">
              <BsFacebook />
            </div>
            <div className="header_icon_wrapper p-2 hover:text-blue-500  bg-gray-200 rounded-md p-6px text-14px cursor-pointer">
              <BsTwitter />
            </div>
            <div className="header_icon_wrapper p-2 hover:text-red-500  bg-gray-200 rounded-md p-6px text-14px cursor-pointer">
              <BsYoutube />
            </div>
            <div className="header_icon_wrapper p-2 hover:text-pink-500   bg-gray-200 rounded-md p-6px text-14px cursor-pointer">
              <BsInstagram />
            </div>
          </div>
<div className="text-gray-500 text-12px">
    <b>Free Shipping</b> This week order on- $60
</div>
<div className="flex gap-4">
    <select className="text-gray-500 text-12px w-70px"
    name="currency"
    id="currency">
        <option value="USD $">USD $</option>
        <option value="EUR €">EUR €</option>
        <option value="PKR">PKR</option>

    </select>
    <select className="text-gray-500 text-12px w-80px"
    name="language"
    id="language">
        <option value="English">English</option>
        <option value="French">French</option>

        

    </select>


</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
