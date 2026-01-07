import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
const DropdownAccount = () => {
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
      <div className="flex p-4 items-center gap-x-4">
        <img src="/briefcase.png" className="w-6 h-6" alt="vali"/>
        <div className="w-full flex justify-between items-center">
          <p className="hover:text-blue-400">Quản lý tìm việc</p>
          <MdKeyboardArrowDown className="text-xl"/>
          {/* <MdKeyboardArrowUp/> */}
        </div>
      </div>
    </>
  );
};

export default DropdownAccount;
