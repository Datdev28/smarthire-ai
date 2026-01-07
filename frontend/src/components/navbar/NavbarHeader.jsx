import { Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const NavbarHeader = () => {
  return (
    <nav className="bg-slate-900 text-white py-2 font-semibold">
      <div className="flex items-center px-6 h-16 ">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-ai-cv.png"
            alt="Smart Hire"
            className="object-contain"
          />
        </Link>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-6 text-sm">
            <Link to="/jobs" className="hover:text-blue-400">
              Việc làm
            </Link>
            <Link to="/" className="hover:text-blue-400">
              Phân tích CV
            </Link>
            <Link to="/handbook" className="hover:text-blue-400">
              Cẩm nang nghề nghiệp
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <button className="p-4 cursor-pointer">
              <IoMdNotifications className="text-2xl" />
            </button>
            <button className="p-4 cursor-pointer">
              <FaMessage />
            </button>
            <div className="relative cursor-pointer">
              <img
                src="laptrinhvien.jpg"
                className="w-10 h-10 object-cover rounded-full"
                alt="ảnh đại diện"
              />
              <IoIosArrowDropdownCircle className="absolute bottom-0 right-0" />
            </div>
            <hr className="h-10 w-px bg-white border-0" />
            <div>
              <p className="text-sm text-gray-500">Bạn là nhà tuyển dụng?</p>
              <p className="whitespace-nowrap hover:text-blue-400 cursor-pointer">
                Đăng tuyển ngay{" "}
                <span>
                  <MdOutlineKeyboardDoubleArrowRight className="inline" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHeader;
