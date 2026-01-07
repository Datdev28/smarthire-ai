import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
const DropdownAccount = () => {
  const [isDropdownWork, setIsDropdownWork] = useState(false);
  const [isDropdownAccount, setIsDropdownAccount] = useState(false);
  return (
    <>
      <div className="p-4 flex gap-x-4 border-b-2 border-gray-300">
        <img
          src="laptrinhvien.jpg"
          className="w-16 h-16 object-cover rounded-full"
          alt="Ảnh đại diện"
        />
        <div>
          <p className="font-semibold text-black">Quang Đạt</p>
          <p className="text-sm">Tài khoản đã xác thực</p>
          <div className="flex items-center">
            <p>ID 123456</p>
            <hr className="h-4 border-0 w-px bg-black mx-2" />
            <p className="max-w-40 truncate">nguyenquangdat2842003@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex p-4 py-2 items-center gap-x-4">
        <img src="/briefcase.png" className="w-6 h-6" alt="vali" />
        <div className="w-full flex justify-between items-center">
          <p className="hover:text-blue-400">Quản lý tìm việc</p>
          <MdKeyboardArrowDown
            className={`text-2xl ${
              !isDropdownWork ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setIsDropdownWork(!isDropdownWork)}
          />
        </div>
      </div>
      <div
        className={`pl-14 text-sm text-gray-500 overflow-hidden transition-all duration-400 ${
          !isDropdownWork ? "max-h-0" : "max-h-40"
        }`}
      >
        <p className="hover:text-blue-400 cursor-pointer py-1">
          Việc làm đã lưu{" "}
        </p>
        <p className="hover:text-blue-400 cursor-pointer py-1">
          Việc làm đã ứng tuyển
        </p>
        <p className="hover:text-blue-400 cursor-pointer py-1">
          Việc làm phù hợp với bạn
        </p>
      </div>
      <div className="flex p-4 py-2 items-center gap-x-4">
        <img src="/user.png" className="w-6 h-6" alt="cá nhân và bảo mật" />
        <div className="w-full flex justify-between items-center">
          <p className="hover:text-blue-400">Cá nhân vào bảo mật</p>
          <MdKeyboardArrowDown
            className={`text-2xl ${
              !isDropdownAccount ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setIsDropdownAccount(!isDropdownAccount)}
          />
        </div>
      </div>
      <div
        className={`pl-14 text-sm text-gray-500 overflow-hidden transition-all duration-400 ${
          !isDropdownAccount ? "max-h-0" : "max-h-40"
        }`}
      >
        <p className="hover:text-blue-400 cursor-pointer py-1">
          Cài đặt thông tin cá nhân
        </p>
        <p className="hover:text-blue-400 cursor-pointer py-1">Đổi mật khẩu</p>
      </div>
      <div className="w-full p-4">
        <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-full justify-center cursor-pointer flex items-center gap-x-4">
          <FiLogOut className="text-lg"/>
          <p>Đăng xuất</p>
        </button>
      </div>
    </>
  );
};

export default DropdownAccount;
