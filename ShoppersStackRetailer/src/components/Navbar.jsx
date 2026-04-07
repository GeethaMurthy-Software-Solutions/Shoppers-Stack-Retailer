import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-white border-b flex items-center justify-between px-4 md:px-6 z-50">

      <div className="flex items-center gap-3 text-gray-800">
        <GiHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <span className="font-bold text-xs sm:text-sm">My Merchant Store</span>
      </div>
      <div className="font-bold text-sm sm:text-base text-gray-900">
        Shopers Stack
      </div>
      <div className="flex items-center gap-4 text-gray-700">
        <IoMdNotificationsOutline className="text-xl cursor-pointer hover:text-black"/>
        <FaRegUser className="text-lg cursor-pointer hover:text-black"/>
      </div>

    </div>
  );
};

export default Navbar;