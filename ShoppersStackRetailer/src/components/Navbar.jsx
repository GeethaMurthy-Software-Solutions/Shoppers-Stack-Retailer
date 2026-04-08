import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-white border-b flex items-center justify-between px-4 md:px-6 z-50">

      <div className="flex items-center gap-3">
        <GiHamburgerMenu
          className="text-xl cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
        <span className="font-medium hidden sm:block">My Merchant Store</span>
      </div>
      <div className="font-semibold text-sm sm:text-lg">
        Shopers Stack
      </div>
      <div className="flex items-center gap-4">
        <IoMdNotificationsOutline className="text-xl cursor-pointer"/>
        <FaRegUser className="text-xl cursor-pointer"/>
      </div>

    </div>
  );
};

export default Navbar;